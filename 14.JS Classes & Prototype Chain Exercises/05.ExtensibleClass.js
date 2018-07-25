
(function () {

    let id = 0;

    return class Extensible {

        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function')
                    Object.getPrototypeOf(this)[prop] = template[prop];
                else
                    this[prop] = template[prop];
            }
        }
    }

})()