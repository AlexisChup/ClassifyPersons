import { Col } from "reactstrap";
import { Draggable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";

const UnclassifiedItems = (props: any) => {
  const { id, firstName, lastName, years, favoriteColor } = props.person;

  return (
    <Draggable draggableId={id} index={props.index} key={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={props.id}
          className="d-flex mx-0 shadow mb-1 p-2 bg-white"
        >
          <Col className="border-right">{id}</Col>
          <Col className="border-right">{firstName}</Col>
          <Col className="border-right">{lastName}</Col>
          <Col className="border-right">{years}</Col>
          <Col className="">{favoriteColor}</Col>
        </div>
      )}
    </Draggable>
  );
};

export default UnclassifiedItems;
