'use strict';

import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react-native';
// components
import Footer from '../components/footer.js';
// actions
import * as NavigationActions from '../actions/router.js';

const actionCreators = {
  ...NavigationActions,
};

class FooterContainer extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Footer {...this.props} />
    );
  }
}

FooterContainer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, actionCreators)(FooterContainer);
