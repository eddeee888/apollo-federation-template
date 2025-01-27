export interface DatabaseUser {
  id: string;
  username: string;
  favouriteProductId: string | null;
}
const createUser = ({
  id,
  favouriteProductId = null,
}: {
  id: string;
  favouriteProductId?: string | null;
}): DatabaseUser => {
  return {
    id,
    username: `username-${id}`,
    favouriteProductId,
  };
};

export const database: { users: Record<string, DatabaseUser> } = {
  users: {
    "u:1": createUser({ id: "u:1", favouriteProductId: "p:5" }),
    "u:2": createUser({ id: "u:2" }),
    "u:3": createUser({ id: "u:3" }),
    "u:4": createUser({ id: "u:4" }),
    "u:5": createUser({ id: "u:5" }),
  },
};
