/* tslint:disable */
/* eslint-disable */
/**
 * Fasterbase
 * Fasterbase API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DeviceModel } from './device-model';
/**
 * 
 * @export
 * @interface GetAllDevices
 */
export interface GetAllDevices {
    /**
     * 
     * @type {Array<DeviceModel>}
     * @memberof GetAllDevices
     */
    data?: Array<DeviceModel>;
    /**
     * 
     * @type {boolean}
     * @memberof GetAllDevices
     */
    more?: boolean;
}
