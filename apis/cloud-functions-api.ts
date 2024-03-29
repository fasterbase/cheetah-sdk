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
import { AcceptDto } from '../models';
import { ApproveDto } from '../models';
import { CloudFunctionDto } from '../models';
import { CloudFunctionModel } from '../models';
import { GetFunctionsList } from '../models';
/**
 * CloudFunctionsApi - axios parameter creator
 * @export
 */
export const CloudFunctionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CloudFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewCloudFunction: async (body: CloudFunctionDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addNewCloudFunction.');
            }
            const localVarPath = `/cloud-function`;
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
         * @param {ApproveDto} body 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        approveFunction: async (body: ApproveDto, cloudFunctionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling approveFunction.');
            }
            // verify required parameter 'cloudFunctionId' is not null or undefined
            if (cloudFunctionId === null || cloudFunctionId === undefined) {
                throw new RequiredError('cloudFunctionId','Required parameter cloudFunctionId was null or undefined when calling approveFunction.');
            }
            const localVarPath = `/cloud-function/approve/{cloudFunctionId}`
                .replace(`{${"cloudFunctionId"}}`, encodeURIComponent(String(cloudFunctionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCloudFunction: async (cloudFunctionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cloudFunctionId' is not null or undefined
            if (cloudFunctionId === null || cloudFunctionId === undefined) {
                throw new RequiredError('cloudFunctionId','Required parameter cloudFunctionId was null or undefined when calling deleteCloudFunction.');
            }
            const localVarPath = `/cloud-function/{cloudFunctionId}`
                .replace(`{${"cloudFunctionId"}}`, encodeURIComponent(String(cloudFunctionId)));
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
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCloutFunction: async (cloudFunctionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cloudFunctionId' is not null or undefined
            if (cloudFunctionId === null || cloudFunctionId === undefined) {
                throw new RequiredError('cloudFunctionId','Required parameter cloudFunctionId was null or undefined when calling getCloutFunction.');
            }
            const localVarPath = `/cloud-function/{cloudFunctionId}`
                .replace(`{${"cloudFunctionId"}}`, encodeURIComponent(String(cloudFunctionId)));
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
            const localVarPath = `/cloud-function/list`;
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
 * CloudFunctionsApi - functional programming interface
 * @export
 */
export const CloudFunctionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CloudFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNewCloudFunction(body: CloudFunctionDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CloudFunctionsApiAxiosParamCreator(configuration).addNewCloudFunction(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ApproveDto} body 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async approveFunction(body: ApproveDto, cloudFunctionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CloudFunctionsApiAxiosParamCreator(configuration).approveFunction(body, cloudFunctionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCloudFunction(cloudFunctionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await CloudFunctionsApiAxiosParamCreator(configuration).deleteCloudFunction(cloudFunctionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCloutFunction(cloudFunctionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CloudFunctionModel>>> {
            const localVarAxiosArgs = await CloudFunctionsApiAxiosParamCreator(configuration).getCloutFunction(cloudFunctionId, options);
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
            const localVarAxiosArgs = await CloudFunctionsApiAxiosParamCreator(configuration).getFunctionsList(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CloudFunctionsApi - factory interface
 * @export
 */
export const CloudFunctionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CloudFunctionDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addNewCloudFunction(body: CloudFunctionDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CloudFunctionsApiFp(configuration).addNewCloudFunction(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ApproveDto} body 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async approveFunction(body: ApproveDto, cloudFunctionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CloudFunctionsApiFp(configuration).approveFunction(body, cloudFunctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCloudFunction(cloudFunctionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return CloudFunctionsApiFp(configuration).deleteCloudFunction(cloudFunctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} cloudFunctionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCloutFunction(cloudFunctionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CloudFunctionModel>> {
            return CloudFunctionsApiFp(configuration).getCloutFunction(cloudFunctionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFunctionsList(options?: AxiosRequestConfig): Promise<AxiosResponse<GetFunctionsList>> {
            return CloudFunctionsApiFp(configuration).getFunctionsList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudFunctionsApi - object-oriented interface
 * @export
 * @class CloudFunctionsApi
 * @extends {BaseAPI}
 */
export class CloudFunctionsApi extends BaseAPI {
    /**
     * 
     * @param {CloudFunctionDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFunctionsApi
     */
    public async addNewCloudFunction(body: CloudFunctionDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CloudFunctionsApiFp(this.configuration).addNewCloudFunction(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ApproveDto} body 
     * @param {string} cloudFunctionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFunctionsApi
     */
    public async approveFunction(body: ApproveDto, cloudFunctionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CloudFunctionsApiFp(this.configuration).approveFunction(body, cloudFunctionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} cloudFunctionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFunctionsApi
     */
    public async deleteCloudFunction(cloudFunctionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return CloudFunctionsApiFp(this.configuration).deleteCloudFunction(cloudFunctionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} cloudFunctionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFunctionsApi
     */
    public async getCloutFunction(cloudFunctionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CloudFunctionModel>> {
        return CloudFunctionsApiFp(this.configuration).getCloutFunction(cloudFunctionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFunctionsApi
     */
    public async getFunctionsList(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetFunctionsList>> {
        return CloudFunctionsApiFp(this.configuration).getFunctionsList(options).then((request) => request(this.axios, this.basePath));
    }
}
