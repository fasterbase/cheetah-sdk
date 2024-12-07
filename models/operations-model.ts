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
 * @interface OperationsModel
 */
export interface OperationsModel {
    /**
     * 
     * @type {string}
     * @memberof OperationsModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OperationsModel
     */
    value: OperationsModelValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum OperationsModelValueEnum {
    Equal = 'equal',
    NotEqual = 'notEqual',
    Greater = 'greater',
    Less = 'less',
    EqualGreater = 'equalGreater',
    EqualLess = 'equalLess',
    DiffGreater = 'diffGreater',
    DiffLess = 'diffLess'
}

