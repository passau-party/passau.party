<script lang="ts">
  import { onMount } from 'svelte';
  import { getPartys, type IcalObject } from '../helpers/calendar-parser';
  import Party from './PartyCard.svelte';
  import type { PartyType } from '../types/types';
  import moment from 'moment';
  import MessageDialog from './MessageDialog.svelte';
  import PartyDialog from './PartyDialog.svelte';

  let selectedParty: PartyType | undefined = undefined;
  let partys: Array<any> = [];

  onMount(async () => {
    partys = (await getPartys()).VCALENDAR[0].VEVENT as Array<any>;
    partys = partys.sort((fst, snd) => {
      return (
        moment(fst['DTSTART;TZID=Europe/Berlin']).unix() -
        moment(snd['DTSTART;TZID=Europe/Berlin']).unix()
      );
    });
    partys = partys.filter((party) => moment(party['DTSTART;TZID=Europe/Berlin']).unix() * 1000 > moment.now())
  });
</script>

<div>
  {#each partys as partyy}
    <Party
      party={{
        location: partyy.LOCATION,
        startDatetime: partyy['DTSTART;TZID=Europe/Berlin'],
        description: partyy.DESCRIPTION,
        name: partyy.SUMMARY,
      }}
      onPartyClick={(p) => (selectedParty = p)}
    />
  {/each}
  <PartyDialog
    onPartyClose={() => (selectedParty = undefined)}
    party={selectedParty}
  />
  <MessageDialog />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
