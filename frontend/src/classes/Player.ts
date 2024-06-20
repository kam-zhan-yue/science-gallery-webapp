import {items} from '../setup/Item.ts'
import {EventBus} from "../EventBus.tsx";

class Player {
    private _class: string = "";
    private _finesse: number = 0;
    private _intuition: number = 0;
    private _persuasion: number = 0;
    private _health: number = 0;
    private _inventory: string[] = [];
    private _inkProgress: number = 0;
    private _gameProgress: number = 0;

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

    get inventory(): string[] {
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

    set inkProgress(value: number) {
        this._inkProgress = value;
    }

    set gameProgress(value: number) {
        this._gameProgress = value;
    }

    get progress() {
        return this._inkProgress + this._gameProgress;
    }

    set inventory(value: string) {
        const arr: string[] = value.split(", ");

        for (const item of arr) {
            if (item in items && !(this._inventory.includes(item))) {
                EventBus.emit("get_item", item);
            }
        }

        this._inventory = [];
        for (const item of arr) {
            if (item in items) {
                this._inventory.push(item);
            }
        }
    }
}
export default Player;