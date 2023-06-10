<script lang="ts">
    import Help from './Help.svelte'
</script>

<div>
    <h1>passau.party 🎉</h1>
    <Help />
</div>

<style>
    div {
        max-width: 800px;
        position: fixed;
        top: 0;
        background-color: var(--secondary-accent-color);
        width: 100%;
        text-align: center;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    h1 {
        font-size: xx-large;
    }
</style>
