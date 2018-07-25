
let result = (function () {

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    let SuitsValues = ['♣', '♦', '♥', '♠'];


    let Faces = ["2", "3", "4", "5", "6", "7",
        "8", "9", "10", "J", "Q", "K", "A"];

    class Card {

        constructor(face, suit) {

            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(newFace) {
            if (!Faces.includes(newFace))
                throw new Error('Invalid Face');

            this._face = newFace;
        }

        get suit() {
            return this._suit;
        }
        set suit(newSuit) {
            if (!SuitsValues.includes(newSuit))
                throw new Error('Invalid Suit');

            this._suit = newSuit;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };

})()

let Card = result.Card;
let Suits = result.Suits;
let card = new Card("Q", Suits.CLUBS);

card.face = "A";
card.suit = result.Suits.DIAMONDS;

console.log(card.toString());