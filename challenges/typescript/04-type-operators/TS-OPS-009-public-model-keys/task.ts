export class SessionModel {
  private token = "";
  id = "session";
  expiresAt = new Date();

  refresh(): void {
    this.token = "renewed";
  }
}

export type SessionMember = string;
