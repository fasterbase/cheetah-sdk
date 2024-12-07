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
import { DeviceBoardDto } from '../models';
import { GetCompares } from '../models';
import { GetOperations } from '../models';
import { GetOutputs } from '../models';
import { GetSimulate } from '../models';
import { GetStates } from '../models';
import { SDKModel } from '../models';
import { SimulateDto } from '../models';
import { SimulateModel } from '../models';
/**
 * BoardApi - axios parameter creator
 * @export
 */
export const BoardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateCode: async (deviceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling generateCode.');
            }
            const localVarPath = `/board/generate/{deviceId}`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)));
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
        getCompares: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/board/compares`;
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
        getOperations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/board/operations`;
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
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutputs: async (deviceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling getOutputs.');
            }
            const localVarPath = `/board/{deviceId}/outputs`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)));
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
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchema: async (deviceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling getSchema.');
            }
            const localVarPath = `/board/schema/{deviceId}`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)));
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
         * @param {string} deviceId 
         * @param {string} simulateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSimulate: async (deviceId: string, simulateId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling getSimulate.');
            }
            // verify required parameter 'simulateId' is not null or undefined
            if (simulateId === null || simulateId === undefined) {
                throw new RequiredError('simulateId','Required parameter simulateId was null or undefined when calling getSimulate.');
            }
            const localVarPath = `/board/simulate/{deviceId}/{simulateId}`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)))
                .replace(`{${"simulateId"}}`, encodeURIComponent(String(simulateId)));
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
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStates: async (deviceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling getStates.');
            }
            const localVarPath = `/board/{deviceId}/states`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)));
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
         * @param {DeviceBoardDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveSchema: async (body: DeviceBoardDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling saveSchema.');
            }
            const localVarPath = `/board`;
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
         * @param {string} deviceId 
         * @param {string} language 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSDK: async (deviceId: string, language: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling sendSDK.');
            }
            // verify required parameter 'language' is not null or undefined
            if (language === null || language === undefined) {
                throw new RequiredError('language','Required parameter language was null or undefined when calling sendSDK.');
            }
            const localVarPath = `/board/sdk/{deviceId}/{language}`
                .replace(`{${"deviceId"}}`, encodeURIComponent(String(deviceId)))
                .replace(`{${"language"}}`, encodeURIComponent(String(language)));
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
         * @param {SimulateDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        simulate: async (body: SimulateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling simulate.');
            }
            const localVarPath = `/board/simulate`;
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
    }
};

/**
 * BoardApi - functional programming interface
 * @export
 */
export const BoardApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateCode(deviceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).generateCode(deviceId, options);
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
        async getCompares(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetCompares>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getCompares(options);
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
        async getOperations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetOperations>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getOperations(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputs(deviceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetOutputs>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getOutputs(deviceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchema(deviceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DeviceBoardDto>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getSchema(deviceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {string} simulateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSimulate(deviceId: string, simulateId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetSimulate>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getSimulate(deviceId, simulateId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStates(deviceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetStates>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).getStates(deviceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {DeviceBoardDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveSchema(body: DeviceBoardDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).saveSchema(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {string} language 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSDK(deviceId: string, language: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SDKModel>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).sendSDK(deviceId, language, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SimulateDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async simulate(body: SimulateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SimulateModel>>> {
            const localVarAxiosArgs = await BoardApiAxiosParamCreator(configuration).simulate(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BoardApi - factory interface
 * @export
 */
export const BoardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateCode(deviceId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return BoardApiFp(configuration).generateCode(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompares(options?: AxiosRequestConfig): Promise<AxiosResponse<GetCompares>> {
            return BoardApiFp(configuration).getCompares(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOperations(options?: AxiosRequestConfig): Promise<AxiosResponse<GetOperations>> {
            return BoardApiFp(configuration).getOperations(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputs(deviceId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetOutputs>> {
            return BoardApiFp(configuration).getOutputs(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchema(deviceId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DeviceBoardDto>> {
            return BoardApiFp(configuration).getSchema(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {string} simulateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSimulate(deviceId: string, simulateId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetSimulate>> {
            return BoardApiFp(configuration).getSimulate(deviceId, simulateId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStates(deviceId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetStates>> {
            return BoardApiFp(configuration).getStates(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DeviceBoardDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveSchema(body: DeviceBoardDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return BoardApiFp(configuration).saveSchema(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} deviceId 
         * @param {string} language 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSDK(deviceId: string, language: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SDKModel>> {
            return BoardApiFp(configuration).sendSDK(deviceId, language, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SimulateDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async simulate(body: SimulateDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SimulateModel>> {
            return BoardApiFp(configuration).simulate(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BoardApi - object-oriented interface
 * @export
 * @class BoardApi
 * @extends {BaseAPI}
 */
export class BoardApi extends BaseAPI {
    /**
     * 
     * @param {string} deviceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async generateCode(deviceId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return BoardApiFp(this.configuration).generateCode(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getCompares(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetCompares>> {
        return BoardApiFp(this.configuration).getCompares(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getOperations(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetOperations>> {
        return BoardApiFp(this.configuration).getOperations(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} deviceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getOutputs(deviceId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetOutputs>> {
        return BoardApiFp(this.configuration).getOutputs(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} deviceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getSchema(deviceId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DeviceBoardDto>> {
        return BoardApiFp(this.configuration).getSchema(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} deviceId 
     * @param {string} simulateId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getSimulate(deviceId: string, simulateId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetSimulate>> {
        return BoardApiFp(this.configuration).getSimulate(deviceId, simulateId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} deviceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async getStates(deviceId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetStates>> {
        return BoardApiFp(this.configuration).getStates(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {DeviceBoardDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async saveSchema(body: DeviceBoardDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return BoardApiFp(this.configuration).saveSchema(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} deviceId 
     * @param {string} language 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async sendSDK(deviceId: string, language: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<SDKModel>> {
        return BoardApiFp(this.configuration).sendSDK(deviceId, language, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {SimulateDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardApi
     */
    public async simulate(body: SimulateDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<SimulateModel>> {
        return BoardApiFp(this.configuration).simulate(body, options).then((request) => request(this.axios, this.basePath));
    }
}
