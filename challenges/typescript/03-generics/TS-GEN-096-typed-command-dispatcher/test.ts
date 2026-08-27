import type { CommandDispatcher } from "./task.js";

type Commands = {
  rename: { name: string };
  archive: { permanent: boolean };
};
declare const dispatcher: CommandDispatcher<Commands>;
dispatcher.dispatch("rename", { name: "Frontend Frenzy" });
dispatcher.dispatch("archive", { permanent: true });
// @ts-expect-error archive payload cannot be sent to rename
dispatcher.dispatch("rename", { permanent: false });
