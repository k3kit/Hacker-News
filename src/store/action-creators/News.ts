/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react';
import { InfoNewAction, NewsInfoActionTypes } from '../../types/InfoNews';
import { INews, NewsAction, NewsActionTypes } from '../../types/news';
import { getComment, getNews, getNewsId } from '../../utils/API/news';

export const fetchNew = () => {
  return (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.FETCH_NEWS });
    getNewsId()
      .then((ids) => Promise.all(ids.slice(0, 100).map((id: number) => getNews(id))))
      .then((data) => dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: data }))
      .catch((e) => {
        console.log(e);
      });
  };
};

export const fetchNewsInfo = (id: number) => {
  return (dispatch: Dispatch<InfoNewAction>) => {
    dispatch({ type: NewsInfoActionTypes.FETCH_NEWS_INFO });
    getNews(id)
      .then((data) => {
        dispatch({ type: NewsInfoActionTypes.FETCH_NEWS_INFO_SUCCESS, payload: data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const fetchComments = (id: number) => {
  return (dispatch: Dispatch<InfoNewAction>) => {
    getNews(id)
      .then((data) => {
        dispatch({ type: NewsInfoActionTypes.FETCH_NEWS_INFO_REFRECH, payload: data.kids });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
