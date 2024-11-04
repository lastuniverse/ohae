export interface IPrng {
	seed: number;
	random(...buf: Array<number>): number;
}