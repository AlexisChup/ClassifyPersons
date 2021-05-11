import { ADD_PERSONS_LIST, REMOVE_PERSONS_LIST } from "../actionTypes";
import { Person, ReduxListPersonsState } from "../index.d";
import { uuid } from "uuidv4";

const person1: Person = {
  id: uuid(),
  firstName: "Jean",
  lastName: "Durand",
  years: 27,
  favoriteColor: "red"
};

const person2: Person = {
  id: uuid(),
  firstName: "Martin",
  lastName: "Marc",
  years: 32,
  favoriteColor: "yellow"
};

export const initialReduxListPersonsState: ReduxListPersonsState = {
  [person1.id]: person1,
  [person2.id]: person2
};

const listPersons = (
  state: ReduxListPersonsState = initialReduxListPersonsState,
  action: any
): any => {
  switch (action.type) {
    case ADD_PERSONS_LIST: {
      let newState: any = { ...state };
      for (let index = 0; index < action.payload.listPersons.length; index++) {
        newState[action.payload.listPersons[index].id] = action.payload.person;
      }

      return newState || state;
    }
    case REMOVE_PERSONS_LIST: {
      let newState: any = { ...state };
      for (
        let index = 0;
        index < action.payload.listPersonsId.length;
        index++
      ) {
        delete newState[action.payload.listPersonsId[index]];
      }
      newState[action.payload.person.id] = action.payload.person;

      return newState || state;
    }

    default:
      return state;
  }
};

export default listPersons;
