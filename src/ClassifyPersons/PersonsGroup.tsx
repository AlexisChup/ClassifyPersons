import { Card, CardTitle, CardBody, CardFooter } from "reactstrap";

const cssPersonsGroup = {
  width: "200px",
  minWidth: "200px",
  marginRight: 5,
  display: "flex",
  flexDirection: "column"
};

const cssPersonsGroupBody = {
  backgroundColor: "#f8f9fa"
};

const PersonsGroup = () => {
  return (
    <Card style={cssPersonsGroup}>
      <CardTitle className="font-weight-bold text-center p-2 my-0 border-bottom border-3 small">
        Header
      </CardTitle>
      <CardBody className="d-flex flex-grow-1 p-1" style={cssPersonsGroupBody}>
        Body
      </CardBody>
      <CardFooter className="p-1">Footer</CardFooter>
    </Card>
  );
};

export default PersonsGroup;
