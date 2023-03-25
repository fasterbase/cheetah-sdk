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
import { CloudFunction } from './cloud-function';
import { CommandType } from './command-type';
import { DatabaseType } from './database-type';
/**
 * 
 * @export
 * @interface FlowDto
 */
export interface FlowDto {
    /**
     * 
     * @type {string}
     * @memberof FlowDto
     */
    type: FlowDtoTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FlowDto
     */
    priority: number;
    /**
     * 
     * @type {CloudFunction}
     * @memberof FlowDto
     */
    market?: CloudFunction;
    /**
     * 
     * @type {CommandType}
     * @memberof FlowDto
     */
    command?: CommandType;
    /**
     * 
     * @type {DatabaseType}
     * @memberof FlowDto
     */
    database?: DatabaseType;
}

/**
    * @export
    * @enum {string}
    */
export enum FlowDtoTypeEnum {
    Command = 'command',
    Market = 'market',
    Database = 'database',
    Device = 'device'
}

