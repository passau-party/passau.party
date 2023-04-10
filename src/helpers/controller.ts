import type { Message } from "../types/interfaces";
import { messages } from "./model";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://party.pxldeveloper.eu");

export async function fetchMessages() {
  const record = await pb.collection("messages").getList(1, 100, {
    expand: "users",
  });

  const posts = await pb.collection("posts").getList(1, 100, {
    expand: "users",
  });
  console.log(posts);

  let fetchedMessages: Message[] = [];
  record.items.forEach((item) => {
    fetchedMessages.push({
      content: item.content,
      date: item.created,
    });
  });
  messages.update(() => fetchedMessages);
}

export function registerBackendListener() {
  pb.collection("messages").subscribe("*", (e) => {
    console.log(e.record);
    messages.update((ms) => {
      let extendedMessages = ms;
      extendedMessages.push({
        content: e.record.content,
        date: e.record.created,
      });
      console.log(e);
      return extendedMessages;
    });
  });
}

export async function sendMessage(message: string) {
  const record = await pb.collection("messages").create({
    content: message,
  });
}
