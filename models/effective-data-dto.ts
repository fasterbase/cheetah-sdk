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
 * @interface EffectiveDataDto
 */
export interface EffectiveDataDto {
    /**
     * 
     * @type {string}
     * @memberof EffectiveDataDto
     */
    columnName: string;
    /**
     * 
     * @type {string}
     * @memberof EffectiveDataDto
     */
    operator?: EffectiveDataDtoOperatorEnum;
    /**
     * 
     * @type {boolean}
     * @memberof EffectiveDataDto
     */
    isValueDynamic: boolean;
    /**
     * 
     * @type {DynamicValueDto}
     * @memberof EffectiveDataDto
     */
    dynamicValue?: DynamicValueDto;
    /**
     * 
     * @type {string}
     * @memberof EffectiveDataDto
     */
    value?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum EffectiveDataDtoOperatorEnum {
    Equal = 'equal',
    Greater = 'greater',
    Less = 'less',
    EqualGreater = 'equalGreater',
    EqualLess = 'EqualLess',
    Contain = 'contain'
}

