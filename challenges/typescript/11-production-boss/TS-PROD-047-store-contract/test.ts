import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StoreContract, StoreState } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StoreContract<StoreState>,
      { readonly state: Readonly<StoreState>; selectors: { selectUser: () => { id: string; name: string }; selectOnline: () => boolean }; actions: { setUser: (value: { id: string; name: string }) => void; setOnline: (value: boolean) => void } }
    >
  >,
];

export type TestCases = Cases;
