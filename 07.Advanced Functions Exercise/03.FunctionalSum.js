(function () {

    let sum = 0;

    function add(num) {

        sum += num;
        add.toString = function () {
            return sum;
        };

        return add;
    }
})()

console.log(add(1)(6)(-3).toString());