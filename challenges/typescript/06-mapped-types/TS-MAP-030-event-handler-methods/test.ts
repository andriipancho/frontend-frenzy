import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";import type { EventHandlers } from "./task.js";
type Events={connected:{at:Date};message:{text:string}};type Expected={onConnected:(payload:{at:Date})=>void;onMessage:(payload:{text:string})=>void};type Cases=[Expect<Equal<EventHandlers<Events>,Expected>>];export type TestCases=Cases;
