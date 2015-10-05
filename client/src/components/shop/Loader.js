import React from 'react';

export default class Loader extends React.Component {
  render() {
    const { loading } = this.props;

    return(
        <p className="bg-info">{loading ? 'Carregando...' : ''}</p>
    );
  }
}
