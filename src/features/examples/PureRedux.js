/*只使用redux的例子
 * @Author: lihu
 * @Date: 2021-04-08 22:12:33
 * @LastEditors: lihu
 * @LastEditTime: 2021-04-08 22:27:09
 * @FilePath: \my-rekit-app\src\features\examples\PureRedux.js
 */

import React from 'react';
import { createStore } from 'redux';

function run() {
  const initState = { count: 0 };
  //这个相当于一个reducer
  const counter = (state = initState, action) => {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1 };
      case 'MINUS_ONE':
        return { count: state.count - 1 };
      default:
        break;
    }
    return state;
  };

  //createStore的入参是一个Reducer
  const store = createStore(counter);

  function plusOne() {
    return { type: 'PLUS_ONE' };
  }

  function minusOne() {
    return { type: 'MINUS_ONE' };
  }

  store.subscribe(() => console.log(store.getState()));
  store.dispatch(plusOne());
  store.dispatch(minusOne());
}

export default function PureRedux() {
  return (
    <div>
      <button onClick={() => run()}>运行</button>
      Hello
    </div>
  );
}
