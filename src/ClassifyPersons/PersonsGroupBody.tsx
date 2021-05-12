import { CardBody } from "reactstrap";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";

import ClassifiedPersonItem from "./ClassifiedPersonItem";

const cssPersonsGroupBody = {
  backgroundColor: "#f8f9fa",
  flexDirection: "column",
  overflow: "auto"
};

const stylePersonsGroupBody = (snapshot) => ({
  flexDirection: "column",
  overflow: "auto",
  overflowX: "hidden",
  backgroundColor: snapshot.isDraggingOver ? "#d9d9d9" : "#f8f9fa"
});

const PersonsGroupBody = (props: any) => {
  const listPersons: any = useSelector((state: any) => state.listPersons);
  const listClassifiedPersonOneGroup: any = props.listPersonsId.length
    ? props.listPersonsId.map((idPerson) => listPersons[idPerson])
    : [];

  return (
    <>
      <Droppable droppableId={props.droppableId} key={props.droppableId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={stylePersonsGroupBody(snapshot)}
            className="flex-grow-1"
          >
            <CardBody
              className="d-flex p-1 mr-1"
              style={stylePersonsGroupBody(snapshot)}
            >
              {listClassifiedPersonOneGroup.map((item, index) => (
                <ClassifiedPersonItem index={index} id={item.id} key={index} />
              ))}
              {provided.placeholder}
            </CardBody>
          </div>
        )}
      </Droppable>
    </>
    // <CardBody className="d-flex p-1 mr-1" style={cssPersonsGroupBody}>
    //   <Droppable droppableId={props.droppableId} key={props.droppableId}>
    //     {(provided, snapshot) => (
    //       <div {...provided.droppableProps} ref={provided.innerRef}>
    //         {listClassifiedPersonOneGroup.map((item, index) => (
    //           <ClassifiedPersonItem index={index} id={item.id} />
    //         ))}
    //       </div>
    //     )}
    //   </Droppable>
    // </CardBody>
  );
};

export default PersonsGroupBody;
