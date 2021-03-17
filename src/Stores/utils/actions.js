import {
  callingApiTypes,
  multipleSelectTypes,
  paginationTypes,
} from './action-types';

/**
 * [Action Builder] Build default action with payload
 * @param {string} type
 * @returns {function(*): {payload: *, type: string}}
 */
export const defaultActionWithPayload = (type) => (payload) => ({
  type,
  payload,
});

/**
 * [Action Builder] Build default action without payload
 * @param {string} type
 * @returns {function(): {type: string}}
 */
export const defaultActionWithoutPayload = (type) => () => ({ type });

/**
 * [Action Builder] Starting call api
 * @param {string} type
 * @returns {function(*): {payload: *, type: string}}
 * @example
 * callingAction(DO);
 * // return (data: any) => ({ DO, payload: data })
 */
const callingAction = (type) => defaultActionWithPayload(type);

/**
 * [Action Builder] Call api successful
 * @param {string} type
 * @returns {function(*): {payload: *, type: string}}
 * @example
 * callSuccessAction(SUCCESS);
 * // return (data: any) => ({ SUCCESS, payload: data })
 */
const callSuccessAction = (type) => defaultActionWithPayload(type);

/**
 * [Action Builder] Call api fail
 * @param {string} type
 * @returns {function(*, *, *): {payload: {code: *, data: *, message: *}, type: string}}
 * @example
 * callFailureAction(FAILURE);
 * // return (message, code, data) => ({ FAILURE, payload: { message, code, data } })
 */
const callFailureAction = (type) => (message, code, data) => ({
  type,
  payload: { message, code, data },
});

/**
 * Actions to work with api
 * @param {string} entity
 * @param {string} action
 * @returns {[
 *   function(): {type: string},
 *   function(*): {payload: *, type: string},
 *   function(*, *, *): {payload: {code: *, data: *, message: *}, type: string}
 * ]}
 */
export const callingApiActions = (entity, action) => {
  const [DO, SUCCESS, FAILURE] = callingApiTypes(entity, action);
  return [
    callingAction(DO),
    callSuccessAction(SUCCESS),
    callFailureAction(FAILURE),
  ];
};

/**
 * [Action Builder] Set number of item on a page
 * @param {string} type
 * @returns {function(number): {payload: number, type: string}}
 * @example
 * setLimitAction(SET_LIMIT);
 * // return (limit: number) => ({ SET_LIMIT, payload: limit })
 */
const setLimitAction = (type) => defaultActionWithPayload(type);

/**
 * [Action Builder] Set current page
 * @param {string} type
 * @returns {function(number): {payload: number, type: string}}
 * setOffsetAction(SET_OFFSET)
 * // return (offset: number) => ({ SET_OFFSET, payload: offset })
 */
const setOffsetAction = (type) => defaultActionWithPayload(type);

/**
 * Actions to work with pagination
 * @param {string} entity
 * @returns {[
 *   function(number): {payload: number, type: string},
 *   function(number): {payload: number, type: string}
 * ]}
 */
export const paginationActions = (entity) => {
  const [SET_LIMIT, SET_OFFSET] = paginationTypes(entity);
  return [setLimitAction(SET_LIMIT), setOffsetAction(SET_OFFSET)];
};

/**
 * [Action Builder] Select multiple items
 * @param {string} type
 * @returns {function(number[]): {payload: number[], type: string}}
 * @example
 * selectItemsAction(SELECT);
 * // return (itemIds: number[]) => ({ SELECT, payload: itemIds })
 */
const selectItemsAction = (type) => defaultActionWithPayload(type);

/**
 * [Action Builder] Deselect multiple items
 * @param {string} type
 * @returns {function(number[]): {payload: number[], type: string}}
 * @example
 * deselectItemsAction(DESELECT);
 * // return (itemIds: number[]) => ({ DESELECT, payload: itemIds })
 */
const deselectItemsAction = (type) => defaultActionWithPayload(type);

/**
 * [Action Builder] Deselect all items
 * @param {string} type
 * @returns {function(): {type: string}}
 * @example
 * deselectAllAction(DESELECT_ALL);
 * // return () => ({ DESELECT_ALL })
 */
const deselectAllAction = (type) => defaultActionWithoutPayload(type);

/**
 * Actions to work with multiple select
 * @param {string} entity
 * @returns {[
 *   function(number[]): {payload: number[], type: string},
 *   function(number[]): {payload: number[], type: string},
 *   function(): {type: string}
 * ]}
 */
export const multipleSelectActions = (entity) => {
  const [SELECT, DESELECT, DESELECT_ALL] = multipleSelectTypes(entity);
  return [
    selectItemsAction(SELECT),
    deselectItemsAction(DESELECT),
    deselectAllAction(DESELECT_ALL),
  ];
};
