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
        description: "A needle and thread. It seems extremely important for something."
    },
    "mechanic_item": {
        name: "The Sentient Toolbox",
        image: "apple.png",
        description: "A sentient toolbox. It seems extremely important for something."
    },
    "doctor_item": {
        name: "A Syringe",
        image: "apple.png",
        description: "A syringe. It seems extremely important for something."
    },
    "book_1": {
        name: "'I, Robot'",
        image: "book_1.png",
        description: "A really, really heavy book. Good for smacking things. Oh, and maybe reading."
    },
    "book_2": {
        name: "'(Untitled) Heat Book'",
        image: "book_2.png",
        description: "An untitled book about the secrets of the Universe. Unfortunately, it's unreadable."
    },
    "library_card": {
        name: "Library Card",
        image: "library_card.png",
        description: "A card to borrow books with.",
    },
    "spear": {
        name: "Spear",
        image: "spear.png",
        description: "A long sharp spear."
    },
    "flower": {
        name: "Flower",
        image: "flower.png",
        description: "A beautiful flower."
    },
    "pendant": {
        name: "Anna's Pendant",
        image: "pendant.png",
        description: "An antique pendant. It looks like it's been loved and cared for deeply."
    },
    "torch": {
        name: "Torch",
        image: "torch.png",
        description: "A torch capable of lighting up the deepest, darkest corners of the Universe."
    },
    "scroll": {
        name: "Scroll",
        image: "large_scroll.png",
        description: "A long scroll filled with ancient text. The text is indecipherable."
    },
    "star": {
        name: "Star Silk",
        image: "star_silk.png",
        description: "A silk square with an embroidered star."
    },
};
