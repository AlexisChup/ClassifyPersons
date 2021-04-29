import PersonsGroup from "./PersonsGroup";

const cssPersonsGroupContainer = {
  display: "flex",
  flexGrow: 1,
  margin: 5,
  backgroundColor: "#CCC",
  padding: 10,
  overflow: "auto"
  // maxHeight: "40vh"
};

const PersonsGroupContainer = () => {
  return (
    <div style={cssPersonsGroupContainer}>
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
      <PersonsGroup />
    </div>
  );
};

export default PersonsGroupContainer;
