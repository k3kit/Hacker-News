import { Dispatch } from 'react';
import { INews, NewsAction, NewsActionTypes } from '../../../types/news';
import { getNews, getNewsId } from '../../../utils/API/news';

export const fetchNew = () => {
  return (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.FETCH_NEWS });
    getNewsId()
      .then((id) => Promise.all(id.slice(0, 100).map((id: number) => getNews(id))))
      .then((data) => dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: data }))
      .catch((e) => {
        dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: e as string });
      });
  };
};
