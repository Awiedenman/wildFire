import React, { Component } from 'react';
import { postUnverifiedFires } from '../../heplers/apiCalls/apiCalls';
import { connect } from 'react-redux';
import { addUnverifiedFire } from '../../actions/index';
import { withRouter } from 'react-router-dom';

export class ReportFiresForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      latitude: '',
      longitude: '',
      city: '',
      state:'',
      zip_code: '',
      verified: false
    };
  }

  handleChange = (e) =>{
    const { value, name } = e.target;
    this.setState({[name]: value})
  }

  handlePostUnverifiedFires = async (event) => {    
    event.preventDefault();
    // try {
      const unverifiedFiresFromDb = await postUnverifiedFires(this.state);
      this.props.addUnverifiedFire(unverifiedFiresFromDb)
    // } catch (error){
      // throw Error('Sorry, we could not post unverified fires from the database');
    // } 
    this.setState({
      first_name: '',
      last_name: '',
      latitude: '',
      longitude: '',
      city: '',
      state: '',
      zip_code: '',
      verified: false
    });
  };

  render() {
    return (
      <form>
        <section className='reportFire-form-section'>
          <h3>Name</h3>
          <label for="name"></label>
          <input 
            onChange={this.handleChange} 
            name='first_name' 
            value={this.state.first_name}
            id='name'
            placeholder='First Name'
          />
          <label for="lastName"></label>
          <input 
            onChange={this.handleChange} 
            name='last_name' 
            value={this.state.last_name}
            id='lastName'
            placeholder='Last Name'
          />
        </section>
        <br />
        <section className='reportFire-form-section'>
          <h3>(Required)</h3>
          <label for="latitude"></label>
          <input 
            onChange={this.handleChange} 
            name='latitude' 
            value={this.state.latitude}
            id='latitude'
            placeholder='Latitude'
            required
          />
          <label for="longitude"></label>
          <input 
            onChange={this.handleChange} 
            name='longitude' 
            value={this.state.longitude}
            id='longitude'
            placeholder='Longitude'
            required
          />
        </section>
        <br />
        <section className='reportFire-form-section'>
          <label for="city"></label>
          <h3>Location</h3>
          <br/>
          <h3>(optional)</h3>
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
            name='zip_code' 
            value={this.state.zip_code}
            id='zipCode'
            placeholder='Zip Code'
          />  
        </section>
        <button onClick={this.handlePostUnverifiedFires}>Submit</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUnverifiedFire: (unverifiedFiresFromDb) => dispatch(addUnverifiedFire(unverifiedFiresFromDb))
})

export default withRouter(connect(null, mapDispatchToProps)(ReportFiresForm));
