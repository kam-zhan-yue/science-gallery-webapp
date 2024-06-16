export type PlanetData = {
    name: string,
    key: string,
    orbitalRadius: number,
    orbitalPeriod: number,
    clockwiseOrbit: boolean,
}

export const planets: { [key: string]: PlanetData } = {
    "new_myths": {
        name: "New Myths",
        key: "earth",
        orbitalRadius: 50,
        orbitalPeriod: 20,
        clockwiseOrbit: true,
    },
    "debug": {
        name: "Debug",
        key: "earth",
        orbitalRadius: 100,
        orbitalPeriod: 30,
        clockwiseOrbit: true,
    }
}