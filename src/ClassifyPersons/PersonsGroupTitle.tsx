import { Button, CardTitle } from "reactstrap";

const PersonsGroupTitle = () => {
  return (
    <CardTitle className="font-weight-bold text-center p-2 my-0 border-bottom border-3 small d-flex justify-content-between align-items-center mr-1">
      <div style={{ fontSize: "12px" }}>Groupe n°</div>
      <Button size="sm" style={{ fontSize: "6px" }} color="danger">
        X
      </Button>
    </CardTitle>
  );
};

export default PersonsGroupTitle;
