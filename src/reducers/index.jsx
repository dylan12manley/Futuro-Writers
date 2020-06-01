import articleListReducer from './article-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  masterTicketList: articleListReducer,
  firestore: firestoreReducer
});

export default rootReducer;
