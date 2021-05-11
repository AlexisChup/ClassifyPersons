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

const PersonsGroup = (props: any) => {
  return (
    <Card style={cssPersonsGroup} className="mr-3">
      <PersonsGroupTitle />
      <PersonsGroupBody droppableId={props.droppableId} />
      <PersonsGroupFooter />
    </Card>
  );
};

export default PersonsGroup;
