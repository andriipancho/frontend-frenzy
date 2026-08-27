export type Session = { userId: string };

export function sessionOwner(session: Session | null): string {
  return session.userId;
}
