import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";
import PersonsGroupFooter from "./PersonsGroupFooter";
import ClassifiedPersonsContainer from "./ClassifiedPersonsContainer";

const cssPersonsGroup = {
  width: "200px",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column"
};

const cssPersonsGroupBody = {
  backgroundColor: "#f8f9fa",
  flexDirection: "column",
  height: "80%",
  overflow: "auto"
};

const PersonsGroup = () => {
  return (
    <Card style={cssPersonsGroup} className="mr-3">
      <CardTitle className="font-weight-bold text-center p-2 my-0 border-bottom border-3 small d-flex justify-content-between align-items-center mr-1">
        <div style={{ fontSize: "12px" }}>Groupe n°</div>
        <Button size="sm" style={{ fontSize: "6px" }} color="danger">
          X
        </Button>
      </CardTitle>
      <CardBody className="d-flex p-1 mr-1" style={cssPersonsGroupBody}>
        <ClassifiedPersonsContainer />
      </CardBody>
      <PersonsGroupFooter />
    </Card>
  );
};

export default PersonsGroup;
