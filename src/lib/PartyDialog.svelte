<script lang="ts">
  import moment from 'moment';
  import Dialog from './Dialog.svelte';
  import Icon from 'svelte-awesome';
  import close from 'svelte-awesome/icons/close';
  import type { Record } from 'pocketbase';

  export let party: Record;
  export let onPartyClose: () => void;

  let opened = false;
  $: opened = party !== undefined;
</script>

<Dialog {opened} on:close={onPartyClose}>
  <div class="dialog-header">
    <h2>{party.name}</h2>
    <button id="close-button" on:click={() => (party = undefined)}
      ><Icon style="width: 1.5rem; height: 1.5rem;" data={close} /></button
    >
  </div>
  <p>{party.description}</p>
  <strong>{moment(party.startDatetime).calendar()}</strong>
  <p>
    <strong>
      Location: {party.location !== undefined
        ? party.location
        : 'Nicht angegeben'}
    </strong>
  </p>
</Dialog>

<style>
  #close-button {
    background-color: transparent;
  }
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
</style>
