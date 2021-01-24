import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export class Home extends React.Component {

    constructor() {
      super();

      this.makeARequest();

    }

    async makeARequest() {
      const res = await axios.get( 'http://localhost:3000/test' );
    }
    
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}