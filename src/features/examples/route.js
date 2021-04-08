/*
 * @Author: lihu
 * @Date: 2019-08-11 12:16:58
 * @LastEditors: lihu
 * @LastEditTime: 2021-04-08 22:15:18
 * @FilePath: \my-rekit-app\src\features\examples\route.js
 */
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { WelcomePage, CounterPage, RedditListPage, Layout, PureRedux } from './';

export default {
  path: 'examples',
  name: 'Examples',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Welcome page', component: WelcomePage },
    { path: 'counter', name: 'Counter page', component: CounterPage },
    { path: 'reddit', name: 'Reddit list page', component: RedditListPage },
    { path: 'pureRedux', name: 'pureRedux', component: PureRedux },
  ],
};
