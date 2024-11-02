export class XXHash {
	private seed: number = 0;
	private p1: number = 2654435761;
	private p2: number = 2246822519;
	private p3: number = 3266489917;
	private p4: number = 668265263;
	private p5: number = 374761393;

	constructor(seed: number = 0) {
		this.seed = seed;
		this.random = this._GetXxHash;
	}

	public random(...buf: Array<number>): number {
		return this._GetXxHash(...buf);
	}

	private _RotateLeft(value: number, count: number): number {
		return (value << count) | (value >>> (32 - count));
	}

	private _CalcSubHash(value: number, read_value: number): number {
		value += read_value * this.p2;
		value = this._RotateLeft(value, 13);
		value *= this.p1;
		return value;
	}

	private _GetXxHash(...buf: Array<number>): number {
		let h32;
		let index = 0;
		let len = buf.length;

		if (len >= 4) {
			let limit = len - 4;
			let v1 = this.seed + this.p1 + this.p2;
			let v2 = this.seed + this.p2;
			let v3 = this.seed + 0;
			let v4 = this.seed - this.p1;

			while (index <= limit) {
				v1 = this._CalcSubHash(v1, buf[index]);
				index++;
				v2 = this._CalcSubHash(v2, buf[index]);
				index++;
				v3 = this._CalcSubHash(v3, buf[index]);
				index++;
				v4 = this._CalcSubHash(v4, buf[index]);
				index++;
			}

			h32 =
				this._RotateLeft(v1, 1) +
				this._RotateLeft(v2, 7) +
				this._RotateLeft(v3, 12) +
				this._RotateLeft(v4, 18);
		} else {
			h32 = this.seed + this.p5;
		}

		h32 += len * 4;

		while (index < len) {
			h32 += buf[index] * this.p3;
			h32 = this._RotateLeft(h32, 17) * this.p4;
			index++;
		}

		h32 ^= h32 >>> 15;
		h32 *= this.p2;
		h32 ^= h32 >>> 13;
		h32 *= this.p3;
		h32 ^= h32 >>> 16;

		return (h32 >>> 0) / 4294967295.0;
	}
}