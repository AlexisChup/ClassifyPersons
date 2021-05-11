import { CardBody } from "reactstrap";
import { Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";

import ClassifiedPersonItem from "./ClassifiedPersonItem";

const cssPersonsGroupBody = {
  backgroundColor: "#f8f9fa",
  flexDirection: "column",
  overflow: "auto"
};

const PersonsGroupBody = (props: any) => {
  const classifiedPersons = [uuid(), uuid()];

  return (
    <CardBody className="d-flex p-1 mr-1" style={cssPersonsGroupBody}>
      <Droppable droppableId={props.droppableId} key={props.droppableId}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {classifiedPersons.map((item, index) => (
              <ClassifiedPersonItem index={index} id={item} />
            ))}
          </div>
        )}
      </Droppable>
    </CardBody>
  );
};

export default PersonsGroupBody;
