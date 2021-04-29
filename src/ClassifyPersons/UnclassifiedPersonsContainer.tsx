import AddPersonsGroup from "./AddPersonsGroup";
import UnClassifiedPersons from "./UnClassifiedPersons";

const cssUnclassifiedPersonsContainer = {
  display: "flex",
  flexGrow: 1,
  margin: 5,
  backgroundColor: "#CCC",
  padding: 10
};

const UnclassifiedPersonsContainer = () => {
  return (
    <div style={cssUnclassifiedPersonsContainer}>
      <AddPersonsGroup />
      <UnClassifiedPersons />
    </div>
  );
};

export default UnclassifiedPersonsContainer;
