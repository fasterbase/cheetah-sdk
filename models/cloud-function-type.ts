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
import { CloudFunctionInputParameter } from './cloud-function-input-parameter';
import { CloudFunctionModel } from './cloud-function-model';
/**
 * 
 * @export
 * @interface CloudFunctionType
 */
export interface CloudFunctionType {
    /**
     * 
     * @type {string}
     * @memberof CloudFunctionType
     */
    cloudFunctionId?: string;
    /**
     * 
     * @type {CloudFunctionModel}
     * @memberof CloudFunctionType
     */
    data?: CloudFunctionModel;
    /**
     * 
     * @type {Array<CloudFunctionInputParameter>}
     * @memberof CloudFunctionType
     */
    inputFields: Array<CloudFunctionInputParameter>;
}
