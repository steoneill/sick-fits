import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Meta />
        {this.props.children}
      </div>
    );
  }
}
