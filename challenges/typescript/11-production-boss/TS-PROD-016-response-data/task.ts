export type ApiResponse =
  | { ok: true; status: 200; data: { id: string } }
  | { ok: true; status: 201; data: { id: string; created: true } }
  | { ok: false; status: 400; error: "invalid" }
  | { ok: false; status: 404; error: "missing" };

// TODO: preserve branch-specific information in the transformed contract.
export type ResponseData<U> = unknown;
