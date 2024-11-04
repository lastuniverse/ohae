import { IPrng } from "./IPrng";

type Class<T> = new (...args: any[]) => T;

export class Prng implements IPrng{
	private _seed: number;
	private _prng: IPrng;

	constructor(prngClass: Class<IPrng>, seed: number = 0) {
		this._seed = seed;
		this._prng = new prngClass(seed);
	}

	get seed(): number {
		return this._seed;
	}

	set seed(value: number) {
		this._seed = value;
		this._prng.seed = value;
	}

	get prng(): IPrng {
		return this._prng;
	}

	set prng(prng: IPrng) {
		this._prng = prng;
		this._prng.seed = this._seed;
	}

	public random(...buf: Array<number>): number {
		return this._prng.random(...buf);
	}
}