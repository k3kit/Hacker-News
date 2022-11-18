import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
