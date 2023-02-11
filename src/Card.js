import {Component} from "react";

export default class Card extends Component
{
    render()
    {
        if (this.props.suit === "♣" || this.props.suit === "♠")
        {
            return (<a onClick={() => this.props.removeCard(this.props.id)} className="card card-black">
                <div className="card-tl">
                    <div className="card-value">{this.props.value}</div>
                    <div className="card-suit">{this.props.suit}</div>
                </div>
                <div className="card-br">
                    <div className="card-value">{this.props.value}</div>
                    <div className="card-suit">{this.props.suit}</div>
                </div>
            </a>);
        } else
        {
            return (<a onClick={() => this.props.removeCard(this.props.id)} className="card card-red">
                <div className="card-tl">
                    <div className="card-value">{this.props.value}</div>
                    <div className="card-suit">{this.props.suit}</div>
                </div>
                <div className="card-br">
                    <div className="card-value">{this.props.value}</div>
                    <div className="card-suit">{this.props.suit}</div>
                </div>
            </a>);
        }
    }
};
