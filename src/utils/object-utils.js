// @flow

import * as _ from 'lodash';

/**
 * Deeply map the keys of an object by applying `fn` (depth-first iteration).
 * @see https://github.com/lodash/lodash/issues/1244#issuecomment-271850316
 */
export const mapKeysDeep = (object: {}, fn: Function): {} => (
  _.mapValues(
    _.mapKeys(object, fn),
    (value) => (_.isObject(value) ? mapKeysDeep(value, fn) : value),
  )
);
