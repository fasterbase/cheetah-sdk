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
 * @interface DatabaseType
 */
export interface DatabaseType {
    /**
     * 
     * @type {string}
     * @memberof DatabaseType
     */
    operation: DatabaseTypeOperationEnum;
    /**
     * 
     * @type {string}
     * @memberof DatabaseType
     */
    query: DatabaseTypeQueryEnum;
    /**
     * 
     * @type {any}
     * @memberof DatabaseType
     */
    data: any;
}

/**
    * @export
    * @enum {string}
    */
export enum DatabaseTypeOperationEnum {
    E = 'e',
    G = 'g',
    L = 'l',
    Eg = 'eg',
    El = 'el',
    C = 'c'
}
/**
    * @export
    * @enum {string}
    */
export enum DatabaseTypeQueryEnum {
    Insert = 'insert',
    Find = 'find',
    Remove = 'remove'
}
