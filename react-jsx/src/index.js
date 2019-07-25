import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1. Example of jsx

// const name = 'Diwakar Kumar';
// const element = <h1>Hello, {name}</h1>;

// render(element, document.getElementById('root'));

// 2. Example of jsx using createElement

// const element = (
//     <h1 className="App">
//       Hello, world!
//     </h1>
//   );

const element = React.createElement(
    'h1',
    {className: 'App'},
    'Hello, world!'
  );

render(element, document.getElementById('root'));


//React.createElement() transform above code to an object like below:
// const element = {
//     type: 'h1',
//     props: {
//       className: 'App',
//       children: 'Hello, world!'
//     }
//   };


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
