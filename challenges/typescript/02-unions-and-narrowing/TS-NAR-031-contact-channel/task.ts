export type Contact = { email: string } | { phone: string };

export function contactAddress(contact: Contact): string {
  return contact.email;
}
