/* tslint:disable */
/* eslint-disable */
/**
 * sctgdesk-api-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface OidcUserInfo
 */
export interface OidcUserInfo {

    /**
     * @type {boolean}
     * @memberof OidcUserInfo
     */
    emailVerification: boolean;

    /**
     * @type {boolean}
     * @memberof OidcUserInfo
     */
    emailAlarmNotification: boolean;

    /**
     * @type {Array<string>}
     * @memberof OidcUserInfo
     */
    loginDeviceWhitelist: Array<string>;

    /**
     * @type {{ [key: string]: string; }}
     * @memberof OidcUserInfo
     */
    other: { [key: string]: string; };
}