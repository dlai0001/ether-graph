/**
 * Tracks range selection.
 * @param state
 * @param action
 * @return {string}
 */
function rangeSelect(state = "day", action) {
  switch (action.type) {
    case 'CHANGE_RANGE':
      return action.range;

    default:
      return state;
  }
}

export default rangeSelect;