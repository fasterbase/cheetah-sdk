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
import { ComparesModel } from './compares-model';
/**
 * 
 * @export
 * @interface GetCompares
 */
export interface GetCompares {
    /**
     * 
     * @type {Array<ComparesModel>}
     * @memberof GetCompares
     */
    data?: Array<ComparesModel>;
    /**
     * 
     * @type {boolean}
     * @memberof GetCompares
     */
    more?: boolean;
}
