import { CardFooter, Row, Col, Label, Input } from "reactstrap";
import { UPDATE_CRITERION } from "../redux/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import { Criteria } from "../redux/index.d";

export const yearsOptions: number[] = [10, 20, 30, 40, 50, 60, 70];
export const favoriteColorOptions: string[] = [
  "red",
  "yellow",
  "blue",
  "green"
];

const PersonsGroupFooter = (props: any) => {
  const dispatch = useDispatch();
  const { minYears, favoriteColor } = useSelector(
    (state: any) => state.sortedPersons.classified[props.indexGroup].criteria
  );

  const onChangeSelect = (value, criterion) => {
    if (props.isGroupEmpty) {
      dispatch({
        type: UPDATE_CRITERION,
        payload: {
          indexGroup: props.indexGroup,
          value,
          criterion
        }
      });
    } else {
      alert("You cannot modify params with an non empty group !");
    }
  };

  return (
    <CardFooter className="p-1 d-flex flex-column">
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
            value={minYears ? minYears : "years"}
            onChange={(event) => onChangeSelect(event.target.value, "minYears")}
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
            value={favoriteColor ? favoriteColor : "favoriteColor"}
            className="p-0"
            onChange={(event) =>
              onChangeSelect(event.target.value, "favoriteColor")
            }
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
