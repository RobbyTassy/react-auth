import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/App.css';

import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-boostrap';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('AUTH_ID', 'Auth_Domain');
  }

  render() {
    return (
      <div>
        <Header lock={this.lock}></Header>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar></Sidebar>
            </Col>
            <Col xs={12} md={9}>
            {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default AppComponent;
