import { SEARCH } from '../constants/ActionTypes';

const initialState = [
  {id: 1041, username: 'joao', price: '33', organization: 'angular'},
  {id: 20073, username: 'jorge', price: '41', organization: 'angular'},
  {id: 2248, username: 'pedro', price: '32', organization: 'backbone'},
  {id: 4660, username: 'paulo', price: '97', organization: 'ember'},
  {id: 748, username: 'tom', price: '37', organization: 'backbone'},
  {id: 10574, username: 'tomas', price: '7', organization: 'backbone'},
  {id: 14319, username: 'thiago', price: '12', organization: 'react'},
  {id: 145949, username: 'tereza', price: '66', organization: 'react'},
  {id: 15557, username: 'sofia', price: '75', organization: 'vanilla'},
  {id: 322, username: 'luke', price: '70', organization: 'ember'},
  {id: 1681405, username: 'maria', price: '34', organization: 'vanilla'},
  {id: 2823287, username: 'eduarda', price: '40', organization: ''},
  {id: 3530, username: 'renato', price: '31', organization: 'react'},
  {id: 22728, username: 'flavio', price: '96', organization: 'react'},
  {id: 772, username: 'alex', price: '37', organization: 'angular'},
  {id: 2631, username: 'tobias', price: '8', organization: 'angular'},
  {id: 635, username: 'daniel', price: '11', organization: 'angular'},
  {id: 676210, username: 'pele', price: '66', organization: 'aurelia'},
  {id: 849872, username: 'orlando', price: '77', organization: 'aurelia'},
  {id: 192618, username: 'leia', price: '70', organization: 'aurelia'}
];

export default function devs(state = initialState, action) {
  switch (action.type) {
  case SEARCH:
    return action.text ?
      state.filter(dev => dev.organization.includes(action.text)) : initialState;

  default:
    return state;
  }
}
