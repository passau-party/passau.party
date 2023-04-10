<script lang="ts">
  export let label: string;
  export let variant: 'singleline' | 'multiline' = 'singleline';
  export let cols: number = 30;
  export let rows: number = 10;
  export let value: string;
</script>

<span style="width: in">
  <span>
    <strong>{label}</strong>
  </span>
  {#if variant === 'singleline'}
    <input type="text" bind:value />
  {:else}
    <textarea {rows} {cols} bind:value />
  {/if}
</span>

<style>
  input {
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    width: 96%;
  }

  span {
    display: block;
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
  }

  textarea {
    border: none;
    border-radius: 0.5rem;
    width: 99%;
  }
</style>
