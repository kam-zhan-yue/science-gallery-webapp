export type Item = {
    name: string,
    image: string,
    description?: string,
}

const itemRoot: string = "../assets/items/"
export function getImage(item: Item | null): string {
    return itemRoot + item?.image;
}

export const items: { [key: string]: Item } = {
    "artist_item": {
        name: "Needle and Thread",
        image: "apple.png",
        description: "Red thread thingy."
    },
    "mechanic_item": {
        name: "The Sentient Toolbox",
        image: "apple.png",
        description: "A syringe."
    },
    "doctor_item": {
        name: "A Syringe",
        image: "apple.png",
        description: "A wrench."
    },
    "book_1": {
        name: "'I, Robot'",
        image: "apple.png",
        description: "A pen."
    },
    "book_2": {
        name: "'(Untitled) Heat Book'",
        image: "cookie.png",
        description: "A red shard."
    },
    "library_card": {
        name: "Library Card",
        image: "cookie.png",
        description: "A blue shard.",
    },
    "spear": {
        name: "Spear",
        image: "apple.png",
        description: "The sword of legend."
    },
    "flower": {
        name: "Flower",
        image: "bread.png",
        description: "Cuddly and snuggly."
    },
    "pendant": {
        name: "Anna's Pendant",
        image: "bread.png",
        description: "Cuddly and snuggly."
    },
    "scroll": {
        name: "Scroll",
        image: "avocado.png",
        description: "A powerful seed."
    },
};