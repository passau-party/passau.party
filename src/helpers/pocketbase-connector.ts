import type { PartyType } from "../types/types";

export async function getPartys(): Promise<Array<PartyType>> {
    const response = await fetch("https://party.pxldeveloper.eu/api/collections/partys/records");
    const partys = await response.json();
    return partys as Array<PartyType>;
}