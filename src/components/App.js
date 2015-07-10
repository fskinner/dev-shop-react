import React from 'react';
import DocumentTitle from 'react-document-title';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <DocumentTitle title="Devshop">
        <RouteHandler/>
      </DocumentTitle>
    );
  }
}
