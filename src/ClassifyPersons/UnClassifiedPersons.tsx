import { Col } from "reactstrap";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";
import UnclassifiedItems from "./UnclassifiedItems";

export default function UnClassifiedPersons(props: any) {
  let listUnclassifiedPersons = [];

  const listUnclassifiedPersonsId: any = useSelector(
    (state: any) => state.sortedPersons.unclassified
  );

  //get All persons
  const listPersons: any = useSelector((state: any) => state.listPersons);
  if (listUnclassifiedPersonsId) {
    for (let index = 0; index < listUnclassifiedPersonsId.length; index++) {
      const person: any = listPersons[listUnclassifiedPersonsId[index]];
      listUnclassifiedPersons.push(person);
    }
  }

  const styleUnClassifiedPersons = (snapshot) => ({
    backgroundColor: snapshot.isDraggingOver ? "#d9d9d9" : "#f8f9fa"
  });

  return (
    <div className="p-0 w-100 d-flex flex-column">
      <Droppable
        droppableId="droppable-unclassified-id"
        key="droppable-unclassified-id"
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
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="d-flex flex-column flex-grow-1"
              style={styleUnClassifiedPersons(snapshot)}
            >
              {listUnclassifiedPersonsId.length > 0 ? (
                listUnclassifiedPersonsId.map((item, index) => (
                  <UnclassifiedItems
                    key={index}
                    index={index}
                    person={listUnclassifiedPersons[index]}
                  />
                ))
              ) : (
                <div className="d-flex flex-column"></div>
              )}
              {provided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
}
