import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';
import '../assets/styles/style.css';

class App extends Component {
  render() {
    return (
      <DocumentTitle title="Devshop">
        <RouteHandler/>
      </DocumentTitle>
    );
  }
}

export default App;
