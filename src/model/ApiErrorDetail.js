
import {ApiClient} from '../ApiClient.js';

/**
 * The ApiErrorDetail model module.
 * @module model/ApiErrorDetail
 * @version 1.0.0
 */
export class ApiErrorDetail {
  /**
   * Constructs a new <code>ApiErrorDetail</code>.
   * @alias module:model/ApiErrorDetail
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApiErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiErrorDetail} obj Optional instance to populate.
   * @return {module:model/ApiErrorDetail} The populated <code>ApiErrorDetail</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApiErrorDetail();
      if (data.hasOwnProperty('error_code'))
        obj.errorCode = ApiClient.convertToType(data['error_code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} errorCode
 */
ApiErrorDetail.prototype.errorCode = undefined;

/**
 * @member {String} message
 */
ApiErrorDetail.prototype.message = undefined;

/**
 * @member {String} details
 */
ApiErrorDetail.prototype.details = undefined;

