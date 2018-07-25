
(function solve() {

    String.format = function (word, ...args) {

        for (let i = 1; i < arguments.length; i++) {
            let arg = arguments[i];
            word = word.replace(`{${i - 1}}`, arg);
        }

        return (word);
    };

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this + '';
        }

        str = str.trim();
        let result = str + ' ' + this;
        return result;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this + '';
        }
        str = str.trim();
        let result = this + ' ' + str;
        return result;
    };

    String.prototype.isEmpty = function () {
        if (this.length === 0)
            return true;
        else
            return false;
    };

    String.prototype.truncate = function (n) {

        if (this.length <= n)
            return this.toString();

        if (n < 4)
            return '.'.repeat(n);

        if (!this.includes(' '))
            return this.slice(0, n - 3) + '...';

        let tokens = this.split(' ');
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > n) {
                return result + '...'
            }

            result += ' ' + tokens[i];

        }
    };
})()

let str = 'quick brown fox jumps over the lazy dog';

console.log(str.ensureStart('the '));