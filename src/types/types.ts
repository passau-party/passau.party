export type PartyType = {
  name: string;
  description: string;
  startDatetime: string;
  location: string;
};

export type CloseEvent = {
  close: "backdrop" | "natural";
};

export type RequestStatus = "pending" | "success" | "error" | "idle";
