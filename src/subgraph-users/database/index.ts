interface DatabaseUser {
  id: string;
  username: string;
}
const createUser = ({ id }: { id: string }): DatabaseUser => {
  return {
    id,
    username: `username-${id}`,
  };
};

export const database: { users: Record<string, DatabaseUser> } = {
  users: {
    "u:1": createUser({ id: "u:1" }),
    "u:2": createUser({ id: "u:2" }),
    "u:3": createUser({ id: "u:3" }),
    "u:4": createUser({ id: "u:4" }),
    "u:5": createUser({ id: "u:5" }),
  },
};
