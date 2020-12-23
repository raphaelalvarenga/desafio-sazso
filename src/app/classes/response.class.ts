export class Response {
    private _feedbacks: Array<any>;
    private _data: any;

    get feedbacks() {
        return this._feedbacks;
    }

    set feedbacks(feedbacks: Array<any>) {
        this._feedbacks = feedbacks;
    }

    get data() {
        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }
}