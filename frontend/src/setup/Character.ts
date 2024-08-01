export type Character = {
    name: string
    fullBody?: string,
    closeUp?: string,
    pixel?: string,
    thumbnail?: string,
    portrait?: string,
    title?: string,
    description?: string,
    animations: {[id: string]: string},
}

export const characters: { [key: string]: Character } = {
    "Doctor": {
        name: "Doctor",
        fullBody: "doctor_fullbody.png",
        portrait: "doctor_portrait.png",
        pixel: "doctor_pixel.png",
        closeUp: "doctor_closeup.png",
        thumbnail: "thumbnail-doctor.png",
        title: "title-doctor.png",
        description: "From the moment you could read, you’ve been interested in the human body. You feel that you are in this world to help people, and you have spent the majority of your life doing just that. Your expertise has helped many people, and will help many more in the years to come.",
        animations: {},
    },
    "Mechanic": {
        name: "Mechanic",
        fullBody: "mechanic_fullbody.png",
        portrait: "mechanic_portrait.png",
        pixel: "mechanic_pixel.png",
        closeUp: "mechanic_closeup.png",
        thumbnail: "thumbnail-mechanic.png",
        title: "title-mechanic.png",
        description: "For as long as you can remember, you’ve been enamoured with mechanics. The inner workings of machines, the whirring, spinning parts. You’ve become adept at your craft, and are regarded one of the most proficient mechanics in the galaxy.",
        animations: {},
    },
    "Artist": {
        name: "Artist",
        fullBody: "artist_fullbody.png",
        portrait: "artist_portrait.png",
        pixel: "artist_pixel.png",
        closeUp: "artist_closeup.png",
        thumbnail: "thumbnail-artist.png",
        title: "title-artist.png",
        description: "Your creativity has always been your driving force. You see patterns, exquisite visions everywhere you look, and you convey this for all to see. Your work often expresses a feeling of deep calm and great beauty.",
        animations: {},
    },
    "Librarian": {
        name: "Librarian",
        fullBody: "npc_librarian_neutral.png",
        animations: {
            "neutral": "npc_librarian_neutral.png",
            "angry": "npc_librarian_angry.png",
            "happy": "npc_librarian_happy.png",
            "sad": "npc_librarian_sad.png",
        }
    },
    "Suited Figure": {
        name: "Suited Figure",
        fullBody: "npc_suitguy_1.png",
        animations: {
            "alt1": "npc_suitguy_2.png",
            "alt2": "npc_suitguy_3.png",
        }
    },
    "AI": {
      name: "AI",
      fullBody: "npc_ai.png",
      animations: {
          "happy": "npc_ai_happy.png",
          "sad": "npc_ai_sad.png",
          "veryhappy": "npc_ai_veryhappy.png",
      }
    },
};
