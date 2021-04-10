import React from "react";
import {MessageStatusEnum} from "../../enum/MessageStatusEnum";
import {Alert, Button, Col, Row} from "react-bootstrap";

interface CoinMessageProps {
  boxValue: number;
  neededCoinAmount?: number | null;
  resetApps?: () => void;
}

export default class CoinMessage extends React.PureComponent<CoinMessageProps> {
  state = {
    messageStatus: MessageStatusEnum.Empty,
    messageContent: ''
  };

  validateResult() {
    if (!this.props.neededCoinAmount) {
      this.setState({
        messageStatus: MessageStatusEnum.Empty,
        messageContent: ''
      })
      return;
    }

    switch (true) {
      case (!this.props.neededCoinAmount) :
        this.setState({
          messageStatus: MessageStatusEnum.Empty,
          messageContent: ''
        })
        break;
      case (this.props.boxValue === this.props.neededCoinAmount) :
        this.setState({
          messageStatus: MessageStatusEnum.Success,
          messageContent: 'Needed coin has been fulfilled.'
        })
        break;
      case (this.props.boxValue < this.props.neededCoinAmount) :
        this.setState({
          messageStatus: MessageStatusEnum.Error,
          messageContent: 'Please add more coin.'
        })
        break;
      case (this.props.boxValue > this.props.neededCoinAmount) :
        this.setState({
          messageStatus: MessageStatusEnum.Error,
          messageContent: 'Please exchange some coins from the Needed Box.'
        })
        break;
      default:
        break;
    }
  }

  getResult() {
    this.validateResult();
    switch (true) {
      case (this.state.messageStatus === MessageStatusEnum.Success):
        return (
          <Alert variant="success">
            <Row>
              <Col lg={9} xs={12}>
                <span className="text-success">{this.state.messageContent}</span>
              </Col>
              <Col lg={3} xs={12} className="text-xl-right">
                <Button variant="outline-secondary" size="sm" onClick={this.props.resetApps}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Alert>
        );
      case (this.state.messageStatus === MessageStatusEnum.Error):
        return (
          <Alert variant="danger">
            <span className="text-danger">{this.state.messageContent}</span>
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