import { ListPersonsId } from "../index.d";
import { ON_DRAG_END_PERSONS } from "../actionTypes";

export const onDragEnd = (
  result: any,
  callback: any,
  listPersonsId: ListPersonsId
) => {
  let newListPersonsId: ListPersonsId = [...listPersonsId];
  const { source, destination } = result;
  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (source.droppableId !== destination.droppableId) {
    // const sourceColumn: Column = newListPersonsId[source.droppableId];
    // const destColumn: Column = newListPersonsId[destination.droppableId];
    // const sourceItems: Apple[] = [...sourceColumn.items];
    // const destItems: Apple[] = [...destColumn.items];
    // const [removed] = sourceItems.splice(source.index, 1);
    // destItems.splice(destination.index, 0, removed);
    // newColumns[source.droppableId] = {
    //   ...newColumns[source.droppableId],
    //   items: sourceItems
    // };
    // newColumns[destination.droppableId] = {
    //   ...newColumns[destination.droppableId],
    //   items: destItems
    // };
  } else {
    const tempPersonId = newListPersonsId[destination.index];
    newListPersonsId[destination.index] = newListPersonsId[source.index];
    newListPersonsId[source.index] = tempPersonId;
  }

  callback({
    type: ON_DRAG_END_PERSONS,
    payload: {
      listPersonsId: newListPersonsId,
      group: "unclassified"
    }
  });
};
