import React, { Component } from 'react'
import CurrentFires from '../CurrentFires/CurrentFires';

import './ReportFires.css';

export class ReportFires extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
  }

  handleChange = (e) =>{
    const { value } =e.target;
    this.setState({location: value})
  }

  render(){
    return(
      <div>
        <div className='reportFires-form'>
          <form>
            <input 
              onChange={this.handleChange} 
              name='location' 
              value={this.state.location}
            />
          </form>
        </div>
        <div className='reportFires-map'>
          <CurrentFires/>
        </div>
      </div>
    )
  }
}

