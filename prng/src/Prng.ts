import { IPrng } from "./IPrng";

type Class<T> = new (...args: any[]) => T;

export class Prng implements IPrng{
	private _seed: number = 0;
	private _prng!: IPrng;

	constructor(prngClass: Class<IPrng>, seed: number = 0) {
		this.seed = seed;
		this.prng = prngClass;
	}

	get seed(): number {
		return this._seed;
	}

	set seed(value: number) {
		this._seed = value;
	}

	get prng(): IPrng {
		return this._prng;
	}

	set prng(prngClass: Class<IPrng>) {
		this._prng = new prngClass(this.seed);
	}

	public random(...buf: Array<number>): number {
		return this._prng.random(...buf);
	}
}