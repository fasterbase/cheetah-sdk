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
 * @interface DatahubModel
 */
export interface DatahubModel {
    /**
     * 
     * @type {string}
     * @memberof DatahubModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DatahubModel
     */
    companyId: string;
    /**
     * 
     * @type {string}
     * @memberof DatahubModel
     */
    tableName: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DatahubModel
     */
    schemaDefinition: { [key: string]: string; };
}