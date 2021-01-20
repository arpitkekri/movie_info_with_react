# React

React has two ways of defining components

1. Class method ( older way ) 
2. Function method ( newer way ) -> We will be following this
  - Name of function is name of component

## Advantages of Function Component

1. React Hooks work with function components.
2. Promotes functional style of programming.

## JSX Intro

1. JSX is like HTML
2. You can use custom components as html tag names.
3. JSX has a single top level component
4. Within js -> Functions can return jsx
5. Within jsx -> Anything within curly braces is javascript {'javascript stuff here'}

## Multiple ways to export from a JS file (module)

1. export default
2. Module.exports
- [https://www.sitepoint.com/understanding-module-exports-exports-node-js/](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

## Two modes of data transfer

1. Parent child data transfer. ( Via props in React. Via @Input/@Output in Angular )
2. Via some kind of data store that can be shared across components. ( Reduc or Custom React Hook. In Angular Services )

## Change Detection

- AngularJS runs a digest cycle. So it knows what has updated. Hence extra overhead and slightly worse performance.
- In react, react has to be told what is updated.
- Anytime state changes in a parent, all children re rendered.

## Example on button to increment counter
- [./omdb-ui/src/pages/HomePage/HomePage.js](./omdb-ui/src/pages/HomePage/HomePage.js)


- npm install webpack webpack-dev-server --save-dev  

# No need to install and download setup just write code and see output and play with react with this website 
- https://jscomplete.com/playground 


# Learn React

```JavaScript
import React, { useState } from 'react';
function Button(props) {
    return <button onClick={props.incrementCounter}> Click me! </button>
}

function Counter(props) {
    return <p> Count = {props.value} </p>
}

export default function HomePage() {
    // useState -> A function provided by react
    // Input to useState -> Initial value of counter
    // Returns an array of 2 items
    // 1st is counter
    // 2nd is function to set value of counter
    // Long syntax
    // const returnArr = useState(0);
    // const counter = returnArr[0];
    // const setCounter = returnArr[1];
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => { setCounter(counter + 1); }
    return (
        <>
            <p> Hello World </p>
            <Button incrementCounter={incrementCounter} />
            <Counter value={counter} />
        </>
    )
}
```