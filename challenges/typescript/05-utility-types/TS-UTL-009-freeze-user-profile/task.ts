export interface Profile {
  name: string;
  email: string;
}

export function freezeProfile(profile: Profile): Profile {
  return Object.freeze(profile);
}
