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
    "new_myths": {
        name: "New Myths",
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