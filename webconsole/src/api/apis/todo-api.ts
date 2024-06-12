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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AuditRequest } from '../models';
import { EnableUserRequest } from '../models';
import { OidcSettingsResponse } from '../models';
import { UsersResponse } from '../models';
/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Audit
         * @param {AuditRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        audit: async (body: AuditRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling audit.');
            }
            const localVarPath = `/api/audit`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This function is an API endpoint that adds an OIDC provider.  TODO: This function is currently unused.
         * @summary Add OIDC Provider
         * @param {EnableUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oidcAdd: async (body: EnableUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling oidcAdd.');
            }
            const localVarPath = `/api/oidc/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization_admin required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This function is an API endpoint that retrieves all OIDC providers.  TODO: This function is currently unused.
         * @summary Get OIDC Providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oidcGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/oidc/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization_admin required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This function is an API endpoint that retrieves the list of all strategies. <br> TODO: This function is currently unused.
         * @summary List strategies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        strategies: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/stategies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authorization_admin required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Audit
         * @param {AuditRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async audit(body: AuditRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).audit(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This function is an API endpoint that adds an OIDC provider.  TODO: This function is currently unused.
         * @summary Add OIDC Provider
         * @param {EnableUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oidcAdd(body: EnableUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EnableUserRequest>>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).oidcAdd(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This function is an API endpoint that retrieves all OIDC providers.  TODO: This function is currently unused.
         * @summary Get OIDC Providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oidcGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<OidcSettingsResponse>>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).oidcGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This function is an API endpoint that retrieves the list of all strategies. <br> TODO: This function is currently unused.
         * @summary List strategies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async strategies(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UsersResponse>>> {
            const localVarAxiosArgs = await TodoApiAxiosParamCreator(configuration).strategies(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Audit
         * @param {AuditRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async audit(body: AuditRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TodoApiFp(configuration).audit(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This function is an API endpoint that adds an OIDC provider.  TODO: This function is currently unused.
         * @summary Add OIDC Provider
         * @param {EnableUserRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oidcAdd(body: EnableUserRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<EnableUserRequest>> {
            return TodoApiFp(configuration).oidcAdd(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This function is an API endpoint that retrieves all OIDC providers.  TODO: This function is currently unused.
         * @summary Get OIDC Providers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oidcGet(options?: AxiosRequestConfig): Promise<AxiosResponse<OidcSettingsResponse>> {
            return TodoApiFp(configuration).oidcGet(options).then((request) => request(axios, basePath));
        },
        /**
         * This function is an API endpoint that retrieves the list of all strategies. <br> TODO: This function is currently unused.
         * @summary List strategies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async strategies(options?: AxiosRequestConfig): Promise<AxiosResponse<UsersResponse>> {
            return TodoApiFp(configuration).strategies(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * Audit
     * @param {AuditRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public async audit(body: AuditRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TodoApiFp(this.configuration).audit(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This function is an API endpoint that adds an OIDC provider.  TODO: This function is currently unused.
     * @summary Add OIDC Provider
     * @param {EnableUserRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public async oidcAdd(body: EnableUserRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<EnableUserRequest>> {
        return TodoApiFp(this.configuration).oidcAdd(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This function is an API endpoint that retrieves all OIDC providers.  TODO: This function is currently unused.
     * @summary Get OIDC Providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public async oidcGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<OidcSettingsResponse>> {
        return TodoApiFp(this.configuration).oidcGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This function is an API endpoint that retrieves the list of all strategies. <br> TODO: This function is currently unused.
     * @summary List strategies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public async strategies(options?: AxiosRequestConfig) : Promise<AxiosResponse<UsersResponse>> {
        return TodoApiFp(this.configuration).strategies(options).then((request) => request(this.axios, this.basePath));
    }
}
