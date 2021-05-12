import PersonsGroup from "./PersonsGroup";
import { useSelector } from "react-redux";
import { uuid } from "uuidv4";

const cssPersonsGroupContainer = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  overflow: "auto"
};

const PersonsGroupContainer = () => {
  // const personsGroupList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const personsGroupList = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const personsGroupList = [1, 1];
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
        <>Please add group</>
      )}
    </div>
  );
};

export default PersonsGroupContainer;
