import React from 'react';
import axios from 'axios';

export class Home extends React.Component {

    constructor() {
      super();

      this.state = {
        response: undefined
      }

      this.makeARequest();

    }

    async makeARequest() {
      const res = await axios.get( 'http://localhost:3000/jsons/home.json' );

      this.setState( {response: res.data } );
    }
    
    render() {
      return (
        <div className='ui-home'>
            hi
        </div>
      )
    }
}