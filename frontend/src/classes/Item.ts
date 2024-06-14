export type Item = {
    name: string,
    image: string,
    description: string,
}

const itemRoot: string = "../assets/items/"
export function getImage(item: Item | null): string {
    return itemRoot + item?.image;
}

export const items: { [key: string]: Item } = {
    "excalibur": {
        name: "Excalibur",
        image: "apple.png",
        description: "The sword of legend."
    },
    "teddy_bear": {
        name: "Teddy Bear",
        image: "bread.png",
        description: "Cuddly and snuggly."
    },
    "seed_of_life": {
        name: "Seed of Life",
        image: "avocado.png",
        description: "A powerful seed."
    },
    "holy_water": {
        name: "Holy Water",
        image: "apple-pie.png",
        description: "Washes dirt and grime away like magic!"
    },
};