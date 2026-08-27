export type Notification = {
  channel: "email" | "sms" | "push";
  address?: string;
  phone?: string;
  deviceToken?: string;
};
