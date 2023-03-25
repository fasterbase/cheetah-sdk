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
 * @interface CompareDto
 */
export interface CompareDto {
    /**
     * 
     * @type {string}
     * @memberof CompareDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CompareDto
     */
    value: CompareDtoValueEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CompareDtoValueEnum {
    Previous = 'previous',
    Past30 = 'past30',
    Past60 = 'past60',
    Past300 = 'past300',
    CustomPeriod = 'customPeriod',
    CustomValue = 'customValue',
    CustomUserInput = 'customUserInput'
}
