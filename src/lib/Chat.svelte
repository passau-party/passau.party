<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Bubble from "./Bubble.svelte";
    import { fetchMessages, registerBackendListener } from "./controller";
  //import { fetchMessages } from "./controller";
  import type {Message} from "./interfaces";
  import { messages } from "./model";

  onMount(() => {
    fetchMessages()
    registerBackendListener()
  })

  let displayedMessages = []

  messages.subscribe(() => {
    
  })
  
</script>

<div>
  { #each $messages as message }
    <Bubble content={message.content} date={message.date} />  
  { /each }
</div>

<style>
  div {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
</style>
