export interface DatabaseTables {
  users: { id: string; email: string; active: boolean };
  invoices: { id: string; total: number; paidAt: Date | null };
}

export function readRowField(
  row: DatabaseTables[keyof DatabaseTables],
  table: keyof DatabaseTables,
  field: PropertyKey,
): unknown {
  void table;
  return Reflect.get(row, field);
}
