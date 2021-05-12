import { Draggable } from "react-beautiful-dnd";

const ClassifiedPersonItem = (props: any) => {
  const splitId = props.id.split("-");
  const cssClassifiedPersonItem = (snapshot) => {
    let className = "shadow mb-1 d-flex p-2  ";
    className += snapshot.isDragging ? "bg-info " : "bg-white ";

    return className;
  };

  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cssClassifiedPersonItem(snapshot)}
          key={props.id}
        >
          Person's id: {splitId[0]}
        </div>
      )}
    </Draggable>
  );
};

export default ClassifiedPersonItem;
