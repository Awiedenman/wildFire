import React, { Component } from 'react'
import CurrentFires from '../CurrentFires/CurrentFires';

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
        <form>
          <input 
            onChange={this.handleChange} 
            name='location' 
            value={this.state.location}
          />
        </form>
        <CurrentFires/>
      </div>
    )
  }
}

