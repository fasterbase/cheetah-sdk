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
import { CustomFunctionVariableDto } from './custom-function-variable-dto';
/**
 * 
 * @export
 * @interface ApproveDto
 */
export interface ApproveDto {
    /**
     * 
     * @type {Array<CustomFunctionVariableDto>}
     * @memberof ApproveDto
     */
    inputs?: Array<CustomFunctionVariableDto>;
    /**
     * 
     * @type {string}
     * @memberof ApproveDto
     */
    companyId: string;
    /**
     * 
     * @type {Array<CustomFunctionVariableDto>}
     * @memberof ApproveDto
     */
    outputs?: Array<CustomFunctionVariableDto>;
}