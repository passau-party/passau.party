import PocketBase from "pocketbase";
import type { Record } from "pocketbase";
import type { PartyType, RequestStatus } from "../types/types";
import moment from "moment";

const pb = new PocketBase("https://party.pxldeveloper.eu");

export async function getPartys(): Promise<Record[]> {
  const partys = (await pb.collection("partys").getList(1, 100, { filter: `datetime >= "${moment().format('YYYY-MM-DD HH:mm:ss')}"` })).items;
  return partys;
}

export const sendPartySubmission = (party: PartyType) => pb.collection("partys").create(party);
