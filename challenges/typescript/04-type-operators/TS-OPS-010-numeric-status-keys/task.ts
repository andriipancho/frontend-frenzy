export type StatusByCode = {
  200: "ok";
  404: "missing";
  503: "unavailable";
};

export type StatusCode = number;
