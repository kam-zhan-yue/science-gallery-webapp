export type Character = {
    name: string,
    image: string,
    description: string,
}

export const characters: { [key: string]: Character } = {
    "Doctor": {
        name: "Doctor",
        image: "apple.png",
        description: "Which lives will you save. And equally.. which lives will you choose to forfeit?"
    },
    "Mechanic": {
        name: "Mechanic",
        image: "apple.png",
        description: "With just a wrench, you can fix anything in your sight. Or, choose to destroy entire worlds."
    },
    "Agent": {
        name: "Agent",
        image: "apple.png",
        description: "There is nothing you can hide from, no information you don't know. What will you do when the world turns against you?"
    },
    "Artist": {
        name: "Artist",
        image: "apple.png",
        description: "Loves painting. And coffee."
    },
    "ConspiracyTheorist": {
        name: "Conspiracy Theorist",
        image: "apple.png",
        description: "Open your third eye. The world is not what it seems to be. Lizard people amuck, surveillance cameras in pigeons. We are not alone."
    },
    "Academic": {
        name: "Academic",
        image: "apple.png",
        description: "The next Stephen Hawkings."
    },
};