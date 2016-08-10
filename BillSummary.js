import React from 'react';
import ReactDOM from 'react-dom';

export default class BillSummary extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.total}</h2>
      </div>
    )
  }
}
