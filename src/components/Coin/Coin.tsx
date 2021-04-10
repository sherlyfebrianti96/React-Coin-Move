import React from "react";
import './Coin.css';
import {CoinValueEnum} from "../../enum/CoinValueEnum";

interface CoinContainerProps {
    value: CoinValueEnum;
    addCoinToStartedArea?: (value: number) => any;
}

class Coin extends React.Component<CoinContainerProps> {
    handleClick() {
        if (this.props.addCoinToStartedArea) {
            this.props.addCoinToStartedArea(this.props.value);
        }
    }

    render() {
        const coinValue = this.props.value;
        const src = `${process.env.PUBLIC_URL}coin-${coinValue}.1617784837.svg`;
        const alt = `Coin with value ${coinValue}`;

        return (
            <div className="Coin" onClick={this.handleClick.bind(this)}>
                <img src={src} alt={alt} />
            </div>
        );
    };
}

export default Coin;
