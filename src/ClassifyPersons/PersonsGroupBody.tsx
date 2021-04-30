import { CardBody } from "reactstrap";
import ClassifiedPersonItem from "./ClassifiedPersonItem";

const cssPersonsGroupBody = {
  backgroundColor: "#f8f9fa",
  flexDirection: "column",
  overflow: "auto"
};

const PersonsGroupBody = () => {
  return (
    <CardBody className="d-flex p-1 mr-1" style={cssPersonsGroupBody}>
      <ClassifiedPersonItem />
      <ClassifiedPersonItem />
      <ClassifiedPersonItem />
      <ClassifiedPersonItem />
      <ClassifiedPersonItem />
      <ClassifiedPersonItem />
    </CardBody>
  );
};

export default PersonsGroupBody;
