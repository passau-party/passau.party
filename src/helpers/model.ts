import { writable } from "svelte/store";
import type { Message } from "../types/interfaces";

export let currentUser: string = "Julian";
export let messages = writable<Array<Message>>([]);
