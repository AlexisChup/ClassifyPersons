import PersonsGroup from "./PersonsGroup";
import { useSelector } from "react-redux";
import { Card } from "reactstrap";

const cssPersonsGroupContainer = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  overflow: "auto"
};

const cssPersonsGroupEmpty = {
  width: "200px",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const PersonsGroupContainer = () => {
  const listGroups = useSelector(
    (state: any) => state.sortedPersons.classified
  );

  const id = ["123", "456789", "567890", "6747474", "63773575", "858458"];

  return (
    <div style={cssPersonsGroupContainer} className="m-2 p-2">
      {listGroups.length > 0 ? (
        listGroups.map((group, index) => (
          <PersonsGroup
            droppableId={"droppable-" + index}
            // droppableId={id[index]}
            key={index}
            index={index}
            group={group}
          />
        ))
      ) : (
        <div
          style={cssPersonsGroupEmpty}
          className="mr-3 shadow text-center font-weight-bold"
        >
          Use button bellow <br /> to create group
        </div>
      )}
    </div>
  );
};

export default PersonsGroupContainer;
