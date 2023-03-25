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
import { Table } from './table';
/**
 * 
 * @export
 * @interface WorkspaceDetail
 */
export interface WorkspaceDetail {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDetail
     */
    workspaceId: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDetail
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDetail
     */
    description?: string;
    /**
     * 
     * @type {Array<Table>}
     * @memberof WorkspaceDetail
     */
    tables: Array<Table>;
    /**
     * 
     * @type {number}
     * @memberof WorkspaceDetail
     */
    tableLimit: number;
}