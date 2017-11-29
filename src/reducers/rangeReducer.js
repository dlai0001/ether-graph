function rangeSelect(state = "day", action) {
  switch (action.type) {
    case 'CHANGE_RANGE':
      return action.range;

    default:
      return state;
  }
}

export default rangeSelect;