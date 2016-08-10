import React from 'react';
import ReactDOM from 'react-dom';

export default class BillHero extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}