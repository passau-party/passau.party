<script lang="ts">
  import moment from 'moment';
  import 'moment/locale/de';
  import type { PartyType } from '../types/types';
  moment.locale('de');

  export let party: PartyType;
  export let onPartyClick: (party: PartyType) => void;
</script>

<div>
  <h3>{party.name}</h3>
  <p><strong>{moment(party.startDatetime).fromNow()}</strong></p>
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
