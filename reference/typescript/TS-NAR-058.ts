export type Notification =
  | { channel: "email"; address: string; phone?: never; deviceToken?: never }
  | { channel: "sms"; phone: string; address?: never; deviceToken?: never }
  | { channel: "push"; deviceToken: string; address?: never; phone?: never };
