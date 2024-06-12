class Item {
    private _name: string = "";
    private _image: string = "";

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

    set name(value: string) {
        this._name = value;
    }

    set image(value: string) {
        this._image = value;
    }
}

export default Item;