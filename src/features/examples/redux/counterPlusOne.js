/*
 * @Author: lihu
 * @Date: 2019-08-11 12:16:58
 * @LastEditors: lihu
 * @LastEditTime: 2021-04-08 22:07:54
 * @FilePath: \my-rekit-app\src\features\examples\redux\counterPlusOne.js
 */
// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { EXAMPLES_COUNTER_PLUS_ONE } from './constants';

export function counterPlusOne() {
  return {
    type: EXAMPLES_COUNTER_PLUS_ONE,
  };
}

/**
 *
 * @param {*} state 当前的状态
 * @param {*} action 触发的action
 * @returns
 */
export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_COUNTER_PLUS_ONE:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}
