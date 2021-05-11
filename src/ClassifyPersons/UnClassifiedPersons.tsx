import { Col } from "reactstrap";
import { Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import UnclassifiedItems from "./UnclassifiedItems";

export default function UnClassifiedPersons(props: any) {
  let personsList = [uuid(), uuid()];
  return (
    <div className="p-0 bg-light w-100">
      <Droppable
        droppableId="droppable-id-unclassified"
        key="droppable-id-unclassified"
      >
        {(provided, snapshot) => (
          <>
            <div className="d-flex mx-0 shadow mb-1 font-weight-bold p-2 bg-light">
              <Col className="border-right">ID</Col>
              <Col className="border-right">First Name</Col>
              <Col className="border-right">Last Name</Col>
              <Col className="border-right">Years</Col>
              <Col className="">Favorite Color</Col>
            </div>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {personsList.map((item, index) => (
                <UnclassifiedItems id={item} key={index} index={index} />
              ))}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
}
