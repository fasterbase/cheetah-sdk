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
import { StateModel } from './state-model';
/**
 * 
 * @export
 * @interface GetStates
 */
export interface GetStates {
    /**
     * 
     * @type {Array<StateModel>}
     * @memberof GetStates
     */
    data?: Array<StateModel>;
    /**
     * 
     * @type {boolean}
     * @memberof GetStates
     */
    more?: boolean;
}