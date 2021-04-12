/*只使用redux的例子
 * @Author: lihu
 * @Date: 2021-04-08 22:12:33
 * @LastEditors: lihu
 * @LastEditTime: 2021-04-08 22:27:09
 * @FilePath: \my-rekit-app\src\features\examples\PureRedux.js
 */

import React, { useState } from 'react';
import { createStore } from 'redux';

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

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
