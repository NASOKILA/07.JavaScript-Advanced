
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}

let pointOne = new Point(-2, 5);
let pointTwo = new Point(22, 15);

console.log(Point.distance(pointOne, pointTwo));
console.log(pointOne.distance); 