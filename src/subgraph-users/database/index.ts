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
    "1": createUser({ id: "1" }),
    "2": createUser({ id: "2" }),
    "3": createUser({ id: "3" }),
    "4": createUser({ id: "4" }),
    "5": createUser({ id: "5" }),
  },
};
