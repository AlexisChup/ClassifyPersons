import UnClassifiedPersons from "./UnClassifiedPersons";

const cssUnclassifiedPersonsContainer = {
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
  overflow: "auto"
};

const UnclassifiedPersonsContainer = () => {
  return (
    <div style={cssUnclassifiedPersonsContainer} className="m-2 p-2">
      <UnClassifiedPersons />
    </div>
  );
};

export default UnclassifiedPersonsContainer;
