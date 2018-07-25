
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {

        let classInfo = $('<div class="info" style="display:none;">')
            .append(`<span>&phone; ${this.phone}</span>`)
            .append(`<span>&#9993; ${this.email}</span>`)

        let btn = $(`<button class="btn">&#8505;</div>`);

        let divClass = 'title'

        if (this.online === true) {
            divClass = 'online title';
        }

        let div = $(`<div class="${divClass}">${this.firstName} ${this.lastName} </div>`)
            .append(btn[0]);

        let article = $('<article></article>');
        article.append(div);
        article.append(classInfo);

        let mainDiv = $(`#${id}`)
            .append(article);

        $(btn).click(function (e) {
            let currentDiv = $(this).parent().parent().children()[1];

            if ($(currentDiv).css('display') === 'none')
                $(currentDiv).css('display', 'block');
            else
                $(currentDiv).css('display', 'none');
        })
    }

    get online() {
        return this._online;
    }
    set online(value) {
        this._online = value;

        if (value === true) {
            let article = $(`span:contains("${this.email}")`)[0];
            let rightDiv = $(article).parent().parent().children()[0];
            $(rightDiv).removeClass('title');
            $(rightDiv).addClass('online title');
        }
        else {
            let article = $(`span:contains("${this.email}")`)[0];
            let rightDiv = $(article).parent().parent().children()[0];
            $(rightDiv).removeClass('online title');
            $(rightDiv).addClass('title');
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[2].online = true, 2000);
setTimeout(() => contacts[2].online = false, 4000);