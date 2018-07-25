
function solve(args) {

    let closure = (function () {
        let str = '';

        return function (arr) {

            let command = arr.split(' ')[0];
            let n = arr.split(' ')[1];

            if (command === 'append') {
                str = str + n;
            } else if (command === 'removeStart') {
                str = str.substring(Number(n));
            } else if (command === 'removeEnd') {
                str = str.substring(0, str.length - Number(n))
            } else if (command === 'print') {
                console.log(str);
            }
        }
    })();

    for (let comm of args) {
        closure(comm);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);