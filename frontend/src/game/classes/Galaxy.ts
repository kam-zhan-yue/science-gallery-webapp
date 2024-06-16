export type Galaxy = {
    centre: string,
    planets: string[],
}

export const galaxies: { [key: string]: Galaxy } = {
    "start": {
        centre: "Shangri-La",
        planets: [
            "new_myths",
            "debug"
        ]
    }
}