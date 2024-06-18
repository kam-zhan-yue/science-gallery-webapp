export type PlanetData = {
    // used to display the name
    name: string,
    // used for animations
    key: string,
    orbitalRadius: number,
    orbitalPeriod: number,
    clockwiseOrbit: boolean,
}

export const planets: { [key: string]: PlanetData } = {
    "shangri_la" : {
        name: "Shangri-la",
        key: "earth",
        orbitalRadius: 0,
        orbitalPeriod: 0,
        clockwiseOrbit: false,
    },
    "paradox_of_paradise": {
        name: "Paradox Of Paradise",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "words_and_worlds": {
        name: "Words and Worlds",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "new_nature": {
        name: "New Nature",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "ways_of_folding_space": {
        name: "Ways of Folding Space",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "crafting_new_worlds": {
        name: "Crafting New Worlds",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "the_monstrous_feminine": {
        name: "The Monstrous Feminine",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "new_myths": {
        name: "New Myths",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "in_a_new_light": {
        name: "In A New Light",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
    },
    "debug": {
        name: "Debug",
        key: "earth",
        orbitalRadius: 80,
        orbitalPeriod: 30,
        clockwiseOrbit: true,
    }
}