import { LoaderProgressData } from "./LoaderProgressData";

export interface ILoader {
	amount: number;
	count: number;
	progress: LoaderProgressData;
	isComplete: boolean;
	load(sourceUrl:string): Promise<any>;
	get(sourceUrl:string): Promise<any>;
}