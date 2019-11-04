import _ from 'lodash';
import montain from './img/montain.jpg';
import webpackLogo from './img/timg.jpeg';

import test from './test';


import style from './index.scss'

console.log(montain)
const path = require('path');

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', 'machi06', 'love someone'], ' ');

  return element;
}
function img() {
  let element = document.createElement('img');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.src = montain;
  element.classList.add('img');

  return element;
}
function img2() {
  let element = document.createElement('img');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.src = webpackLogo;
  element.classList.add(style.img2);

  return element;
}
function icon() {
  let element = document.createElement('div');
  element.innerText = '你好';
  element.classList.add('fa');
  element.classList.add('fa-telegram');

  return element;
}
var root = document.getElementById('root');
document.body.appendChild(component());
root.innerHTML = '<div>我爱你</div>';
document.body.appendChild(img());
// document.body.appendChild(img2());
// document.body.appendChild(test());
document.body.appendChild(icon());
