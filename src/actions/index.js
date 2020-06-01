import * as c from './ActionTypes';

export const addArticle = (article) => {
  const { title, headline, body, author, date, category, id } = article;
  return {
    type: 'ADD_ARTICLE',
    title: title,
    headline: headline,
    body: body,
    author: author,
    date: date,
    category: category,
    id: id,
  }
}

export const deleteArticle = id => ({
  type: 'DELETE_ARTICLE',
  id
});

export const editArticle = id => ({
  type: 'EDIT_ARTICLE',
  id
});
