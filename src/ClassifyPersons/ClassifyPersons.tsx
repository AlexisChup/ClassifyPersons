import { Button } from "reactstrap";
import { DragDropContext } from "react-beautiful-dnd";

import PersonsGroupContainer from "./PersonsGroupContainer";
import UnclassifiedPersonsContainer from "./UnclassifiedPersonsContainer";

const cssClassifyPersons = {
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  height: "80%", // Only those 2 parameters are used to
  width: "80%" // adapt the feature's size,
};

const onDragEnd = (result) => {
  console.log("result onDragEnd :", result);
};

const ClassifyPersons = () => {
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div style={cssClassifyPersons}>
        <PersonsGroupContainer />
        <UnclassifiedPersonsContainer />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch"
          }}
          className="m-2 p-2"
        >
          <Button color="success">ADD GROUP</Button>
          <div className="">
            <Button color="primary" className="mr-1">
              Save
            </Button>
            <Button color="danger" className="ml-1">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default ClassifyPersons;
