
class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.inputs = [];
    }

    addInput(label, name, type) {
        this.inputs.push({ label, name, type });
    }

    render() {

        let p = $(`<p>${this.message}</p>`)
        let innerDiv = $(`<div class="dialog">`)
            .append(p)

        for (let obj of this.inputs) {
            let input = $(`<input name="${obj.name}" type="${obj.type}">`);
            let l = $(`<label>${obj.label}</label>`);
            innerDiv.append(l);
            innerDiv.append(input);
        }

        let okBtn = $('<button>OK</button>');
        let cancelBtn = $('<button>Cancel</button>');

        okBtn.on('click', function () {

            let obj = {};
            let inputs = $('.overlay').find('input').toArray();

            inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());

            console.log(obj);
            this.callback(obj);

            $('.overlay').remove();
        })

        cancelBtn.on('click', function () {
            $('.overlay').remove();
        })

        innerDiv.append(okBtn);
        innerDiv.append(cancelBtn);

        let outerDiv = $(`<div class="overlay">`)
            .append(innerDiv);

        $('body').append(outerDiv);
    }
}