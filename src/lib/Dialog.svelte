<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let opened = false;

  const dispatch = createEventDispatcher<{
    close: 'backdrop' | 'natural';
  }>();
</script>

{#if opened}
  <div>
    <div
      class="dialog-bg"
      on:click={() => dispatch('close', 'backdrop')}
      on:keydown
    />
    <div class="dialog-root">
      <slot />
    </div>
  </div>
{/if}

<style>
  .dialog-bg {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
  }

  .dialog-root {
    padding: 1rem;
    position: fixed;
    background-color: #646cff;
    border-radius: 1rem;
    transform: translate(-50%, -50%);
    z-index: 101;
    top: 50%;
    left: 50%;
    width: 80%;
  }

  @media screen and (min-width: 800px) {
    .dialog-root {
      width: 40%;
      padding: 2rem;
    }
  }
</style>
