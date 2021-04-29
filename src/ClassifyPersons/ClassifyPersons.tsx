import { Button } from "reactstrap";

const cssClassifyPersons = {
  display: "flex",
  flexDirection: "column",
  margin: "0px",
  height: "100%",
  width: "100%"
};
const cssHalfPart = {
  display: "flex",
  flexGrow: 1,
  margin: 5,
  backgroundColor: "#CCC",
  padding: 10
};

// CSS PERSONSGROUP
const cssPersonsGroup = {
  backgroundColor: "green",
  width: "200px",
  marginRight: 5,
  display: "flex",
  flexDirection: "column"
};

const cssPersonsGroupHeader = {
  backgroundColor: "red",
  color: "white"
};

const cssPersonsGroupBody = {
  backgroundColor: "blue",
  display: "flex",
  flexGrow: 1
};

const cssPersonsGroupFooter = {
  backgroundColor: "purple",
  color: "white"
};

// CSS UNCLASSIFIEDPERSONS
const cssAddGroupPersons = {
  backgroundColor: "green",
  width: "200px",
  marginRight: 5
};

const cssUnclassifiedPersons = {
  display: "flex",
  flexGrow: 1,
  backgroundColor: "salmon"
};

const ClassifyPersons = () => {
  return (
    <div style={cssClassifyPersons}>
      {/* PersonsGroup */}
      <div style={cssHalfPart}>
        <div style={cssPersonsGroup}>
          <div style={cssPersonsGroupHeader}>Header</div>
          <div style={cssPersonsGroupBody}>Body</div>
          <div style={cssPersonsGroupFooter}>Footer</div>
        </div>
      </div>
      {/* UnclassifiedPersons */}
      <div style={cssHalfPart}>
        {/* ADD GROUP */}
        <div style={cssAddGroupPersons}></div>
        <div style={cssUnclassifiedPersons}></div>
      </div>
      {/* FOOTER */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "stretch",
          marginRight: 5,
          marginBottom: 5
        }}
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
