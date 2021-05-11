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
              {listUnclassifiedPersonsId ? (
                listUnclassifiedPersonsId.map((item, index) => (
                  <UnclassifiedItems
                    key={index}
                    index={index}
                    person={listUnclassifiedPersons[index]}
                  />
                ))
              ) : (
                <>Empty</>
              )}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
}
