import { Point } from "../geometry/Point";

export class Vector extends Point {

	constructor(param1: number | Point, param2?: number) {
		super(param1, param2)
	}

	public get angle(): number {
		return Math.atan2(this.y, this.x);
	}

	public set angle(value: number) {
		const length = this.length;
		this._x = length * Math.cos(value);
		this._y = length * Math.sin(value);
	}

	public get length(): number {
		return Math.hypot(this._x, this._y);
	}

	public set length(value: number) {
		const multiplier = value / this.length;
		this._x *= multiplier;
		this._y *= multiplier;
	}

	// клонировать вектор
	public clone(): Vector {
		return new Vector(this);
	}

	// установить значения вектора из полярных координат
	public setFromPolar(angle: number, length: number = 1): void {
		this._x = length * Math.cos(angle);
		this._y = length * Math.sin(angle);
	}

	// повернуть вектор
	public rotate(angle: number): Vector {
		const vector = this.clone();
		vector.angle += angle;
		return vector;
	}

	// инвертировать вектор
	public negative(): Vector {
		return new Vector(-this._x, -this._y);
	};

	// сложить с вектором или скаляром
	public add(value: number | Point): Vector {
		if (typeof value === 'number') return new Vector(this._x + value, this._y + value);
		else return new Vector(this._x + value.x, this._y + value.y);
	};

	// вычесть вектор или скаляр
	public subtract(value: number | Point): Vector {
		if (typeof value === 'number') return new Vector(this._x - value, this._y - value);
		else return new Vector(this._x - value.x, this._y - value.y);
	};

	// умножить на вектор или скаляр
	public multiply(value: number | Point): Vector {
		if (typeof value === 'number') return new Vector(this._x * value, this._y * value);
		else return new Vector(this._x * value.x, this._y * value.y);
	};

	// разделить на вектор или скаляр
	public divide(value: number | Point): Vector {
		if (typeof value === 'number') return new Vector(this._x / value, this._y / value);
		else return new Vector(this._x / value.x, this._y / value.y);
	};

	// ???
	public cross(value: Point): Vector {
		return new Vector(
			this._y * value.x - this._x * value.y,
			this._x * value.y - this._y * value.x
		);
	};

	// сравнить с вектором
	public equals(value: Point): boolean {
		return this._x == value.x && this._y == value.y;
	};

	// скалярное перемножение векторов	
	public dot(value1: number | Point, value2?: number): number {
		if (value1 instanceof Point)
			return this._x * value1.x + this._y * value1.y;
		if (typeof value1 === "number" && typeof value2 === "number")
			return this._x * value1 + this._y * value2;
		throw new Error("Invalid arguments for dot method");
	};

	// нормализация вектора
	public unit(): Vector {
		return this.divide(this.length);
	};

	// получение минимальной оси вектора
	public min(): number {
		return Math.min(this._x, this._y);
	};

	// получение максимальной оси вектора
	public max(): number {
		return Math.max(this._x, this._y);
	};

	// получение угла между вектором и осью X
	public toAngle(): number {
		return Math.atan2(this._y, this._x);
	};

	// получение угла между двумя вектороми
	public angleTo(value: Point): number {
		return Math.acos(this.dot(value) / this.length * Math.hypot(value.x, value.y));
	};

	// создать массив из вектора
	public toArray(n: number = 2) {
		return [this._x, this._y].slice(0, n);
	};

	// получить нормаль к вектору
	public normal(): Vector {
		return new Vector(-this._y, this._x);
	};

	// получить объект Point
	public toPoint(): Point {
		return new Point(this);
	}
};




