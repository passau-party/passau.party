<script lang="ts">
  import { onMount } from 'svelte';
  import { getPartys, type IcalObject } from './calendar-parser';
  import Party from './Party.svelte';
  import PartyDialog from './PartyDialog.svelte';
  import type { PartyType } from './types';
  import moment from 'moment';

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
  {#if selectedParty !== undefined}
    <PartyDialog
      party={selectedParty}
      onClose={() => (selectedParty = undefined)}
    />
  {/if}
</div>

<style>
  div {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
