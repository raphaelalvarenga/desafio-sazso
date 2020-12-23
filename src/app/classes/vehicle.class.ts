export class Vehicle {
    private _msg: string;
    private _plate: string;
    private _chassis: string;
    private _brand: string;
    private _model: string;
    private _color: string;
    private _yearManufactur: number;
    private _yearModel: number;

    constructor(
        msg: string,
        plate: string,
        chassis: string,
        brand: string,
        model: string,
        color: string,
        yearManufactur: number,
        yearModel: number
    ) {
        this._msg = msg;
        this._plate = plate;
        this._chassis = chassis;
        this._brand = brand;
        this._model = model;
        this._color = color;
        this._yearManufactur = yearManufactur;
        this._yearModel = yearModel;
    }

    get msg() {
        return this._msg;
    }

    set msg(msg: string) {
        this._msg = msg;
    }

    get plate() {
        return this._plate;
    }

    set plate(plate: string) {
        this._plate = plate;
    }

    get chassis() {
        return this._chassis;
    }

    set chassis(chassis: string) {
        this._chassis = chassis;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand: string) {
        this._brand = brand;
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get color() {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }

    get yearManufactur() {
        return this._yearManufactur;
    }

    set yearManufactur(yearManufactur: number) {
        this._yearManufactur = yearManufactur;
    }

    get yearModel() {
        return this._yearModel;
    }

    set yearModel(yearModel: number) {
        this._yearModel = yearModel;
    }

}