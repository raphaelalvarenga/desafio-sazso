import { User } from "./user.class"

export class List {
    private _id: number;
    private _plate: string;
    private _date: string;
    private _user: User;

    constructor(id: number, plate: string, date: string, user: User) {
        this._id = id;
        this._plate = plate;
        this._date = date;
        this._user = user;
    }

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

    set date(date: string) {
        this._date = date;
    }

    get user() {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }
}