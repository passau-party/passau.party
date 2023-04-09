import { convert } from "ical2json";

export interface IcalObject {
  [key: string]: string | string[] | IcalObject[];
}

export async function getPartys() {
  const icsCalendar = await (await fetch(
    "https://cloud.pxldeveloper.eu/remote.php/dav/public-calendars/6TqptcXYDDnNy5pi?export",
  )).text();

  const jsonCalendar = await convert(icsCalendar);

  return jsonCalendar;
}
