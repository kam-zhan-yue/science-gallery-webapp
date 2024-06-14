import {Item, items} from './Item.ts'

class Player {
    private _class: string = "";
    private _finesse: number = 0;
    private _intuition: number = 0;
    private _persuasion: number = 0;
    private _health: number = 0;
    private _inventory: Item[] = [];

    get class(): string {
        return this._class;
    }

    get finesse(): number{
        return this._finesse;
    }

    get intuition(): number{
        return this._intuition;
    }

    get persuasion(): number{
        return this._persuasion;
    }

    get health(): number {
        return this._health;
    }

    get inventory(): Item[] {
        return this._inventory;
    }

    set class(className: string) {
        this._class = className;
    }

    set finesse(stat: number) {
        this._finesse = stat;
    }

    set intuition(stat: number) {
        this._intuition = stat;
    }

    set persuasion(stat: number) {
        this._persuasion = stat;
    }

    set health(stat: number) {
        this._health = stat;
    }

    set inventory(value: string) {
        const arr: string[] = value.split(", ");

        this._inventory = [];
        for (const item of arr) {
            if(item in items) {
                this._inventory.push(items[item]);
            }
        }
    }
}
export default Player;