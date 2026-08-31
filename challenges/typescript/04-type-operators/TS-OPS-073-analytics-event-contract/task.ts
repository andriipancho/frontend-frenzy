export interface AnalyticsEvents {
  pageViewed: { path: string; referrer?: string };
  purchaseCompleted: { orderId: string; total: number };
  searchSubmitted: { query: string; resultCount: number };
}

export function track(
  event: keyof AnalyticsEvents,
  payload: AnalyticsEvents[keyof AnalyticsEvents],
): void {
  void event;
  void payload;
}
