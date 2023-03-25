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
import { CustomFunctionVariablesModel } from './custom-function-variables-model';
/**
 * 
 * @export
 * @interface CustomFunctionModel
 */
export interface CustomFunctionModel {
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    cFunctionId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    isInReview: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    isVerified: string;
    /**
     * 
     * @type {Array<CustomFunctionVariablesModel>}
     * @memberof CustomFunctionModel
     */
    inputs?: Array<CustomFunctionVariablesModel>;
    /**
     * 
     * @type {Array<CustomFunctionVariablesModel>}
     * @memberof CustomFunctionModel
     */
    outputs?: Array<CustomFunctionVariablesModel>;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    isPublic: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFunctionModel
     */
    url: string;
}