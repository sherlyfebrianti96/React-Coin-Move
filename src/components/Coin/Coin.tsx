import React from "react";
import './Coin.css';
import {CoinValueEnum} from "../../enum/CoinValueEnum";
import {Col, FormControl, Row} from "react-bootstrap";

interface CoinContainerProps {
  value: CoinValueEnum;
  addCoinToStartedArea?: (value: CoinValueEnum) => any;
  enableInput?: boolean;
}

class Coin extends React.Component<CoinContainerProps> {
  state = {
    quantity: 1,
  }

  handleClick() {
    if (this.props.addCoinToStartedArea) {
      for (let i = 0; i < this.state.quantity; i++) {
        this.props.addCoinToStartedArea(this.props.value);
      }
    }
  }

  handleQuantityChanged(evt: React.ChangeEvent<HTMLInputElement>) {
    const quantity = Number(evt.target.value);

    this.setState({
      quantity: (quantity > 1) ? quantity : 1
    });
  }

  getFormControl() {
    return (
      <Row>
        <Col xs={{span: 6, offset: 3}} md={{span: 12, offset: 0}} lg={{span: 8, offset: 2}}>
          <FormControl
            size="sm"
            type="number"
            name="neededCoin"
            placeholder="Quantity"
            min={1}
            value={this.state.quantity}
            onChange={this.handleQuantityChanged.bind(this)}
          >
          </FormControl>
        </Col>
      </Row>
    );
  }

  render() {
    const coinValue = this.props.value;
    const src = `${process.env.PUBLIC_URL}coin-${coinValue}.1617784837.svg`;
    const alt = `Coin with value ${coinValue}`;

    return (
      <Row>
        <Col>
          <Row>
            <Col className="center-coin-col">
              <div className="Coin" onClick={this.handleClick.bind(this)}>
                <img src={src} alt={alt}/>
              </div>
            </Col>
          </Row>
          {this.props.enableInput && this.getFormControl()}
        </Col>
      </Row>
    );
  };
}

export default Coin;
