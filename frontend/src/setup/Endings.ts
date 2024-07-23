export type Ending = {
  title: string,
  description: string,
};

export const endings: { [key: string]: Ending } = {
  "sheep": {
    title: "SHEEP",
    description: "You are a silly little sheep",
  },
  "forget": {
    title: "FORGET",
    description: "All the memories escape your grasp. There is nothing, yet everything",
  },
  "travel": {
    title: "KEEP TRAVELLING",
    description: "Travelling onwards. Forever and ever and ever.",
  },
  "memory": {
    title: "REMEMBER",
    description: "You have regained all of your memories",
  },
  "wake": {
    title: "WAKE UP SHANGRILA",
    description: "Shangrila is awoken.",
  },
};
