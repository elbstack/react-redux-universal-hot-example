import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import config from '../../config';
import { asyncConnect } from 'redux-connect';

@asyncConnect([{
  promise: () => {
    return Promise.resolve();
  }
}])
@connect(
  null,
  null
)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>

        {this.props.children}
      </div>
    );
  }
}
