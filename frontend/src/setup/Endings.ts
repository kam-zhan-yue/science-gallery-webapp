export type Ending = {
  title: string,
  image?: string,
  description: string,
  endLine?: string,
};

export const endings: { [key: string]: Ending } = {
  "ending_death": {
      title: "You have Died",
      description: "Death is rarely the end.",
    },
  "ending_sheep": {
    title: "Be a Sheep",
    image: "sheep.png",
    description: "None of this is your business. You leave the cave, and immerse yourself in the sounds, sights, and feel of your walk back. Birds chirp, a breeze cools you, bringing you to the perfect temperature. By the time you arrive back at your home, you have almost managed to convince yourself that the cave never existed.",
    endLine: "Just another day in Paradise."
  },
  "ending_forget": {
    title: "Forget",
    description: "Ignorace. You live in both states. You've become quite comfortable with the idea that you're not the main character of this story, but rather a byproduct of it.",
    endLine: "Just another day in Paradise."
  },
  "ending_travel": {
    title: "Keep Travelling",
    description: "Exploration is in your blood. You feel it pulling at you, stronger than any urge you've felt. There is so much out there. All you need to do is look.",
  },
  "ending_memory": {
    title: "Remember",
    description: "They say the soul is the lifeforce of the body. For you, the soul is inextricably linked to your sense of identity. Purpose. Self. There was no other option but to remember who you are. After all, if we don't know who we are, who does?",
  },
  "ending_wake": {
    title: "Awaken Shangrila",
    description: "You could have done anything else. Went off on your own, kept your memories to yourself, forgotten. Instead, you decided to share your newfound gift with your home. Your friends, family, the old woman down the street. Your life won't get any easier - you haven't given yourself a free ride into luxury. But when you watch a child exclaiming their name excitedly to their parents, you can smile.",
    endLine: "You have done well."
  },
};
