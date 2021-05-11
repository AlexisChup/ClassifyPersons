import { Draggable } from "react-beautiful-dnd";

const ClassifiedPersonItem = (props: any) => {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="shadow mb-1 d-flex p-2 bg-white "
        >
          Person's id: {props.id}
        </div>
      )}
    </Draggable>
  );
};

export default ClassifiedPersonItem;
