import { Col } from "reactstrap";
import { Draggable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";

const UnclassifiedItems = (props: any) => {
  let personsList = [uuid(), uuid()];

  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={props.id}
          className="d-flex mx-0 shadow mb-1 p-2 bg-white"
        >
          <Col className="border-right">{props.id}</Col>
          <Col className="border-right">Jean</Col>
          <Col className="border-right">Durand</Col>
          <Col className="border-right">27</Col>
          <Col className="">RED</Col>
        </div>
      )}
    </Draggable>
  );
};

export default UnclassifiedItems;
