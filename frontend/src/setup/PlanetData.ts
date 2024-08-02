import Vector2 = Phaser.Math.Vector2;

export type PlanetData = {
    // used to display the name
    name: string,
    // used for animations
    key: string,
    orbitalRadius: number,
    orbitalPeriod: number,
    clockwiseOrbit: boolean,
    // soundtrack
    bgm?: string,
    offset: Vector2,
}

export const planets: { [key: string]: PlanetData } = {
    "shangrila" : {
        name: "Shangri-la",
        key: "shangrila",
        orbitalRadius: 0,
        orbitalPeriod: 0,
        clockwiseOrbit: false,
        offset: new Vector2(-3, -3),
    },
    "paradox_of_paradise": {
        name: "Paradox Of Paradise",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
        offset: new Vector2(-3, -3),
    },
    "words_and_worlds": {
        name: "Words and Worlds",
        key: "words_and_worlds",
        orbitalRadius: 80,
        orbitalPeriod: 30,
        clockwiseOrbit: true,
        bgm: "band_1",
        offset: new Vector2(-30, -30),
    },
    "new_nature": {
        name: "New Nature",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
        bgm: 'band_1',
        offset: new Vector2(-3, -3),
    },
    "ways_of_folding_space": {
        name: "Ways of Folding Space",
        key: "folding",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
        bgm: 'band_2',
        offset: new Vector2(-35, -35),
    },
    "crafting_new_worlds": {
        name: "Crafting New Worlds",
        key: "crafting",
        orbitalRadius: 80,
        orbitalPeriod: 30,
        clockwiseOrbit: false,
        bgm: 'band_2',
        offset: new Vector2(-35, -35),
    },
    "the_monstrous_feminine": {
        name: "The Monstrous Feminine",
        key: "feminine",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
        bgm: 'band_3',
        offset: new Vector2(-35, -35),
    },
    "new_myths": {
        name: "New Myths",
        key: "new_myths",
        orbitalRadius: 80,
        orbitalPeriod: 30,
        clockwiseOrbit: false,
        bgm: 'band_3',
        offset: new Vector2(-35, -35),
    },
    "in_a_new_light": {
        name: "In A New Light",
        key: "earth",
        orbitalRadius: 40,
        orbitalPeriod: 20,
        clockwiseOrbit: false,
        offset: new Vector2(-3, -3),
    },
    "debug": {
        name: "Debug",
        key: "earth",
        orbitalRadius: 80,
        orbitalPeriod: 30,
        clockwiseOrbit: true,
        offset: new Vector2(-3, -3),
    }
}
