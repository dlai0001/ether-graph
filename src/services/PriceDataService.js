import _ from 'lodash';
import axios from 'axios';

import { fetchingPriceHistory } from "../actions/priceHistoryActions";
import { receivedPriceHistory } from "../actions/priceHistoryActions";

let currency = 'eth';

export default (store) => {
  let currentValue = _.get(store.getState(), 'range');

  let handleChange = (newValue) => {
    store.dispatch(fetchingPriceHistory());

    let url = `http://0.0.0.0:8080/api/${currency}/${newValue}`;
    axios.get(url)
      .then((result) => {
        store.dispatch(receivedPriceHistory(result.data.labels, result.data.values));
      });
  };

  // handle initial range value.
  handleChange(currentValue);

  // handle range changes.
  store.subscribe(() => {
    let previousValue = currentValue;
    currentValue = _.get(store.getState(), 'range');
    if (previousValue !== currentValue) {
      handleChange(currentValue);
    }
  });
}

