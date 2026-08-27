export type Notification =
  | { channel: "email"; subject: string }
  | { channel: "sms"; phone: string }
  | { channel: "push"; title: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled notification: ${JSON.stringify(value)}`);
}

export function notificationText(notification: Notification): string {
  switch (notification.channel) {
    case "email":
      return notification.subject;
    case "sms":
      return notification.phone;
    default:
      return assertNever(notification);
  }
}
