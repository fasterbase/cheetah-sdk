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
 * @interface SignupDto
 */
export interface SignupDto {
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    companyId: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    firstname: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    lastname: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    passwordConfirm: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof SignupDto
     */
    subscriptionType: SignupDtoSubscriptionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SignupDtoSubscriptionTypeEnum {
    Free = 'free',
    Pro = 'Pro',
    Enterprise = 'Enterprise'
}

