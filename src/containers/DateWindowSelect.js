import Chip from 'material-ui/Chip';
import React from 'react';
import { blue300 } from 'material-ui/styles/colors';

import { connect } from 'react-redux';

import { changeRange } from '../actions/rangeActions';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  active: {
    backgroundColor: 'green',
  }
};

function mapStateToProps(store) {
  return {
    range: store.range,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectDay: () => dispatch(changeRange('day')),
    selectWeek: () => dispatch(changeRange('week')),
    selectMonth: () => dispatch(changeRange('month')),
    selectYear: () => dispatch(changeRange('year')),
  }
}

class DateWindowSelect extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>

        <Chip style={styles.chip} backgroundColor={this.props.range === "day" ? blue300 : ''}
              onClick={this.props.selectDay}>
          Day
        </Chip>
        <Chip style={styles.chip} backgroundColor={this.props.range === "week" ? blue300 : ''}
              onClick={this.props.selectWeek}>
          Week
        </Chip>
        <Chip style={styles.chip} backgroundColor={this.props.range === "month" ? blue300 : ''}
              onClick={this.props.selectMonth}>
          Month
        </Chip>
        <Chip style={styles.chip} backgroundColor={this.props.range === "year" ? blue300 : ''}
              onClick={this.props.selectYear}>
          Year
        </Chip>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateWindowSelect)
