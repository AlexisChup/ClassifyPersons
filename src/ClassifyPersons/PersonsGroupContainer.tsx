import PersonsGroup from "./PersonsGroup";

const cssPersonsGroupContainer = {
  display: "flex",
  margin: 5,
  backgroundColor: "#CCC",
  padding: 10,
  overflow: "auto",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0
};

const PersonsGroupContainer = () => {
  // const personsGroupList = [1, 1, 1, 1, 1, 1];
  const personsGroupList = [1];

  return (
    <div style={cssPersonsGroupContainer}>
      {personsGroupList.map((personsGroup, index) => (
        <PersonsGroup />
      ))}
    </div>
  );
};

export default PersonsGroupContainer;
