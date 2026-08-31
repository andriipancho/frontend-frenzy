export interface Profile {
  id: string;
  displayName: string;
  bio: string;
  avatarUrl: string | null;
}

export type ProfileUpdate = Omit<Profile, "id">;
