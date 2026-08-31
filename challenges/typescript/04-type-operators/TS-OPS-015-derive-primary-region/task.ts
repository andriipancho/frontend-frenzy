export const deployment = {
  primary: { region: "eu-central-1", replicas: 3 },
  backup: { region: "us-east-1", replicas: 1 },
};

export type PrimaryRegion = string;
