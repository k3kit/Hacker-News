import { InfoNewAction, NewsInfoActionTypes } from '../../types/InfoNews';
import { INews } from '../../types/news';

interface ICurrentNews {
  title?: string;
  by?: string;
  time?: number;
  score?: number;
  url?: string;
  kids?: number[];
}
interface NewsInfoState {
  loading: boolean;
  error: null | string;
  newInfo: ICurrentNews;
}
const initialState: NewsInfoState = {
  loading: false,
  error: null,
  newInfo: {},
};

export const infoNewReducer = (state = initialState, action: InfoNewAction) => {
  switch (action.type) {
    case NewsInfoActionTypes.FETCH_NEWS_INFO:
      return { ...state, loading: true };
    case NewsInfoActionTypes.FETCH_NEWS_INFO_SUCCESS:
      return { ...state, newInfo: { ...action.payload } };
    case NewsInfoActionTypes.FETCH_NEWS_INFO_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
