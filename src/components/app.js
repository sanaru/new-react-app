import { Home } from '../modules/home';
import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

export const  App = () => {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/shop" component={Shop} />      */}
            </Switch>
        </main>
    )
}