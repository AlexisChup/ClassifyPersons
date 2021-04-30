import PersonsGroup from "./PersonsGroup";

const cssPersonsGroupContainer = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  overflow: "auto"
};

const PersonsGroupContainer = () => {
  const personsGroupList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const personsGroupList = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  // const personsGroupList = [1];

  return (
    <div style={cssPersonsGroupContainer} className="m-2 p-2">
      {personsGroupList.map((personsGroup, index) => (
        <PersonsGroup />
      ))}
    </div>
  );
};

export default PersonsGroupContainer;
