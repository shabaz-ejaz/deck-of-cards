import * as React from "react";
import Card from "./Card";
import './Deck.css';

class Deck extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            cardDeck: [],
            theRightOrder: [] // store the sorted order of cards in state
        };
        this.removeCard = this.removeCard.bind(this);
    }

    componentDidMount()
    {
        this.initialiseDeck();
    }

    initialiseDeck()
    {
        const suits = ["♣", "♦", "♥", "♠"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let cardDeck = [];
        let card = [];

        for (let x = 0; x < suits.length; x++)
        {
            for (let y = 0; y < values.length; y++)
            {
                card = {suit: suits[x], val: values[y], id: suits[x] + values[y]};
                cardDeck.push(card);
                this.setState({cardDeck: cardDeck, theRightOrder: cardDeck});
            }
        }
    }

    sortCards()
    {
        let current = this.state.cardDeck;
        let newArr = this.state.theRightOrder.filter(item => current.includes(item));
        this.setState({cardDeck: newArr});
    }

    shuffleCards(deck)
    {
        console.log('shuffling deck');
        let counter = deck.length;
        let t;
        let i;

        while (counter)
        {
            i = Math.floor(Math.random() * counter--);
            t = deck[counter];
            deck[counter] = deck[i];
            deck[i] = t;
        }
        this.setState({cardDeck: deck})
    }

    removeCard = (id) =>
    {
        console.log('removing card', id);
        this.setState(prevState => ({cardDeck: prevState.cardDeck.filter(card => card.id !== id)}));
    };

    render()
    {
        console.log('deck: ', this.state.cardDeck);
        return (
            <div>
                <button onClick={() =>
                {
                    this.shuffleCards(this.state.cardDeck)
                }}>Shuffle
                </button>
                <button onClick={() =>
                {
                    this.sortCards()
                }}>Sort
                </button>
                <div className="deck">
                    {this.state.cardDeck.map((card) =>
                    {
                        return <Card removeCard={this.removeCard} key={card.id} id={card.id} suit={card.suit}
                                     value={card.val}/>
                    })}
                </div>
            </div>
        );
    }
};

export default Deck;

