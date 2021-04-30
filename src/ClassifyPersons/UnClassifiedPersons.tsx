import { Row, Col, Container } from "reactstrap";

const cssRowUnclassifyPerson = {
  display: "flex"
};

let personsList = [1, 1];
personsList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function UnClassifiedPersons(props: any) {
  const cssUnclassifiedPersons = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "44vh",
    minHeight: "44vh"
  };

  return (
    <div style={cssUnclassifiedPersons} className="p-0 bg-light">
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
      <div style={{ overflow: "auto" }}>
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
    </div>
  );
}

// iedPersons} className="p-0">
//       <Row className="mx-0 shadow mb-1 font-weight-bold p-2">
//         <Col className="border-right">ID</Col>
//         <Col className="border-right">First Name</Col>
//         <Col className="border-right">Last Name</Col>
//         <Col className="border-right">Years</Col>
//         <Col className="">Favorite Color</Col>
//       </Row>
//       {personsList.map(() => (
//         <Row  className="mx-0 shadow mb-1 p-2">
//           <Col className="border-right">1</Col>
//           <Col className="border-right">Jean</Col>
//           <Col className="border-right">Durand</Col>
//           <Col className="border-right">27</Col>
//           <Col className="">RED</Col>
//         </Row>
//       ))}
//     </div>
