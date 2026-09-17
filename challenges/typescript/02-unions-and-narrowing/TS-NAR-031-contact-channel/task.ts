export type Contact = { email: string } | { phone: string };

export function contactAddress(contact: Contact): string {
  if ("email" in contact) {
    return contact.email;
  } else if ("phone" in contact) {
    return contact.phone;
  }
  return "";
}
