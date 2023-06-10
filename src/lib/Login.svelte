<script lang="ts">
  import TextInput from './TextInput.svelte';

  let username: string = '';
  let password: string = '';
</script>

<div>
  <h2>Admin-Panel</h2>
  <form>
    <TextInput label="Username" bind:value={username} />
    <TextInput label="Passwort" bind:value={password} />
    <button type="submit" value="Einloggen" />
  </form>
</div>
