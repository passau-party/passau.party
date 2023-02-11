<script lang="ts">
    import { sendMessage } from "./controller";
    
    let text: string = "";
    let textSize = 0;
    $: textSize = text.replaceAll(" ", "").length;

    async function send() {
        if (textSize > 0 && textSize <= 250) {
            await sendMessage(text);
            text = "";
        }
    }
</script>

<form on:submit|preventDefault={send}>
    {#if 250 - textSize > 0}
        <p>{250 - textSize}</p>
    {:else}
        <p style="color: red;">0</p>
    {/if}
    <input type="text" placeholder="Hier tippen..." bind:value={text}>
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
    </button>    
</form>

<style>
    button {
        margin-right: 1rem;
    }

    svg {
        width: 1rem;
        filter: invert(1);
    }

    input[type="text"] {
        border-radius: 3px;
        padding: 0.7rem;
        margin-right: 1rem;
        border-width: 0;
        width: 80%
    }

    form {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        align-items: stretch;
        position: fixed;
        min-width: 10rem;
        bottom: 1rem;
        width: 100%;
        max-width: 800px;
        vertical-align: middle;
    }

    p {
        text-align: center;
        padding: 1rem;
        border-radius: 5px;
        margin: 1rem;
        margin-top: 0;
        margin-bottom: 0;
        background-color: var(--accent-color);
    }
</style>