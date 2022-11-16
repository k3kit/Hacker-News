import { Dispatch } from 'react';
import { INews, NewsAction, NewsActionTypes } from '../../types/news';
import { getNews, getNewsId } from '../../utils/API/news';

export const fetchNew = () => {
  return (dispatch: Dispatch<NewsAction>) => {
    getNewsId()
      .then((ids) => Promise.all(ids.slice(0, 100).map((id: number) => getNews(id))))
      .then((data) => dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: data }))
      .catch((e) => {
        console.log(e);
      });
  };
};

export const initFetch = () => {
  return (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.FETCH_NEWS });
  };
};
