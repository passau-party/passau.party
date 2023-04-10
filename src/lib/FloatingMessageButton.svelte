<script lang="ts">
  import PaperPlane from '../assets/PaperPlane.svelte';
</script>

<button on:click>
  <PaperPlane size="2rem" />
</button>

<style>
  button {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    right: 1rem;
    bottom: 1rem;
    border-radius: 10rem;
    background-color: #535bf2;
  }
</style>
