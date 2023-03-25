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
import { ColumnDto } from './column-dto';
/**
 * 
 * @export
 * @interface TableDto
 */
export interface TableDto {
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    workspaceId: string;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    description: string;
    /**
     * 
     * @type {Array<ColumnDto>}
     * @memberof TableDto
     */
    columns: Array<ColumnDto>;
}
