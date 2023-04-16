export type PartyType = {
  name: string;
  description: string;
  datetime: string;
  location: string;
  reviewed: boolean;
};

export type CloseEvent = {
  close: "backdrop" | "natural";
};

export type RequestStatus = "pending" | "success" | "error" | "idle";
