<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Bubble from './ChatBubble.svelte';
  import {
    fetchMessages,
    registerBackendListener,
  } from '../helpers/controller';
  import type { Message } from '../types/interfaces';
  import { messages } from '../helpers/model';

  onMount(() => {
    fetchMessages();
    registerBackendListener();
  });

  let displayedMessages = [];

  messages.subscribe(() => {});
</script>

<div>
  {#each $messages as message}
    <Bubble content={message.content} date={message.date} />
  {/each}
</div>

<style>
  div {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
</style>
