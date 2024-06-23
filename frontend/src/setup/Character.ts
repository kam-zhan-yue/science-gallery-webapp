export type Character = {
    name: string,
    thumbnail?: string,
    fullBody?: string,
    title?: string,
    description: string,
}

export const characters: { [key: string]: Character } = {
    "Doctor": {
        name: "Doctor",
        fullBody: "doctor_fullbody.png",
        thumbnail: "thumbnail-doctor.png",
        title: "title-doctor.png",
        description: "Which lives will you save. And equally.. which lives will you choose to forfeit?"
    },
    "Mechanic": {
        name: "Mechanic",
        fullBody: "mechanic_fullbody.png",
        thumbnail: "thumbnail-mechanic.png",
        title: "title-mechanic.png",
        description: "With just a wrench, you can fix anything in your sight. Or, choose to destroy entire worlds."
    },
    "Artist": {
        name: "Artist",
        fullBody: "artist_fullbody.png",
        thumbnail: "thumbnail-artist.png",
        title: "title-artist.png",
        description: "Loves painting. And coffee."
    },
};