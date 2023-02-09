<script lang="ts">
    import Scrollbutton from "./Scrollbutton.svelte";
</script>
<div>
    <h1>passau.party 🎉</h1>
    <Scrollbutton />
</div>

<style>
    div {
        display: flex;
        max-width: 800px;
        align-items: baseline;
        justify-content: space-between;
        position: fixed;
        top: 0;
        background-color: var(--main-bg-color);
        width: 100%;
    }
</style>