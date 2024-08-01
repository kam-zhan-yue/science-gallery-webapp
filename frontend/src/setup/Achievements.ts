export type Achievement = {
    name: string,
    description?: string,
    hidden: boolean,
}

export const achievements: { [key: string]: Achievement } = {
    "chooseDoctor": {
        name: "Doctor",
        description: "You have chosen the doctor",
        hidden: true,
    },
    "chooseArtist": {
        name: "Artist",
        description: "You have chosen the artist",
        hidden: true,
    },
    "chooseMechanic": {
        name: "Mechanic",
        description: "You have chosen the mechanic",
        hidden: true,
    },
    "gamesStarted": {
        name: "Games Started",
        hidden: true,
    },
    "gamesCompleted": {
        name: "Games Completed",
        hidden: false,
    },
    "achievementShangrila": {
        name: "Shangri-La",
        description: 'Wake up in Shangrila',
        hidden: false,
    },
    "achievementParadox": {
        name: "Paradox of Paradise",
        hidden: false,
    },
    "achievementNature": {
        name: "New Nature",
        hidden: false,
    },
    "achievementWords": {
        name: "Words and Worlds",
        hidden: false,
    },
    "achievementFolding": {
        name: "Folding Time and Space",
        hidden: false,
    },
    "achievementCrafting": {
        name: "Crafting New Worlds",
        hidden: false,
    },
    "achievementFeminine": {
        name: "The Monstrous Feminine",
        hidden: false,
    },
    "achievementMyths": {
        name: "New Myths",
        hidden: false,
    },
    "endingSheep": {
        name: "Sheep Ending",
        hidden: false,
    },
    "endingForget": {
        name: "Forget Everything",
        description: "Forget yourself",
        hidden: false,
    },
    "endingTravel": {
        name: "Keep Travelling",
        description: "Onwards to the deep unknowns of space.",
        hidden: false,
    },
  "endingMemory": {
        name: "Regain Memories",
        description: "You remember everything.",
        hidden: false,
    },
    "endingWake": {
        name: "Wake up Shangrila",
        description: "It is awoken.",
        hidden: false,
    },
    "pureShards": {
        name: "Pure Shards",
        description: "",
        hidden: false,
    },
    "corruptedShards": {
        name: "Corrupted Shards",
        description: "",
        hidden: false,
    },
};
