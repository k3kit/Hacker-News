import { Dispatch } from 'react';
import { CommentAction, CommentActionTypes } from '../../types/comment';
import { getComment } from '../../utils/API/news';

export const fetchComments = (ids: number[]) => {
  return async (dispatch: Dispatch<CommentAction>) => {
    dispatch({ type: CommentActionTypes.FETCH_COMMENT });
    const responseComments = await Promise.all(
      ids.map(async (id: number) => {
        getComment(id)
          .then((data) => {
            dispatch({ type: CommentActionTypes.FETCH_COMMENT_SUCCESS, payload: data });
          })
          .catch((e) => {
            console.log(e);
          });
      })
    );
  };
};
