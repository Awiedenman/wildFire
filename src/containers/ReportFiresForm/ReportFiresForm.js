import React, { Component } from 'react';
// import { postUnverifiedFires } from '../../heplers/apiCalls/apiCalls';

export class ReportFiresForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      latitude: '',
      longitude: '',
      city: '',
      state:'',
      zipCode: ''
    }
  }

  handleChange = (e) =>{
    const { value, name } = e.target;
    this.setState({[name]: value})
  }

  // postUnverifiedFires = (e) => {
  //   e.preventDefault();
  //   postUnverifiedFires(this.state)
  // }

  render() {
    return (
      <form>
        <section className='reportFire-form-section'>
        <h3>Name</h3>
          <label for="name"></label>
            <input 
              onChange={this.handleChange} 
              name='firstName' 
              value={this.state.firstName}
              id='name'
              placeholder='First Name'
            />
          <label for="lastName"></label>
            <input 
              onChange={this.handleChange} 
              name='lastName' 
              value={this.state.lastName}
              id='lastName'
              placeholder='Last Name'
            />
        </section>
        <br />
        <section className='reportFire-form-section'>
          <h3>(Optional)</h3>
          <label for="latitude"></label>
            <input 
              onChange={this.handleChange} 
              name='latitude' 
              value={this.state.latitude}
              id='latitude'
              placeholder='Latitude'
            />
          <label for="longitude"></label>
            <input 
              onChange={this.handleChange} 
              name='longitude' 
              value={this.state.longitude}
              id='longitude'
              placeholder='Longitude'
            />
        </section>
        <br />
        <section className='reportFire-form-section'>
          <label for="city"></label>
            <h3>Location</h3>
            <input 
              onChange={this.handleChange} 
              name='city' 
              value={this.state.city}
              id='city'
              placeholder='City'
            />
          <label for="state"></label>
            <input 
              onChange={this.handleChange} 
              name='state' 
              value={this.state.state}
              id='state'
              placeholder='State'
            />
          <label for="zip code"></label>
            <input 
              onChange={this.handleChange} 
              name='zipCode' 
              value={this.state.zipCode}
              id='zipCode'
              placeholder='Zip Code'
            />  
        </section>
        {/* <button onClick={postUnverifiedFires}>Submit</button> */}
      </form>
    )
  }
}
