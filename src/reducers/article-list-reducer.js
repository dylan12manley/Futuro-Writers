import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, headline, body, author, date, category, id } = action;
  switch (action.type) {
  case c.ADD_ARTICLE:
    return Object.assign({}, state, {
      [id]: {
        title: title,
        headline: headline,
        body: body,
        author: author,
        date: date,
        category: category,
        id: id,
      }
    });
  case c.DELETE_ARTICLE:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
