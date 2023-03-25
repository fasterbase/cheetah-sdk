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
/**
 * 
 * @export
 * @interface CommandModel
 */
export interface CommandModel {
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    commandId: string;
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    parameterName: string;
    /**
     * 
     * @type {string}
     * @memberof CommandModel
     */
    parameterValue: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommandModel
     */
    status: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommandModel
     */
    isDeleted: boolean;
}
