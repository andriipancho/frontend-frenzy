export type CommandHandler<Command extends { payload: unknown; auth: boolean; result: unknown }> = never;
