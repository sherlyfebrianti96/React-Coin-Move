import React from 'react';
import './App.css';
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row} from "react-bootstrap";
import CoinConfiguration from "./components/CoinConfiguration/CoinConfiguration";
import {DragDropContext, DropResult, ResponderProvided} from "react-beautiful-dnd";
import {v4 as uuid} from "uuid";
import {CoinValueInterface} from "./interface/CoinValueInterface";
import {CoinValueEnum} from "./enum/CoinValueEnum";

export default class App extends React.Component {
  state = {
    startingCoinArea: [],
    neededCoinAmount: null,
    neededCoinArea: []
  }

  area = {
    startingCoinBox: {
      name: 'Starting Coin',
      items: []
    }
  };

  addCoinToStartedArea(value: CoinValueEnum) {
    const startingCoinArea: Array<CoinValueInterface> = this.state.startingCoinArea;
    startingCoinArea.push({
      id: uuid,
      content: value
    });
    this.setState({
      startingCoinArea: [...startingCoinArea]
    });
  }

  handleNeededCoinChanged(value: number) {
    this.setState({
      neededCoinAmount: value
    });
  }

  handleDragEnd(result: DropResult, provided: ResponderProvided) {
    const startingCoinDroppable = 'dropable-coin-area-starting-coin';
    const neededCoinDroppable = 'dropable-coin-area-needed-coin';
    const sourceId = result.source.droppableId;
    const destinationId = result.destination?.droppableId;
    const starterMoveToNeeded = ((sourceId === startingCoinDroppable) && (destinationId === neededCoinDroppable))
    const neededMoveToStarter = ((sourceId === neededCoinDroppable) && (destinationId === startingCoinDroppable))

    const sourceIndex: number = result.source.index;
    const startingCoinArea = this.state.startingCoinArea;
    const neededCoinArea = this.state.neededCoinArea;
    let arrangementResult;
    switch (true) {
      case (starterMoveToNeeded) :
        /* Left moved to right */
        arrangementResult = this.arrangeItem(sourceIndex, startingCoinArea, neededCoinArea);
        this.setState({
          startingCoinArea: [...arrangementResult.source],
          neededCoinArea: [...this.sortCoinArray(arrangementResult.destination)]
        })
        break;
      case (neededMoveToStarter) :
        /* Right moved to left */
        arrangementResult = this.arrangeItem(sourceIndex, neededCoinArea, startingCoinArea);
        this.setState({
          startingCoinArea: [...arrangementResult.destination],
          neededCoinArea: [...this.sortCoinArray(arrangementResult.source)]
        })
        break;
      default:
        /* Not moved anywhere */
        break;
    }
  }

  arrangeItem(sourceIndex: number, source:  Array<CoinValueInterface>, destination:  Array<CoinValueInterface>) {
    const item = source[sourceIndex];
    destination.push(item);
    source.splice(sourceIndex, 1);

    return {
      source,
      destination
    };
  }

  sortCoinArray(arr: Array<CoinValueInterface>) {
    return arr.sort((a, b) => (a.content - b.content));
  }

  render() {
    return (
      <Container className="App">
        <CoinConfiguration
          startingCoinArea={this.state.startingCoinArea}
          neededCoinAmount={this.state.neededCoinAmount}
          addCoinToStartedArea={this.addCoinToStartedArea.bind(this)}
          handleNeededCoinChanged={this.handleNeededCoinChanged.bind(this)}
        />
        <DragDropContext onDragEnd={this.handleDragEnd.bind(this)}>
          <Row>
            <Col>
              <CoinArea
                name="starting-coin"
                title="Starting Coin"
                coins={this.state.startingCoinArea}
              />
            </Col>
            <Col>
              <CoinArea
                name="needed-coin"
                title="Needed Coin"
                coins={this.state.neededCoinArea}
              />
            </Col>
          </Row>
        </DragDropContext>
      </Container>
    );
  }
}
