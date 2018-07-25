
function getExtensibleObject() {

    let obj = {
        __proto__: {},
        extend: function (templateObj) {

            for (let key in templateObj) {

                let element = templateObj[key];

                if (typeof (element) === 'function')
                    obj.__proto__[key] = element;
                else
                    obj[key] = element;
            }
        }
    };

    return obj;
}

let template = {
    extensionMethod: function () {
        console.log('Nasko');
    },
    extensionProperty: 'someString'
};

let myobj = getExtensibleObject();

myobj.extend(template);

console.log(myobj);

console.log(Object.getPrototypeOf(myobj));