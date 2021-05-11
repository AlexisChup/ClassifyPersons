export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  years: number;
  favoriteColor: string;
}

export type ListPersons = Person[];
export type ListPersonsId = string[];
export interface ReduxListPersonsState {
  [id: string]: Person;
}

export type UnclassifiedPersonsId = ListPersonsId;

export interface Criteria {
  minYears?: number;
  favoriteColor?: string;
}
export interface ClassifiedPersonsId {
  listPersonsId: ListPersonsId;
  criteria: Criteria;
}

export interface ReduxSortedPersons {
  classified: ClassifiedPersonsId[]; //it is an array -> multiple groupe
  unclassified: UnclassifiedPersonsId; // whereas there is only 1 unclassified group
}
