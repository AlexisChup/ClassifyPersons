const cssClassifyPersons = {
  display: "flex",
  flexDirection: "column",
  margin: "0px",
  height: "100%",
  width: "100%"
};
const cssHalfPart = { display: "flex", flexGrow: 1 };

const ClassifyPersons = () => {
  return (
    <div style={cssClassifyPersons}>
      <div style={cssHalfPart}>PersonsGroup</div>
      <div style={cssHalfPart}>UnclassifiedPersons</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "stretch"
        }}
      >
        <div>Footer</div>
      </div>
    </div>
  );
};

export default ClassifyPersons;
