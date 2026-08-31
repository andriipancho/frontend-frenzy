import { track } from "./task.js";

track("pageViewed", { path: "/" });
track("purchaseCompleted", { orderId: "o1", total: 49 });
track("searchSubmitted", { query: "typescript", resultCount: 8 });
// @ts-expect-error purchase payload requires total
track("purchaseCompleted", { orderId: "o1" });
// @ts-expect-error page view does not accept search payload
track("pageViewed", { query: "typescript", resultCount: 8 });
