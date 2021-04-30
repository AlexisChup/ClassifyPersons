import { Card } from "reactstrap";
import PersonsGroupTitle from "./PersonsGroupTitle";
import PersonsGroupBody from "./PersonsGroupBody";
import PersonsGroupFooter from "./PersonsGroupFooter";

const cssPersonsGroup = {
  width: "200px",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column"
};

const PersonsGroup = () => {
  return (
    <Card style={cssPersonsGroup} className="mr-3">
      <PersonsGroupTitle />
      <PersonsGroupBody />
      <PersonsGroupFooter />
    </Card>
  );
};

export default PersonsGroup;
