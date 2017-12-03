/**
 * Received data from price history request.
 * @param labels
 * @param values
 * @return {{type: string, labels: *, values: *, status: string}}
 */
export function receivedPriceHistory(labels, values) {
  return {
    type: 'PRICE_HISTORY_RECEIVED',
    labels,
    values,
    status: 'received',
  };
}

/**
 * Price history fetch in process
 * @return {{type: string, status: string}}
 */
export function fetchingPriceHistory() {
  return {
    type: 'PRICE_HISTORY_FETCH',
    status: 'fetching',
  };
}
