import React, { Component } from 'react'
import CurrentFires from '../../containers/CurrentFires/CurrentFires';
import { ReportFiresForm } from '../../containers/ReportFiresForm/ReportFiresForm';

import './ReportFires.css';

export class ReportFires extends Component {
  render(){
    const style = {
          width: '100%',
          height: '100%'
        }
  
    return(
      <div className='reportFires'>
        <div className='reportFires-map'>
          <CurrentFires
            style={style}/>
          <button className='map-submit'>Submit</button>
        </div>
        <div className='reportFires-form'>
          <ReportFiresForm />
        </div>
      </div>
    )
  }
}

