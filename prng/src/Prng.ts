import { IPrng } from "./IPrng";

export class Prng implements IPrng{
	private _seed!: number;
	private _prng: IPrng;

	constructor(prng: IPrng, seed: number = 0) {
		this._prng = prng;
		this.seed = seed;
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