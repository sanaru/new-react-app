import example from './images/image.jpg';
import svg from './images/svgExample.svg';
import './styles/main.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './components/app';

// Create heading node
// const heading = document.createElement('h1')
// heading.textContent = 'Interesting!'

// // Append heading node to the DOM
// const app = document.querySelector('#root')
// app.append( heading );

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
)