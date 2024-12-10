import type { QueryResolvers } from "./../../types.generated";
export const connectionsUser: NonNullable<
  QueryResolvers["connectionsUser"]
> = async (_parent, args, _ctx) => {
  console.log("*** connections.Query.connectionsUser", args);
  return {
    _id: args.id,
  };
};
