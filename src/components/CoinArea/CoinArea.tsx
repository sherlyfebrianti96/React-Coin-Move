import React from "react";
import './CoinArea.css';

interface CoinAreaProps {
    name: string;
    title: string;
}

class CoinArea extends React.Component<CoinAreaProps> {
    render() {
        const areaId = `coin-area-${this.props.name}`;

        return (
            <div className="Coin-Area" id={areaId}>
                <h2>{this.props.title}</h2>
                <div className="Coin-Box">
                </div>
                <div className="CoinInformation">
                  Current box value = 0
                </div>
            </div>
        );
    };
}

export default CoinArea;
