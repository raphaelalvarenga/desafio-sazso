import { User } from "./user.class"

export class List {
    private _id: number;
    private _plate: string;
    private _date: number;
    private _user: User;

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get plate() {
        return this._plate;
    }

    set plate(plate: string) {
        this._plate = plate;
    }

    get date() {
        return this._date;
    }

    set date(date: number) {
        this._date = date;
    }

    get user() {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }
}