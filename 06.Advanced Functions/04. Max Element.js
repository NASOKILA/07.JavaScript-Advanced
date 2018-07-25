
function solve(args) {
    return Math.max.apply('', args);
}

console.log(solve([10, 20, 5]));