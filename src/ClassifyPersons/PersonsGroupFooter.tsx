import { CardFooter, Row, Col, Label, Input } from "reactstrap";

const yearsOptions: number[] = [10, 20, 30, 40];
const favoriteColorOptions: string[] = ["red", "yellow", "blue", "green"];

const PersonsGroupFooter = () => {
  return (
    <CardFooter className="p-1">
      <Row className="pl-2 py-0 mx-0">
        <Label className="p-0" size="sm" style={{ fontSize: "10px" }}>
          Criteria
        </Label>
      </Row>
      <Row className="pl-2 py-0 mx-0">
        <Col className="px-0 mr-1">
          <Input
            type="select"
            name="years-option-name-"
            id="years-option-id-"
            value="years"
            className="p-0"
            style={{ fontSize: "9px" }}
            bsSize="sm"
          >
            <option value="years" disabled>
              years
            </option>
            {yearsOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </Input>
        </Col>
        <Col className="px-0 ml-1">
          <Input
            type="select"
            name="favoriteColor-option-name-"
            id="favoriteColor-option-id-"
            value="favoriteColor"
            className="p-0"
            style={{ fontSize: "9px" }}
            bsSize="sm"
          >
            <option value="favoriteColor" disabled>
              favorite color
            </option>
            {favoriteColorOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </Input>
        </Col>
      </Row>
    </CardFooter>
  );
};

export default PersonsGroupFooter;
