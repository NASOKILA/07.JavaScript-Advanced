
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false;

    let reversed = arr.slice(0).reverse();

    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));

    return equal;
}

console.log(isSymmetric([1, 2, 2, 1]));
console.log(isSymmetric([2, -1, -1]));
console.log(isSymmetric([-1, 2, -1]));
console.log(isSymmetric([1, -2, 1]));

console.log(isSymmetric({}));
console.log(isSymmetric(false));

module.exports = isSymmetric;