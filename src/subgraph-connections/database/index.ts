export const database: {
  watchedProducts: string[][];
  friends: Record<string, string[]>;
  mediaRatings: Record<string, number>;
} = {
  watchedProducts: [
    ["u:1", "p:1"],
    ["u:1", "p:2"],
    ["u:1", "p:3"],
    ["u:2", "p:1"],
    ["u:2", "p:2"],
    ["u:3", "p:1"],
    ["u:3", "p:2"],
    ["u:3", "p:3"],
    ["u:3", "p:4"],
    ["u:3", "p:5"],
    ["u:4", "p:4"],
    ["u:4", "p:5"],
    ["u:5", "p:5"],
  ],
  friends: {
    "u:1": ["u:2", "u:3"],
    "u:2": ["u:1", "u:3"],
    "u:3": ["u:1", "u:2"],
  },
  mediaRatings: {
    "m:1": 5,
    "m:2": 4.6,
  },
};
