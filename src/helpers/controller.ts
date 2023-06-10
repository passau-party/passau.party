import PocketBase from "pocketbase";
import type { Record } from "pocketbase";
import type { PartyType, RequestStatus } from "../types/types";
import moment from "moment";
import { pb } from "./model";

export async function getPartys(): Promise<Record[]> {
  const partys = (await pb.collection("partys").getList(1, 100, {
    filter: `datetime >= "${moment().format("YYYY-MM-DD HH:mm:ss")}"`,
  })).items;
  return partys;
}

export async function fetchPartys(): Promise<Array<PartyType>> {
  const response = await fetch(
    "https://party.pxldeveloper.eu/api/collections/partys/records",
  );
  const partys = await response.json();
  return partys as Array<PartyType>;
}

export const sendPartySubmission = (party: PartyType) => {
  console.log(party);
  return pb.collection("partys").create(party);
};

export async function authenticateWithPassword(
  email: string,
  password: string,
) {
  return await pb.admins.authWithPassword(email, password);
}
