import React from "react";
import './Coin.css';
import {CoinValueEnum} from "../../enum/CoinValueEnum";

interface CoinContainerProps {
    value: CoinValueEnum;
}

class Coin extends React.Component<CoinContainerProps> {
    render() {
        const coinValue = this.props.value;
        const src = `${process.env.PUBLIC_URL}coin-${coinValue}.1617784837.svg`;
        const alt = `Coin with value ${coinValue}`;

        return (
            <div className="Coin">
                <img src={src} alt={alt} />
            </div>
        );
    };
}

export default Coin;
