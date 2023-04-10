<script lang="ts">
  export let label: string;
  export let date: string;
</script>

<span>
  <span>
    <strong>{label}</strong>
  </span>
  <input bind:value={date} type="datetime-local" />
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
    margin: 0.5rem 0 0.5rem 0;
  }
</style>
