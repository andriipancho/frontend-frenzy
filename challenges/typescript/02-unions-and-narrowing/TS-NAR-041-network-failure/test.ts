import { failureStatus, NetworkFailure } from "./task.js";

failureStatus(new Error("unknown"));
failureStatus(new NetworkFailure("offline", 503));
