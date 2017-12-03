import _ from 'lodash';
import axios from 'axios';

import { fetchingPriceHistory } from "../actions/priceHistoryActions";
import { receivedPriceHistory } from "../actions/priceHistoryActions";

let currency = 'eth';

/**
 * Action event listener that fetches price history data based on range selected.
 * @param store
 */
export default (store) => {
  let currentValue = _.get(store.getState(), 'range');

  let handleChange = (newValue) => {
    store.dispatch(fetchingPriceHistory());

    let url = process.env.NODE_ENV !== 'production' ? `http://0.0.0.0:8080/api/${currency}/${newValue}` : `/api/${currency}/${newValue}`;
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

