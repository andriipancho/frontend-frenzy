export interface Preferences {
  display: {
    theme: "light" | "dark";
    density: "comfortable" | "compact";
  };
  notifications: {
    email: boolean;
  };
}

export type DisplayPatch = object;
