<script lang="ts">
  import moment from 'moment';
  import 'moment/locale/de';
  import type { Record } from 'pocketbase';
  
  export let party: Record;
  export let onPartyClick: (party: Record) => void;

</script>

<div>
  <h3>{party.name}</h3>
  <p><strong>{moment(party.datetime).fromNow()}</strong></p>
  <p>
    Location: {party.location !== undefined ? party.location : 'Nicht angegben'}
  </p>
  <button on:click={() => onPartyClick(party)}>Mehr infos</button>
</div>

<style>
  div {
    background-color: #2c3656;
    color: white;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    div {
      width: 100%;
    }
  }
</style>
