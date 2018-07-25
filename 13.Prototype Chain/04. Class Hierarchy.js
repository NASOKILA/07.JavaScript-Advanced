
function solve() {

    class Figure {
        constructor() {
            if (new.target === Figure)
                throw new Error("Cannot be instantiated");
        }

        get area() {

        }

        toString() {
            return `${this.constructor.name}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

let obj = solve();
let Figure = obj.Figure;
let Circle = obj.Circle;
let Rectangle = obj.Rectangle;
let c = new Circle(5);
let r = new Rectangle(3, 4);

console.log(c.area);
console.log(c.toString());
console.log(r.area);
console.log(r.toString());  