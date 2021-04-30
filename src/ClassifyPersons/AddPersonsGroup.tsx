import { Button } from "reactstrap";

const cssAddGroupPersons = {
  width: "200px",
  marginRight: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export default function AddPersonsGroup() {
  return (
    <div style={cssAddGroupPersons} className="shadow-lg">
      <div className="mb-2 font-weight-bold">ADD GROUP</div>
      <Button className="mt-2" color="success" size="lg">
        +
      </Button>
    </div>
  );
}
