<script lang="ts">
    import { onMount } from "svelte";


    export let content;
    export let date;

    const parsedDatetime = new Date(date);

    onMount(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })

</script>

<div>
    <p class="message">{content}</p>
    <p class="date">{parsedDatetime.toLocaleDateString() + " " + parsedDatetime.toLocaleTimeString()}</p>
</div>

<style>
    div {
        border-radius: 10px;
        margin: 1rem;
        border: 2px solid #646cff;
    }

    .message {
        margin: 0.5rem;
        text-align: start;
        word-wrap: break-word;
    }

    .date {
        margin: 0;
        color: rgb(150,150,150);
        font-size: small;
        align-self: flex-end;
        text-align: end;
        margin: 0.5rem;
    }
</style>