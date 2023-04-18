import { writable } from "svelte/store";
import { pb } from "./model";

export const authData = writable(undefined);

export function authenticateWithPassword() {
    const data = pb
}