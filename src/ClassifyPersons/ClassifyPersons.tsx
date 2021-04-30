import { Button } from "reactstrap";
import PersonsGroupContainer from "./PersonsGroupContainer";

import UnclassifiedPersonsContainer from "./UnclassifiedPersonsContainer";

const cssClassifyPersons = {
  display: "flex",
  flexDirection: "column",
  margin: "0px",
  height: "100%", // Only those 2 parameters are used to
  width: "100%" // adapt the feature's size
};

const ClassifyPersons = () => {
  return (
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
  );
};

export default ClassifyPersons;
