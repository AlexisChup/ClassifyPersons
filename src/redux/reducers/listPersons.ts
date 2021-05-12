import { ADD_PERSONS_LIST, REMOVE_PERSONS_LIST } from "../actionTypes";
import { Person, ReduxListPersonsState } from "../index.d";
import { uuid } from "uuidv4";
import { favoriteColorOptions } from "../../ClassifyPersons/PersonsGroupFooter";

const fN = [
  "Katelin",
  "Fowler",
  "Quinn",
  "Sheldon",
  "Ben",
  "Buchanan",
  "Arman",
  "Arnold",
  "Lucca",
  "Hardin"
];

const lN = [
  "George",
  "Bradford",
  "Dominic",
  "Kenny",
  "Vladimir",
  "Webster",
  "Robbie",
  "Kinney",
  "Amelia-Rose",
  "Bonilla"
];

const generateRandomPerson = (nb) => {
  let iniReduxState: ReduxListPersonsState = {};
  for (let index = 0; index < nb; index++) {
    const person = {
      id: uuid(),
      firstName: fN[Math.floor(Math.random() * fN.length)],
      lastName: lN[Math.floor(Math.random() * lN.length)],
      years: Math.floor(Math.random() * 100),
      favoriteColor:
        favoriteColorOptions[
          Math.floor(Math.random() * favoriteColorOptions.length)
        ]
    };

    iniReduxState[person.id] = person;
  }

  return iniReduxState;
};
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

export const initialReduxListPersonsState: ReduxListPersonsState = generateRandomPerson(
  10
);
// export const initialReduxListPersonsState: ReduxListPersonsState = {
//   [person1.id]: person1,
//   [person2.id]: person2
// };

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
