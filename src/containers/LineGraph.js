import React from 'react';
import { Line } from 'react-chartjs-2';

import { connect } from 'react-redux';

const styles = {};

function mapStateToProps(store) {
  return {
    store: {
      priceHistory: store.priceHistory
    },
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


class LineGraph extends React.Component {

  render() {
    return (
      <div>
        <Line data={{
          labels: this.props.store.priceHistory.labels,
          datasets: [
            {
              label: 'Etherium',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.props.store.priceHistory.values,
            }
          ]
        }}>
        </Line>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineGraph)
