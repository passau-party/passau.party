<script lang="ts">

    function scrollToToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

</script>

<div>
    <button on:click={scrollToToBottom}>scrollen</button>
</div>

<style>
    button {
        padding: 1rem;
        background-color: var(--accent-color);
    }
</style>