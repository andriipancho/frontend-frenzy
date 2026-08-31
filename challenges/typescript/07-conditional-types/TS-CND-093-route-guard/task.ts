export type RouteGuard<Route extends { auth: boolean; roles?: readonly string[] }> = never;
