export class Point {
    protected _x: number = 0;
    protected _y: number = 0;

    constructor(value1: number | Point, value2?: number) {
        this.set(value1, value2);
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public set(value1: number | Point | Array<number>, value2?: number): void {
        if (value1 instanceof Point) {
            this.x = value1.x;
            this.y = value1.y;
        } else if (typeof value1 === "number" && typeof value2 === "number") {
            this.x = value1;
            this.y = value2;
        } else {
            throw new Error("Invalid arguments for set method");
        }
    }

    public clone(): Point {
        return new Point(this);
    }

    public distanceTo(value1: number | Point, value2?: number): number {
        if (value1 instanceof Point) {
            const dx = this.x - value1.x;
            const dy = this.y - value1.y;
            return Math.hypot(dx, dy);
        } else if (typeof value1 === "number" && typeof value2 === "number") {
            const dx = this.x - value1;
            const dy = this.y - value2;
            return Math.hypot(dx, dy);
        } else {
            throw new Error("Invalid arguments for move method");
        }
    }

    public move(value1: number | Point, value2?: number): void {
        if (value1 instanceof Point) {
            this.x += value1.x;
            this.y += value1.y;
        } else if (typeof value1 === "number" && typeof value2 === "number") {
            this.x += value1;
            this.y += value2;
        } else {
            throw new Error("Invalid arguments for move method");
        }
    }

    public toString(): string {
        return `(${this.toArray().join(", ")})`;
    }

    public toArray(): Array<number> {
		return [this._x, this._y];
	};
}
