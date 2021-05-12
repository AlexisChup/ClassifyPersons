import {
  CREATE_GROUP,
  ON_DRAG_END_PERSONS,
  REMOVE_GROUP,
  UPDATE_CRITERION
} from "../actionTypes";
import {
  ReduxSortedPersons,
  ClassifiedPersonsId,
  ListPersonsId,
  Criteria
} from "../index.d";

import { initialReduxListPersonsState } from "./listPersons";

let initialReduxSortedPersons: ReduxSortedPersons = {
  classified: [],
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
    case CREATE_GROUP: {
      const criteria: Criteria = {};
      const listPersonsId: ListPersonsId = [];
      const classifiedPersonsId: ClassifiedPersonsId = {
        listPersonsId,
        criteria
      };

      newState.classified.push(classifiedPersonsId);
      return newState || state;
    }
    case REMOVE_GROUP: {
      newState.classified.splice(action.payload.indexGroup, 1);

      return newState || state;
    }
    case ON_DRAG_END_PERSONS: {
      newState = action.payload.newSortedPersons;

      return newState || state;
    }

    case UPDATE_CRITERION: {
      newState.classified[action.payload.indexGroup].criteria[
        action.payload.criterion
      ] = action.payload.value;

      return newState || state;
    }

    default:
      return state;
  }
};

export default sortedPersons;
