export function receivedPriceHistory(labels, values) {
  return {
    type: 'PRICE_HISTORY_RECEIVED',
    labels,
    values,
    status: 'received',
  };
}

export function fetchingPriceHistory() {
  return {
    type: 'PRICE_HISTORY_FETCH',
    status: 'fetching',
  };
}
