<script lang="ts">
  import moment from 'moment';
  import type { PartyType } from '../types/types';
  import Dialog from './Dialog.svelte';
  import { createEventDispatcher } from 'svelte';

  export let party: PartyType;
  export let onPartyClose: () => void;

  let opened = false;
  $: opened = party !== undefined;
</script>

<Dialog {opened} on:close={onPartyClose}>
  <h1>{party.name}</h1>
  <p>{party.description}</p>
  <p>{moment(party.startDatetime).calendar()}</p>
  <p>
    Location: {party.location !== undefined
      ? party.location
      : 'Nicht angegeben'}
  </p>
  <button on:click={onPartyClose}>Schließen</button>
</Dialog>
