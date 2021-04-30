import { Col } from "reactstrap";

const cssRowUnclassifyPerson = {
  display: "flex"
};

let personsList = [1, 1];
personsList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function UnClassifiedPersons(props: any) {
  return (
    <div className="p-0 bg-light w-100">
      <div
        style={cssRowUnclassifyPerson}
        className="mx-0 shadow mb-1 font-weight-bold p-2 bg-light"
      >
        <Col className="border-right">ID</Col>
        <Col className="border-right">First Name</Col>
        <Col className="border-right">Last Name</Col>
        <Col className="border-right">Years</Col>
        <Col className="">Favorite Color</Col>
      </div>
      {personsList.map(() => (
        <div
          style={cssRowUnclassifyPerson}
          className="mx-0 shadow mb-1 p-2 bg-white"
        >
          <Col className="border-right">1</Col>
          <Col className="border-right">Jean</Col>
          <Col className="border-right">Durand</Col>
          <Col className="border-right">27</Col>
          <Col className="">RED</Col>
        </div>
      ))}
    </div>
  );
}
