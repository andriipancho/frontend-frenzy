export const config = {
  database: {
    host: "localhost",
    port: 5432,
    ssl: false,
  },
  logLevel: "info",
};

export type DatabaseOptions = object;
