import React, { Component } from 'react'
import CurrentFires from '../CurrentFires/CurrentFires';
import { ReportFiresForm } from '../ReportFireForm/ReportFiresForm';

import './ReportFires.css';

export class ReportFires extends Component {
  
  render(){
    return(
      <div className='reportFires'>
        <div className='reportFires-form'>
          <ReportFiresForm />
        </div>
        <div className='reportFires-map'>
          <CurrentFires/>
        </div>
      </div>
    )
  }
}

