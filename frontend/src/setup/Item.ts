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
    "paint_brush": {
        name: "Paint Brush",
        image: "apple.png",
        description: "A paint brush."
    },
    "syringe": {
        name: "Syringe",
        image: "apple.png",
        description: "A syringe."
    },
    "wrench": {
        name: "Wrench",
        image: "apple.png",
        description: "A wrench."
    },
    "pen": {
        name: "Pen",
        image: "apple.png",
        description: "A pen."
    },
    "red_shard": {
        name: "Red Shard",
        image: "cookie.png",
        description: "A red shard."
    },
    "blue_shard": {
        name: "Blue Shard",
        image: "cookie.png",
        description: "A blue shard.",
    },
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