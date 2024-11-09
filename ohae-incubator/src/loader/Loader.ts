import { SimpleEventEmitter } from "../events";
import { ILoader } from "./ILoader";
import { LoaderProgressData } from "./LoaderProgressData";

export class Loader extends SimpleEventEmitter<string> implements ILoader{
	private static readonly cache: Map<string, Promise<any>> = new Map();
	private baseUrl: string;
	private _amount: number = 0;
    private _count: number = 0;

	constructor(baseUrl: string) {
		super();
		this.baseUrl = baseUrl;
	}

	get isComplete(): boolean {
        return this._count === this._amount;
    }

	get progress(): LoaderProgressData {
        return {
            amount: this._amount,
            count: this._count,
            progress: this._count / this._amount
        } as LoaderProgressData;
    }

	get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
		this.emit('progress', this.progress);

    }

	get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;

		this.emit('progress', this.progress);
		if (this.isComplete) this.emit('complete', this.progress);
    }

	public async load(sourceUrl:string): Promise<any> {
		let url = new URL(sourceUrl, this.baseUrl);
        const data = Loader.cache.get(url.href);
        if(data) return data;

        this.amount++;

        const promise = window.fetch(this.baseUrl + url)
            .then(response => {
                this.count++;
                return response;
            });

		Loader.cache.set(url.href, promise);
        return promise;
    }

	public async get(sourceUrl:string): Promise<any> {
		let url = new URL(sourceUrl, this.baseUrl);
        return Loader.cache.get(url.href);
    }

}