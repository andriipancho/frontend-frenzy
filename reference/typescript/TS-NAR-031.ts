export type Contact = { email: string } | { phone: string };

export function contactAddress(contact: Contact): string {
  return "email" in contact ? contact.email : contact.phone;
}
