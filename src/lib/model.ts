import { writable } from "svelte/store";
import type { Message } from "./interfaces";

export let currentUser: string = "Julian";
export let messages = writable<Array<Message>>([]);