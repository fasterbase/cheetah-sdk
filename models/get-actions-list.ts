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
import { ActionModel } from './action-model';
/**
 * 
 * @export
 * @interface GetActionsList
 */
export interface GetActionsList {
    /**
     * 
     * @type {Array<ActionModel>}
     * @memberof GetActionsList
     */
    data?: Array<ActionModel>;
    /**
     * 
     * @type {boolean}
     * @memberof GetActionsList
     */
    more?: boolean;
}
