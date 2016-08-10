import React from 'react';
import ReactDOM from 'react-dom';
import BillSummary from './BillSummary';
import BillHero from './BillHero'

let billSummaryProps = {
    title: 'Bill Summary',
    total: '£2000001.37'
}

class App extends React.Component {
  render() {
    return (

      <div id='bill-wrapper'>
        <BillHero text='Bill Hero' />
        <BillSummary {...billSummaryProps} />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
