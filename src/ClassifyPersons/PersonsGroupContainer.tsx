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
  const listClassifiedPersons = useSelector(
    (state: any) => state.sortedPersons.classified
  );

  return (
    <div style={cssPersonsGroupContainer} className="m-2 p-2">
      {listClassifiedPersons ? (
        listClassifiedPersons.map((personsGroup, index) => (
          <PersonsGroup droppableId={uuid()} key={index} />
        ))
      ) : (
        <>Please add group</>
      )}
    </div>
  );
};

export default PersonsGroupContainer;
