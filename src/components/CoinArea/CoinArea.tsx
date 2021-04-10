import React from "react";
import './CoinArea.css';
import {Card, Col, Row} from "react-bootstrap";
import Coin from "../Coin/Coin";
import {CoinValueInterface} from "../../interface/CoinValueInterface";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from "react-beautiful-dnd";
import CoinMessage from "../CoinMessage/CoinMessage";

interface CoinAreaProps {
  name: string;
  title: string;
  coins: Array<CoinValueInterface>;
  useMessage?: boolean;
  neededCoinAmount?: number | null;
  resetApps?: () => void;
}

class CoinArea extends React.PureComponent<CoinAreaProps> {
  render() {
    const areaId = `coin-area-${this.props.name}`;

    const initialCoins = [...this.props.coins];
    const coins = initialCoins.map((coin: CoinValueInterface, index: number) => {
      const key = `${areaId}-${index}`;
      return (
        <Draggable key={key} draggableId={key} index={index}>
          {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
            return (
              <Col
                className="center-coin-col"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Coin value={coin.content}/>
              </Col>
            );
          }}
        </Draggable>
      )
    });

    const boxValue = initialCoins.reduce((a: number, b: CoinValueInterface) => (a + b.content), 0);

    return (
      <Card className="Coin-Area" id={areaId}>
        <Card.Header>
          <h2>{this.props.title}</h2>
        </Card.Header>
        <Droppable droppableId={`dropable-${areaId}`}>
          {((provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
            return (
              <Card.Body
                className="Coin-Box"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? 'lightBlue' : 'lightGrey'
                }}
              >
                <Row>
                  {coins}
                </Row>
                {provided.placeholder}
              </Card.Body>
            );
          })}
        </Droppable>
        <Card.Footer className="CoinInformation">
          <Row>
            <Col>
              Current box value = {boxValue}
            </Col>
          </Row>
          {this.props.useMessage && (
            <CoinMessage
              boxValue={boxValue}
              resetApps={this.props.resetApps}
              neededCoinAmount={this.props.neededCoinAmount}
            />
          )}
        </Card.Footer>
      </Card>
    );
  };
}

export default CoinArea;
