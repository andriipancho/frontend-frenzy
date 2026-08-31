import { connect } from "./task.js";

connect({ host: "localhost", port: 5432, secure: false });
// @ts-expect-error host is required at this boundary
connect({ port: 5432, secure: false });
// @ts-expect-error secure is required at this boundary
connect({ host: "localhost", port: 5432 });
