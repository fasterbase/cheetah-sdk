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
import { DatahubModel } from './datahub-model';
/**
 * 
 * @export
 * @interface GetTables
 */
export interface GetTables {
    /**
     * 
     * @type {Array<DatahubModel>}
     * @memberof GetTables
     */
    data?: Array<DatahubModel>;
    /**
     * 
     * @type {boolean}
     * @memberof GetTables
     */
    more?: boolean;
}
