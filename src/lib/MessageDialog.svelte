<script lang="ts">
  import moment from 'moment';
  import DateInput from './DateInput.svelte';
  import Dialog from './Dialog.svelte';
  import FloatingMessageButton from './FloatingMessageButton.svelte';
  import TextInput from './TextInput.svelte';
  import type { RequestStatus } from '../types/types';
  import CloseCross from '../assets/CloseCross.svelte';
  import close from 'svelte-awesome/icons/close';
  import Icon from 'svelte-awesome';

  let opened = false;

  let date: string = moment.now().toString();
  let partyName: string = '';
  let partyDescription = '';
  let partyLocation = '';

  let requestStatus: RequestStatus = 'idle';

  function clearValues() {
    date = '';
    partyName = '';
    partyDescription = '';
    partyLocation = '';
  }

  function handleFormSubmit() {
    if (
      date !== undefined &&
      date !== '' &&
      partyLocation !== undefined &&
      partyLocation !== '' &&
      partyName !== undefined &&
      partyName !== '' &&
      partyDescription !== undefined &&
      partyDescription !== ''
    ) {
      requestStatus = 'pending';
      fetch('https://passau-party-form.themrpixel.workers.dev/', {
        method: 'POST',
        body: JSON.stringify({
          name: partyName,
          datetime: date,
          location: partyLocation,
          description: partyDescription,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            requestStatus = 'success';
            setTimeout(() => {
              opened = false;
              requestStatus = 'idle';
              clearValues();
            }, 2000);
          } else {
            requestStatus = 'error';
          }
        })
        .catch((error) => {
          console.log(error);
          requestStatus = 'error';
        });
    } else {
      alert('Bitte überprüfe deine Eingaben.');
    }
  }
</script>

<div>
  <Dialog on:close={() => (opened = false)} {opened}>
    <div class="dialog-header">
      <button id="close-button" on:click={() => (opened = !opened)}
        ><Icon style="width: 1.5rem; height: 1.5rem" data={close} />
      </button>
      <h2>Du weißt noch eine weitere Party?</h2>
    </div>
    <p>Dann teil sie mir mit :)</p>
    <form on:submit|preventDefault={handleFormSubmit} id="party-form">
      <TextInput bind:value={partyName} label="Name der Party" />
      <TextInput
        bind:value={partyDescription}
        variant="multiline"
        label="Kurze Beschreibung"
      />
      <TextInput bind:value={partyLocation} label="Location" />
      <DateInput bind:date label="Datum und Uhrzeit" />
      <button
        disabled={requestStatus !== 'idle'}
        type="submit"
        style="width: 100%; margin-top: 1rem;"
      >
        {#if requestStatus === 'idle'}
          senden
        {:else if requestStatus === 'pending'}
          Nachricht wird versandt...
        {:else if requestStatus === 'error'}
          Fehler aufgetreten!
        {:else if requestStatus === 'success'}
          Nachricht erfolgreich versandt :)
        {/if}
      </button>
    </form>
  </Dialog>
  <FloatingMessageButton on:click={() => (opened = true)} />
</div>

<style>
  #close-button {
    background-color: transparent;
  }
  .dialog-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: start;
    justify-content: space-between;
  }
</style>
