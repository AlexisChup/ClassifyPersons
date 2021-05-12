import { Button, CardTitle } from "reactstrap";
import { useDispatch } from "react-redux";
import { REMOVE_GROUP } from "../redux/actionTypes.ts";

const PersonsGroupTitle = (props: any) => {
  const dispatch = useDispatch();

  return (
    <CardTitle className="d-flex font-weight-bold text-center p-2 my-0 border-bottom border-3 small d-flex justify-content-between align-items-center mr-1">
      <div style={{ fontSize: "12px" }}>Groupe n° {props.index}</div>
      <Button
        size="sm"
        style={{ fontSize: "6px" }}
        color="danger"
        disabled={!props.isGroupEmpty}
        onClick={() =>
          dispatch({
            type: REMOVE_GROUP,
            payload: {
              indexGroup: props.index
            }
          })
        }
      >
        X
      </Button>
    </CardTitle>
  );
};

export default PersonsGroupTitle;
