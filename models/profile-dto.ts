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
 * @interface ProfileDto
 */
export interface ProfileDto {
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    passwordConfirm?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    subscriptionType?: ProfileDtoSubscriptionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ProfileDtoSubscriptionTypeEnum {
    Free = 'free',
    Pro = 'Pro',
    Enterprise = 'Enterprise'
}

