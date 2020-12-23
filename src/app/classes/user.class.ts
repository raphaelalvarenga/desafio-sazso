export class User {
    private _id: number;
    private _email: string;
    private _name: string;

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get email() {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}