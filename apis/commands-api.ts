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
import { CommandDto } from '../models';
import { CommandModel } from '../models';
import { GetCommandsList } from '../models';
import { UpdateCommandDto } from '../models';
/**
 * CommandsApi - axios parameter creator
 * @export
 */
export const CommandsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CommandDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCommand: async (body: CommandDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addCommand.');
            }
            const localVarPath = `/command`;
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
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCommand: async (commandId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commandId' is not null or undefined
            if (commandId === null || commandId === undefined) {
                throw new RequiredError('commandId','Required parameter commandId was null or undefined when calling deleteCommand.');
            }
            const localVarPath = `/command/{commandId}`
                .replace(`{${"commandId"}}`, encodeURIComponent(String(commandId)));
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
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommand: async (commandId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commandId' is not null or undefined
            if (commandId === null || commandId === undefined) {
                throw new RequiredError('commandId','Required parameter commandId was null or undefined when calling getCommand.');
            }
            const localVarPath = `/command/{commandId}`
                .replace(`{${"commandId"}}`, encodeURIComponent(String(commandId)));
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
        getCommandsList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/command/list`;
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
         * @param {UpdateCommandDto} body 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCommand: async (body: UpdateCommandDto, commandId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateCommand.');
            }
            // verify required parameter 'commandId' is not null or undefined
            if (commandId === null || commandId === undefined) {
                throw new RequiredError('commandId','Required parameter commandId was null or undefined when calling updateCommand.');
            }
            const localVarPath = `/command/{commandId}`
                .replace(`{${"commandId"}}`, encodeURIComponent(String(commandId)));
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
    }
};

/**
 * CommandsApi - functional programming interface
 * @export
 */
export const CommandsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CommandDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCommand(body: CommandDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CommandModel>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).addCommand(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCommand(commandId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).deleteCommand(commandId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommand(commandId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CommandModel>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).getCommand(commandId, options);
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
        async getCommandsList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetCommandsList>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).getCommandsList(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateCommandDto} body 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCommand(body: UpdateCommandDto, commandId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CommandModel>>> {
            const localVarAxiosArgs = await CommandsApiAxiosParamCreator(configuration).updateCommand(body, commandId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CommandsApi - factory interface
 * @export
 */
export const CommandsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CommandDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCommand(body: CommandDto, options?: AxiosRequestConfig): Promise<AxiosResponse<CommandModel>> {
            return CommandsApiFp(configuration).addCommand(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCommand(commandId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CommandsApiFp(configuration).deleteCommand(commandId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommand(commandId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CommandModel>> {
            return CommandsApiFp(configuration).getCommand(commandId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommandsList(options?: AxiosRequestConfig): Promise<AxiosResponse<GetCommandsList>> {
            return CommandsApiFp(configuration).getCommandsList(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateCommandDto} body 
         * @param {string} commandId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCommand(body: UpdateCommandDto, commandId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CommandModel>> {
            return CommandsApiFp(configuration).updateCommand(body, commandId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommandsApi - object-oriented interface
 * @export
 * @class CommandsApi
 * @extends {BaseAPI}
 */
export class CommandsApi extends BaseAPI {
    /**
     * 
     * @param {CommandDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async addCommand(body: CommandDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<CommandModel>> {
        return CommandsApiFp(this.configuration).addCommand(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} commandId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async deleteCommand(commandId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CommandsApiFp(this.configuration).deleteCommand(commandId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} commandId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async getCommand(commandId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CommandModel>> {
        return CommandsApiFp(this.configuration).getCommand(commandId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async getCommandsList(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetCommandsList>> {
        return CommandsApiFp(this.configuration).getCommandsList(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateCommandDto} body 
     * @param {string} commandId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandsApi
     */
    public async updateCommand(body: UpdateCommandDto, commandId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CommandModel>> {
        return CommandsApiFp(this.configuration).updateCommand(body, commandId, options).then((request) => request(this.axios, this.basePath));
    }
}
