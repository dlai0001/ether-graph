function priceHistory(state = { labels: null, values: null, status: 'init' }, action) {

  switch (action.type) {
    case 'PRICE_HISTORY_FETCH':
      return {
        ...state,
        status: 'fetching',
      };

    case 'PRICE_HISTORY_RECEIVED':
      return {
        status: 'received',
        labels: action.labels,
        values: action.values,
      };

    default:
      return state;
  }
}

export default priceHistory;