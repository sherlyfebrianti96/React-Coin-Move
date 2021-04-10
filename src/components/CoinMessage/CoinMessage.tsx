import React from "react";
import {MessageStatusEnum} from "../../enum/MessageStatusEnum";
import {Alert, Button, Col, Row} from "react-bootstrap";
import {CoinValueInterface} from "../../interface/CoinValueInterface";

interface CoinMessageProps {
  neededCoinArea: Array<CoinValueInterface>;
  neededCoinAmount?: number | null;
  resetApps: () => void;
}

export default class CoinMessage extends React.PureComponent<CoinMessageProps> {
  validateResult() {
    const boxValue = this.props.neededCoinArea.reduce((a: number, b: CoinValueInterface) => (a + b.content), 0);
    if (!this.props.neededCoinAmount) {
      return {
        messageStatus: MessageStatusEnum.Empty,
        messageContent: ''
      };
    }
    switch (true) {
      case (boxValue === this.props.neededCoinAmount) :
        return {
          messageStatus: MessageStatusEnum.Success,
          messageContent: 'Needed coin has been fulfilled.'
        };
      case (boxValue < this.props.neededCoinAmount) :
        return {
          messageStatus: MessageStatusEnum.Error,
          messageContent: 'Please add more coin.'
        };
      case (boxValue > this.props.neededCoinAmount) :
        return {
          messageStatus: MessageStatusEnum.Error,
          messageContent: 'Please exchange some coins from the Needed Box.'
        };
      default:
        return {
          messageStatus: MessageStatusEnum.Empty,
          messageContent: ''
        };
    }
  }

  handleResetClicked() {
    this.props.resetApps();
  }

  getResult() {
    const validateResult = this.validateResult();
    switch (true) {
      case (validateResult.messageStatus === MessageStatusEnum.Success):
        return (
          <Alert variant="success">
            <Row>
              <Col lg={9} xs={12}>
                <span className="text-success">{validateResult.messageContent}</span>
              </Col>
              <Col lg={3} xs={12} className="text-xl-right">
                <Button variant="secondary" size="sm" onClick={this.handleResetClicked.bind(this)}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Alert>
        );
      case (validateResult.messageStatus === MessageStatusEnum.Error):
        return (
          <Alert variant="danger">
            <span className="text-danger">{validateResult.messageContent}</span>
          </Alert>
        );
      default:
        return '';
    }
  }

  render() {
    return this.getResult();
  }
}