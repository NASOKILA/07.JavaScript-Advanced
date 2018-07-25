
class MailBox
{
    constructor()
    {
        this.mailBox = []; 
    }

    get messageCount()
    {
        return this.mailBox.length;
    }

    addMessage(subject, text)
    {
        let obj = {};
        obj[subject] = text;
        this.mailBox.push(obj);

        return this;
    }

    deleteAllMessages()
    {
        this.mailBox = [];
    }

    findBySubject(substr)
    {
        let validMessages = [];
        
        this.mailBox.forEach(m => {

            let key = Object.keys(m)[0];
            let obj = {};

            obj['subject'] = key;
            obj['text'] = m[key];

            if(key.includes(substr))
                validMessages.push(obj);
        });
        
        return validMessages;
    }

    toString(){

        let result = '';

        if(this.mailBox.length === 0)
            result = '* (empty mailbox)';
        else
        {
            this.mailBox.forEach((mail) => {
                                
                let key = Object.keys(mail)[0];
                let value = mail[key];
                result += `* [${key}] ${value}\n`;
            })
        }
        return result;
    }

}

let mb = new MailBox();

mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");

let msgs = mb.findBySubject('ee');

console.log(msgs[0].subject) 
