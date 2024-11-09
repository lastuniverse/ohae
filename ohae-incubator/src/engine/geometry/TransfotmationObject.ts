import { Point } from "./Point";
import { Rectangle } from "../geometry/Rectangle";

export class TransfotmationObject extends Rectangle{
	private _scale = new Point(1, 1);
	private _pivot = new Point(0.5, 0.5);
	private _angle = 0;

	constructor(value1: number | Point, value2?: number) {
		super(value1, value2);
    }

	get scale(): Point {
		return this._scale;
	}

	set scale(value: number | Point) {
		this._scale.set(value);
	}

	get pivot(): Point {
		return this._pivot;
	}

	set pivot(value: number | Point) {
		this._pivot.set(value);
	}

	get angle(): number | Point {
		return this._angle;
	}

	set angle(value: number) {
		this._angle = value ?? this._angle ?? 0;
	}
}