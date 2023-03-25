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
import { OutputModel } from './output-model';
/**
 * 
 * @export
 * @interface DeviceModel
 */
export interface DeviceModel {
    /**
     * 
     * @type {string}
     * @memberof DeviceModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceModel
     */
    description?: string;
    /**
     * 
     * @type {Array<OutputModel>}
     * @memberof DeviceModel
     */
    outputs?: Array<OutputModel>;
    /**
     * 
     * @type {string}
     * @memberof DeviceModel
     */
    deviceId: string;
}
