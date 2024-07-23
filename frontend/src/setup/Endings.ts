export type Ending = {
  title: string,
  description: string,
};

export const endings: { [key: string]: Ending } = {
  "ending_death": {
      title: "DEATH",
      description: "Your health has been completely depleted.",
    },
  "ending_sheep": {
    title: "SHEEP",
    description: "You are a silly little sheep",
  },
  "ending_forget": {
    title: "FORGET",
    description: "All the memories escape your grasp. There is nothing, yet everything",
  },
  "ending_travel": {
    title: "KEEP TRAVELLING",
    description: "Travelling onwards. Forever and ever and ever.",
  },
  "ending_memory": {
    title: "REMEMBER",
    description: "You have regained all of your memories",
  },
  "ending_wake": {
    title: "WAKE UP SHANGRILA",
    description: "Shangrila is awoken.",
  },
};
