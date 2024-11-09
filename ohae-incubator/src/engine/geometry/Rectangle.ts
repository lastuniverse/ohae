import { Point } from "./Point";

export class Rectangle extends Point {
	private _position: Point = new Point(0,0);
	private _size: Point = new Point(0,0);

	constructor(value1: number | Point, value2?: number) {
		super(value1, value2);
    }

    public override get x(): number {
        return this._position.x;
    }

    public override set x(value: number) {
        this._position.x = value;
    }

    public override get y(): number {
        return this._position.y;
    }

    public override set y(value: number) {
        this._position.y = value;
    }

	get size(): Point {
		return this._position;
	}

	set size(value: Point) {
		this._size.set(value);
	}

	public get width(): number {
        return this._size.x;
    }

    public set width(value: number) {
        this._size.x = value;
    }

    public get height(): number {
        return this._size.y;
    }

    public set height(value: number) {
        this._size.y = value;
    }

    public toArray(): Array<number> {
		return [this.x, this.y, this.width, this.height];
	};
}

