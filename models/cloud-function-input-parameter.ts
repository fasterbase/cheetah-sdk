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
import { DynamicValueDto } from './dynamic-value-dto';
/**
 * 
 * @export
 * @interface CloudFunctionInputParameter
 */
export interface CloudFunctionInputParameter {
    /**
     * 
     * @type {boolean}
     * @memberof CloudFunctionInputParameter
     */
    isValueDynamic: boolean;
    /**
     * 
     * @type {DynamicValueDto}
     * @memberof CloudFunctionInputParameter
     */
    dynamicValue?: DynamicValueDto;
    /**
     * 
     * @type {string}
     * @memberof CloudFunctionInputParameter
     */
    value: string;
}