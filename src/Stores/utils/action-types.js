// @flow
/**
 * Action Types to work with api
 * @param {string} entity
 * @param {string} action
 * @returns {[string, string, string]}
 * @example
 * callingApiTypes('article', 'fetch');
 * // return ['article::fetch', 'article::fetch_successfully', 'article::fetch_failed']
 */
export const callingApiTypes = (entity: string, action: string) => {
  const DO = `${entity}::${action}`;
  const SUCCESS = `${entity}::${action}--successfully`;
  const FAILURE = `${entity}::${action}--failed`;
  return [DO, SUCCESS, FAILURE];
};

/**
 * Action Types to work with pagination
 * @param {string} entity
 * @returns {[string, string]}
 * @example
 * paginationTypes('article');
 * // return ['article::set_limit', 'article::set_offset']
 */
export const paginationTypes = (entity: string) => {
  const SET_LIMIT = `${entity}::set_limit`;
  const SET_OFFSET = `${entity}::set_offset`;
  return [SET_LIMIT, SET_OFFSET];
};

/**
 * Action Types to work with multiple select
 * @param {string} entity
 * @returns {[string, string, string]}
 * @example
 * multipleSelectTypes('article');
 * // return ['article::select', 'article::deselect', 'article::deselect_all']
 */
export const multipleSelectTypes = (entity: string) => {
  const SELECT = `${entity}::select`;
  const DESELECT = `${entity}::deselect`;
  const DESELECT_ALL = `${entity}::deselect_all`;
  return [SELECT, DESELECT, DESELECT_ALL];
};
