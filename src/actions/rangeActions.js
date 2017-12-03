/**
 * Change graphing time frame.
 * @param range
 * @return {{type: string, range: *}}
 */
export function changeRange(range) {
  return {
    type: 'CHANGE_RANGE',
    range: range,
  };
}
