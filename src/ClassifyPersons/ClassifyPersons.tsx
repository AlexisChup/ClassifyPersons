import { Button } from "reactstrap";
import PersonsGroupContainer from "./PersonsGroupContainer";

import UnclassifiedPersonsContainer from "./UnclassifiedPersonsContainer";

const cssClassifyPersons = {
  display: "flex",
  flexDirection: "column",
  margin: "0px",
  height: "100%",
  width: "100%"
};

const ClassifyPersons = () => {
  return (
    <div style={cssClassifyPersons}>
      <PersonsGroupContainer />
      <UnclassifiedPersonsContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "stretch"
        }}
        className="m-2 p-2"
      >
        <Button color="primary" className="mr-1">
          Save
        </Button>
        <Button color="danger" className="ml-1">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ClassifyPersons;
