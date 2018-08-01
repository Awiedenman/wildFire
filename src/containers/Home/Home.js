import React, {Component} from 'react';
import CurrentFires from '../CurrentFires/CurrentFires';
import { fireDataCleaner } from '../../heplers/cleaner/cleaner';
import { currentFireRequest, getUnverifiedFires  } from '../../heplers/apiCalls/apiCalls';
import { storeCurrentFireData } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  async componentDidMount() { 
    try {
      // await this.setState({isLoading: true})
      const currentFireData = await currentFireRequest();
      const cleanedCurrentFireData = fireDataCleaner(currentFireData);
      // await this.setState({isLoading: false});
      const firesFromDb = await getUnverifiedFires(); 
      console.log(firesFromDb);
      
      this.props.storeCurrentFireData(cleanedCurrentFireData, firesFromDb);
    } catch (error) {
      throw error;
    }
  }

  style = {
    width: '100%',
    height: '100%'
  }

  render() {
    return (
      <div>
        <CurrentFires
          style = {this.style}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (cleanedCurrentFireData, firesFromDb) => {
    dispatch(storeCurrentFireData(cleanedCurrentFireData, firesFromDb));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Home));

Home.propTypes = {
  storeCurrentFireData: PropTypes.func
};

