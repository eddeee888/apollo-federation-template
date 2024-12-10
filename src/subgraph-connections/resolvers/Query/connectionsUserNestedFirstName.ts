import type { QueryResolvers } from "./../../types.generated";
export const connectionsUserNestedFirstName: NonNullable<
  QueryResolvers["connectionsUserNestedFirstName"]
> = async (_parent, args, _ctx) => {
  console.log("*** connections.Query.connectionsUserNestedFirstName", args);
  return {
    _id: args.id,
    name: {
      first: `connectionsUserNestedFirstName_FirstName:${args.id}`,
      last: `connectionsUserNestedFirstName_LastName:${args.id}`,
    },
  };
};
