import React from "react";
import './CoinArea.css';
import {Card, Container} from "react-bootstrap";

interface CoinAreaProps {
  name: string;
  title: string;
}

class CoinArea extends React.Component<CoinAreaProps> {
  render() {
    const areaId = `coin-area-${this.props.name}`;

    return (
      <Card className="Coin-Area" id={areaId}>
        <Card.Header>
          <h2>{this.props.title}</h2>
        </Card.Header>
        <Card.Body className="Coin-Box">
        </Card.Body>
        <Card.Footer className="CoinInformation">
          Current box value = 0
        </Card.Footer>
      </Card>
    );
  };
}

export default CoinArea;
