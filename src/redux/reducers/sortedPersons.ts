import { ON_DRAG_END_PERSONS } from "../actionTypes";
import { ReduxSortedPersons } from "../index.d";
import { initialReduxListPersonsState } from "./listPersons";

let initialReduxSortedPersons: ReduxSortedPersons = {
  classified: undefined,
  unclassified: []
};

for (const keyPersonId in initialReduxListPersonsState) {
  if (initialReduxListPersonsState.hasOwnProperty(keyPersonId)) {
    initialReduxSortedPersons["unclassified"].push(keyPersonId);
  }
}

const sortedPersons = (
  state: any = initialReduxSortedPersons,
  action: any
): any => {
  let newState: any = { ...state };

  switch (action.type) {
    case ON_DRAG_END_PERSONS: {
      if (action.payload.group === "unclassified") {
        newState.unclassified = action.payload.listPersonsId;
      } else {
        newState.classified[action.payload.groupIndex] =
          action.payload.listPersonsId;
      }

      return newState || state;
    }

    default:
      return state;
  }
};

export default sortedPersons;
