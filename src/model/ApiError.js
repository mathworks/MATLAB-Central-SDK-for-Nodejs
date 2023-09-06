
import {ApiClient} from '../ApiClient.js';
import {ApiErrorDetail} from './ApiErrorDetail.js';

/**
 * The ApiError model module.
 * @module model/ApiError
 * @version 1.0.0
 */
export class ApiError {
  /**
   * Constructs a new <code>ApiError</code>.
   * @alias module:model/ApiError
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiError} obj Optional instance to populate.
   * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiError();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiErrorDetail.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {String} status
 */
ApiError.prototype.status = undefined;

/**
 * @member {module:model/ApiErrorDetail} error
 */
ApiError.prototype.error = undefined;

