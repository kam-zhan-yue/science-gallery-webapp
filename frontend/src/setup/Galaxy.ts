export type Galaxy = {
    centre: string,
    planets: string[],
}

export const galaxies: { [key: string]: Galaxy } = {
    "start": {
        centre: "shangri_la",
        planets: [
            "new_myths",
            "debug"
        ]
    }
}