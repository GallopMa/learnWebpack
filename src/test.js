import webpackLogo from './img/timg.jpeg';
import style from './index.scss';

function test() {
  let element = document.createElement('img');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.src = webpackLogo;
  element.classList.add(style.img2);

  return element;
}

export default test;