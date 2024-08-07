import {items} from '../setup/Item.ts'
import {EventBus} from "../EventBus.tsx";

class Player {
    private _name: string = 'Hero';
    private _class: string = "";
    private _finesse: number = 0;
    private _intuition: number = 0;
    private _persuasion: number = 0;
    private _health: number = 8;
    private _inventory: string[] = [];
    private _inkProgress: number = 0;
    private _gameProgress: number = 0;
    private _firstShard: string = ''
    private _secondShard: string = '';
    private _thirdShard: string = '';

    get name(): string {
        return this._name;
    }

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

    get firstShard(): string {
        return this._firstShard;
    }

    get secondShard(): string {
        return this._secondShard;
    }

    get thirdShard(): string {
        return this._thirdShard;
    }

    get inventory(): string[] {
        return this._inventory;
    }

    set name(value: string) {
        this._name = value;
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
      if(stat < this.health) {
        EventBus.emit('on_damage');
      }
      this._health = stat;
    }

    set firstShard(value: string) {
        EventBus.emit('get_shard', value);
        this._firstShard = value;
    }

    set secondShard(value: string) {
        EventBus.emit('get_shard', value);
        this._secondShard = value;
    }

    set thirdShard(value: string) {
        EventBus.emit('get_shard', value);
        this._thirdShard = value;
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
        for (const item of this._inventory) {
            if (item in items && !(arr.includes(item))) {
                EventBus.emit("use_item", item);
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
