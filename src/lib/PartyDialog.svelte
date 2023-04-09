<script lang="ts">
  import moment from 'moment';
  import type { PartyType } from './types';

  export let party: PartyType;
  export let onClose: () => void;
</script>

<div>
  <div class="dialog-bg" />
  <div class="dialog-root">
    <h1>{party.name}</h1>
    <p>{party.description}</p>
    <p>{moment(party.startDatetime).calendar()}</p>
    <p>
      Location: {party.location !== undefined
        ? party.location
        : 'Nicht angegeben'}
    </p>
    <button on:click={onClose}>Schließen</button>
  </div>
</div>

<style>
  .dialog-bg {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .dialog-root {
    padding: 1rem;
    position: absolute;
    background-color: #646cff;
    border-radius: 1rem;
    transform: translate(-50%, -50%);
    z-index: 101;
    top: 50%;
    left: 50%;
    width: 80%;
  }

  #map {
    width: 100%;
    height: 20rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) {
    .dialog-root {
      width: 40%;
      padding: 2rem;
    }
  }
</style>
