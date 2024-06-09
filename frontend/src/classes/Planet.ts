class Planet {
    private _name: string = "";
    private _code: string = "";
    private _choice: number = 0;

    get name(): string {
        return this._name;
    }

    get code(): string {
        return this._code;
    }

    get choice(): number {
        return this._choice;
    }

    set name(value: string) {
        this._name = value;
    }

    set code(value: string) {
        this._code = value;
    }

    set choice(value: number) {
        this._choice = value;
    }
}

export default Planet;