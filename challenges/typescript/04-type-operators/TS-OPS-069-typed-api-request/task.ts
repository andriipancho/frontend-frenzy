export interface ApiContract {
  createUser: {
    request: { name: string };
    response: { id: string; name: string };
  };
  deleteUser: {
    request: { id: string };
    response: { deleted: boolean };
  };
}

export async function sendRequest(
  route: keyof ApiContract,
  body: ApiContract[keyof ApiContract]["request"],
): Promise<ApiContract[keyof ApiContract]["response"]> {
  void route;
  void body;
  throw new Error("Transport not implemented");
}
