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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CustomFunctionDto } from '../models';
import { CustomFunctionModel } from '../models';
import { GetFunctionsList } from '../models';
/**
 * FunctionsApi - axios parameter creator
 * @export
 */
export const FunctionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CustomFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewCustomFunction: async (body: CustomFunctionDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addNewCustomFunction.');
            }
            const localVarPath = `/function`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

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
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomFunction: async (cFunctionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cFunctionId' is not null or undefined
            if (cFunctionId === null || cFunctionId === undefined) {
                throw new RequiredError('cFunctionId','Required parameter cFunctionId was null or undefined when calling deleteCustomFunction.');
            }
            const localVarPath = `/function/{cFunctionId}`
                .replace(`{${"cFunctionId"}}`, encodeURIComponent(String(cFunctionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

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
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomFunction: async (cFunctionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cFunctionId' is not null or undefined
            if (cFunctionId === null || cFunctionId === undefined) {
                throw new RequiredError('cFunctionId','Required parameter cFunctionId was null or undefined when calling getCustomFunction.');
            }
            const localVarPath = `/function/{cFunctionId}`
                .replace(`{${"cFunctionId"}}`, encodeURIComponent(String(cFunctionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

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
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFunctionsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/function/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required

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
 * FunctionsApi - functional programming interface
 * @export
 */
export const FunctionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CustomFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNewCustomFunction(body: CustomFunctionDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await FunctionsApiAxiosParamCreator(configuration).addNewCustomFunction(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomFunction(cFunctionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await FunctionsApiAxiosParamCreator(configuration).deleteCustomFunction(cFunctionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomFunction(cFunctionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CustomFunctionModel>>> {
            const localVarAxiosArgs = await FunctionsApiAxiosParamCreator(configuration).getCustomFunction(cFunctionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFunctionsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetFunctionsList>>> {
            const localVarAxiosArgs = await FunctionsApiAxiosParamCreator(configuration).getFunctionsList(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FunctionsApi - factory interface
 * @export
 */
export const FunctionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CustomFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNewCustomFunction(body: CustomFunctionDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return FunctionsApiFp(configuration).addNewCustomFunction(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomFunction(cFunctionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return FunctionsApiFp(configuration).deleteCustomFunction(cFunctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} cFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomFunction(cFunctionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CustomFunctionModel>> {
            return FunctionsApiFp(configuration).getCustomFunction(cFunctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFunctionsList(options?: AxiosRequestConfig): Promise<AxiosResponse<GetFunctionsList>> {
            return FunctionsApiFp(configuration).getFunctionsList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FunctionsApi - object-oriented interface
 * @export
 * @class FunctionsApi
 * @extends {BaseAPI}
 */
export class FunctionsApi extends BaseAPI {
    /**
     * 
     * @param {CustomFunctionDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionsApi
     */
    public async addNewCustomFunction(body: CustomFunctionDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return FunctionsApiFp(this.configuration).addNewCustomFunction(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} cFunctionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionsApi
     */
    public async deleteCustomFunction(cFunctionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return FunctionsApiFp(this.configuration).deleteCustomFunction(cFunctionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} cFunctionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionsApi
     */
    public async getCustomFunction(cFunctionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CustomFunctionModel>> {
        return FunctionsApiFp(this.configuration).getCustomFunction(cFunctionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FunctionsApi
     */
    public async getFunctionsList(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetFunctionsList>> {
        return FunctionsApiFp(this.configuration).getFunctionsList(options).then((request) => request(this.axios, this.basePath));
    }
}