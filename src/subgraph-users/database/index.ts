export interface DatabaseUser {
  id: string;
  username: string;
  favouriteProductIds: string[];
}
const createUser = ({
  id,
  favouriteProductIds,
}: {
  id: string;
  favouriteProductIds: string[];
}): DatabaseUser => {
  return {
    id,
    username: `username-${id}`,
    favouriteProductIds,
  };
};

export const database: { users: Record<string, DatabaseUser> } = {
  users: {
    "u:1": createUser({ id: "u:1", favouriteProductIds: ["p:2"] }),
    "u:2": createUser({ id: "u:2", favouriteProductIds: ["p:1", "p:3"] }),
    "u:3": createUser({ id: "u:3", favouriteProductIds: [] }),
    "u:4": createUser({ id: "u:4", favouriteProductIds: ["p:1"] }),
    "u:5": createUser({ id: "u:5", favouriteProductIds: ["p:4"] }),
  },
};
