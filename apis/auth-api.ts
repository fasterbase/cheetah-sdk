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
import { ApiKeyModel } from '../models';
import { ChangePasswordDto } from '../models';
import { LoginDto } from '../models';
import { LoginModel } from '../models';
import { ProfileDto } from '../models';
import { ResetPasswordDto } from '../models';
import { SignupDto } from '../models';
import { UserProfileModel } from '../models';
import { WaitListDto } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {WaitListDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addInWaitList: async (body: WaitListDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addInWaitList.');
            }
            const localVarPath = `/auth/wait-list`;
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
         * @param {ChangePasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword: async (body: ChangePasswordDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling changePassword.');
            }
            const localVarPath = `/auth/change-password`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateNewApiKey: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/setting/apikey`;
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
        getUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/profile`;
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
         * @param {LoginDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (body: LoginDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling login.');
            }
            const localVarPath = `/auth/login`;
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
         * @param {ResetPasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPassword: async (body: ResetPasswordDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling resetPassword.');
            }
            const localVarPath = `/auth/reset-password`;
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
         * @param {SignupDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signup: async (body: SignupDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling signup.');
            }
            const localVarPath = `/auth/signup`;
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
         * @param {ProfileDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (body: ProfileDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateUser.');
            }
            const localVarPath = `/auth/profile`;
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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {WaitListDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addInWaitList(body: WaitListDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).addInWaitList(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ChangePasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changePassword(body: ChangePasswordDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).changePassword(body, options);
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
        async generateNewApiKey(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ApiKeyModel>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).generateNewApiKey(options);
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
        async getUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserProfileModel>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).getUser(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {LoginDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(body: LoginDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LoginModel>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).login(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ResetPasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetPassword(body: ResetPasswordDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).resetPassword(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SignupDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signup(body: SignupDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AcceptDto>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).signup(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ProfileDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(body: ProfileDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).updateUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {WaitListDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addInWaitList(body: WaitListDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AuthApiFp(configuration).addInWaitList(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ChangePasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changePassword(body: ChangePasswordDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return AuthApiFp(configuration).changePassword(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateNewApiKey(options?: AxiosRequestConfig): Promise<AxiosResponse<ApiKeyModel>> {
            return AuthApiFp(configuration).generateNewApiKey(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(options?: AxiosRequestConfig): Promise<AxiosResponse<UserProfileModel>> {
            return AuthApiFp(configuration).getUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LoginDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(body: LoginDto, options?: AxiosRequestConfig): Promise<AxiosResponse<LoginModel>> {
            return AuthApiFp(configuration).login(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ResetPasswordDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetPassword(body: ResetPasswordDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return AuthApiFp(configuration).resetPassword(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignupDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signup(body: SignupDto, options?: AxiosRequestConfig): Promise<AxiosResponse<AcceptDto>> {
            return AuthApiFp(configuration).signup(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ProfileDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(body: ProfileDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return AuthApiFp(configuration).updateUser(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {WaitListDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async addInWaitList(body: WaitListDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AuthApiFp(this.configuration).addInWaitList(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ChangePasswordDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async changePassword(body: ChangePasswordDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return AuthApiFp(this.configuration).changePassword(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async generateNewApiKey(options?: AxiosRequestConfig) : Promise<AxiosResponse<ApiKeyModel>> {
        return AuthApiFp(this.configuration).generateNewApiKey(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async getUser(options?: AxiosRequestConfig) : Promise<AxiosResponse<UserProfileModel>> {
        return AuthApiFp(this.configuration).getUser(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {LoginDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async login(body: LoginDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<LoginModel>> {
        return AuthApiFp(this.configuration).login(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ResetPasswordDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async resetPassword(body: ResetPasswordDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return AuthApiFp(this.configuration).resetPassword(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {SignupDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async signup(body: SignupDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<AcceptDto>> {
        return AuthApiFp(this.configuration).signup(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ProfileDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async updateUser(body: ProfileDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return AuthApiFp(this.configuration).updateUser(body, options).then((request) => request(this.axios, this.basePath));
    }
}
