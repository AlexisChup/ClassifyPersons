import {
  ListPersonsId,
  ReduxSortedPersons,
  ListPersons,
  Person,
  Criteria
} from "../index.d";
import { ON_DRAG_END_PERSONS } from "../actionTypes";

export const onDragEnd = (
  result: any,
  callback: any,
  listPersons: ListPersons,
  sortedPersons: ReduxSortedPersons
) => {
  const DUI = "droppable-unclassified-id";
  let newSortedPersons: ReduxSortedPersons = { ...sortedPersons };
  const { source, destination } = result;
  if (!destination) return;

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (source.droppableId !== destination.droppableId) {
    if (source.droppableId === DUI) {
      const indexGroupClassified = destination.droppableId.replace(
        "droppable-",
        ""
      );
      // check if items respect criteria
      //destination
      const { minYears, favoriteColor } = sortedPersons.classified[
        indexGroupClassified
      ].criteria;
      //source
      const idPersonSource = sortedPersons.unclassified[source.index];
      const personSource: Person = listPersons[idPersonSource];
      const yearsSource = personSource.years;
      const favoriteColorSource = personSource.favoriteColor;

      //requirement
      if (
        (minYears && minYears > yearsSource) ||
        (favoriteColor && favoriteColor !== favoriteColorSource)
      ) {
        alert(
          "Params are not respected !\n\nDestination params :\nMinYears: " +
            minYears +
            "   FavColor: " +
            favoriteColor +
            "\nPerson params :\nYears: " +
            yearsSource +
            "   FavColor: " +
            favoriteColorSource
        );
      } else {
        const [removedId] = newSortedPersons.unclassified.splice(
          source.index,
          1
        );
        newSortedPersons.classified[indexGroupClassified].listPersonsId.splice(
          destination.index,
          0,
          removedId
        );
      }
    } else if (destination.droppableId === DUI) {
      const indexGroupClassified = source.droppableId.replace("droppable-", "");
      const [removedId] = newSortedPersons.classified[
        indexGroupClassified
      ].listPersonsId.splice(source.index, 1);
      newSortedPersons.unclassified.splice(destination.index, 0, removedId);
    } else {
      const indexSourceGroup = source.droppableId.replace("droppable-", "");
      const indexDestinationGroup = destination.droppableId.replace(
        "droppable-",
        ""
      );

      // check
      const personSourceId: string =
        sortedPersons.classified[indexSourceGroup].listPersonsId[source.index];
      const personSource: Person = listPersons[personSourceId];
      const yearsPersonSource = personSource.years;
      const favoriteColorPersonSource = personSource.favoriteColor;

      const criteriaGroupDestination: Criteria =
        sortedPersons.classified[indexDestinationGroup].criteria;
      const minYearsGroupDestination = criteriaGroupDestination.minYears;
      const favoriteColorGroupDestination =
        criteriaGroupDestination.favoriteColor;

      //requirement
      if (
        (minYearsGroupDestination &&
          minYearsGroupDestination > yearsPersonSource) ||
        (favoriteColorGroupDestination &&
          favoriteColorGroupDestination !== favoriteColorPersonSource)
      ) {
        alert(
          "Params are not respected !\n\nDestination params :\nMinYears: " +
            minYearsGroupDestination +
            "   FavColor: " +
            favoriteColorGroupDestination +
            "\nPerson params :\nYears: " +
            yearsPersonSource +
            "   FavColor: " +
            favoriteColorPersonSource
        );
      } else {
        const [removedId] = newSortedPersons.classified[
          indexSourceGroup
        ].listPersonsId.splice(source.index, 1);
        newSortedPersons.classified[indexDestinationGroup].listPersonsId.splice(
          destination.index,
          0,
          removedId
        );
      }
    }
  } else {
    if (source.droppableId === "droppable-unclassified-id") {
      const [removedId] = newSortedPersons.unclassified.splice(source.index, 1);
      newSortedPersons.unclassified.splice(destination.index, 0, removedId);
    } else {
      const indexGroupClassified = source.droppableId.replace("droppable-", "");
      const [removedId] = newSortedPersons.classified[
        indexGroupClassified
      ].listPersonsId.splice(source.index, 1);
      newSortedPersons.classified[indexGroupClassified].listPersonsId.splice(
        destination.index,
        0,
        removedId
      );
    }
  }

  callback({
    type: ON_DRAG_END_PERSONS,
    payload: {
      newSortedPersons
    }
  });
};
