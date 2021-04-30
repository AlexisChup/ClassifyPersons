import { Card, CardTitle, CardBody, CardFooter } from "reactstrap";
import PersonsGroupFooter from "./PersonsGroupFooter";
import ClassifiedPersonsContainer from "./ClassifiedPersonsContainer";

const cssPersonsGroup = {
  width: "200px",
  minWidth: "200px",
  marginRight: 5,
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
    <Card style={cssPersonsGroup}>
      <CardTitle className="font-weight-bold text-center p-2 my-0 border-bottom border-3 small">
        Header
      </CardTitle>
      <CardBody className="d-flex p-1" style={cssPersonsGroupBody}>
        <ClassifiedPersonsContainer />
      </CardBody>
      <PersonsGroupFooter />
    </Card>
  );
};

export default PersonsGroup;
