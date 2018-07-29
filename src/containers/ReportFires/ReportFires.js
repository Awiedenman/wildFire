import React, { Component } from 'react'
import CurrentFires from '../CurrentFires/CurrentFires';
import { ReportFiresForm } from '../ReportFireForm/ReportFiresForm';

import './ReportFires.css';

export class ReportFires extends Component {
  render(){
    const style = {
          width: '50%',
          height: '50%'
        }
    return(
      <div className='reportFires'>
        <div className='reportFires-form'>
          <ReportFiresForm />
        </div>
        <div className='reportFires-map'>
          <CurrentFires
            style={style}/>
        </div>
      </div>
    )
  }
}

