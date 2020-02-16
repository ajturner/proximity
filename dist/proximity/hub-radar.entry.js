import { r as registerInstance, h } from './core-fb92fa04.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Checks parameters to see if we should use FormData to send the request
 * @param params The object whose keys will be encoded.
 * @return A boolean indicating if FormData will be required.
 */
function requiresFormData(params) {
    return Object.keys(params).some(function (key) {
        var value = params[key];
        if (!value) {
            return false;
        }
        if (value && value.toParam) {
            value = value.toParam();
        }
        var type = value.constructor.name;
        switch (type) {
            case "Array":
                return false;
            case "Object":
                return false;
            case "Date":
                return false;
            case "Function":
                return false;
            case "Boolean":
                return false;
            case "String":
                return false;
            case "Number":
                return false;
            default:
                return true;
        }
    });
}
/**
 * Converts parameters to the proper representation to send to the ArcGIS REST API.
 * @param params The object whose keys will be encoded.
 * @return A new object with properly encoded values.
 */
function processParams(params) {
    var newParams = {};
    Object.keys(params).forEach(function (key) {
        var param = params[key];
        if (param && param.toParam) {
            param = param.toParam();
        }
        if (!param &&
            param !== 0 &&
            typeof param !== "boolean" &&
            typeof param !== "string") {
            return;
        }
        var type = param.constructor.name;
        var value;
        // properly encodes objects, arrays and dates for arcgis.com and other services.
        // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
        // also see https://github.com/Esri/arcgis-rest-js/issues/18:
        // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
        switch (type) {
            case "Array":
                // Based on the first element of the array, classify array as an array of objects to be stringified
                // or an array of non-objects to be comma-separated
                value =
                    param[0] &&
                        param[0].constructor &&
                        param[0].constructor.name === "Object"
                        ? JSON.stringify(param)
                        : param.join(",");
                break;
            case "Object":
                value = JSON.stringify(param);
                break;
            case "Date":
                value = param.valueOf();
                break;
            case "Function":
                value = null;
                break;
            case "Boolean":
                value = param + "";
                break;
            default:
                value = param;
                break;
        }
        if (value || value === 0 || typeof value === "string") {
            newParams[key] = value;
        }
    });
    return newParams;
}
//# sourceMappingURL=process-params.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function encodeParam(key, value) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
}
/**
 * Encodes the passed object as a query string.
 *
 * @param params An object to be encoded.
 * @returns An encoded query string.
 */
function encodeQueryString(params) {
    var newParams = processParams(params);
    return Object.keys(newParams)
        .map(function (key) {
        return encodeParam(key, newParams[key]);
    })
        .join("&");
}
//# sourceMappingURL=encode-query-string.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
 *
 * @param params An object to be encoded.
 * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
 */
function encodeFormData(params, forceFormData) {
    // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
    var useFormData = requiresFormData(params) || forceFormData;
    var newParams = processParams(params);
    if (useFormData) {
        var formData_1 = new FormData();
        Object.keys(newParams).forEach(function (key) {
            if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                /* To name the Blob:
                 1. look to an alternate request parameter called 'fileName'
                 2. see if 'name' has been tacked onto the Blob manually
                 3. if all else fails, use the request parameter
                */
                var filename = newParams["fileName"] || newParams[key].name || key;
                formData_1.append(key, newParams[key], filename);
            }
            else {
                formData_1.append(key, newParams[key]);
            }
        });
        return formData_1;
    }
    else {
        return encodeQueryString(params);
    }
}
//# sourceMappingURL=encode-form-data.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
// and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
//
// This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
var ArcGISRequestError = /** @class */ (function () {
    /**
     * Create a new `ArcGISRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */
    function ArcGISRequestError(message, code, response, url, options) {
        message = message || "UNKNOWN_ERROR";
        code = code || "UNKNOWN_ERROR_CODE";
        this.name = "ArcGISRequestError";
        this.message =
            code === "UNKNOWN_ERROR_CODE" ? message : code + ": " + message;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
    return ArcGISRequestError;
}());
ArcGISRequestError.prototype = Object.create(Error.prototype);
ArcGISRequestError.prototype.constructor = ArcGISRequestError;
//# sourceMappingURL=ArcGISRequestError.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Method used internally to surface messages to developers.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn.apply(console, [message]);
    }
}
//# sourceMappingURL=warn.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var NODEJS_DEFAULT_REFERER_HEADER = "@esri/arcgis-rest-js";
var DEFAULT_ARCGIS_REQUEST_OPTIONS = {
    httpMethod: "POST",
    params: {
        f: "json"
    }
};
/**
 * Sets the default options that will be passed in **all requests across all `@esri/arcgis-rest-js` modules**.
 *
 *
 * ```js
 * import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
 * setDefaultRequestOptions({
 *   authentication: userSession // all requests will use this session by default
 * })
 * ```
 * You should **never** set a default `authentication` when you are in a server side environment where you may be handling requests for many different authenticated users.
 *
 * @param options The default options to pass with every request. Existing default will be overwritten.
 * @param hideWarnings Silence warnings about setting default `authentication` in shared environments.
 */
function setDefaultRequestOptions(options, hideWarnings) {
    if (options.authentication && !hideWarnings) {
        warn("You should not set `authentication` as a default in a shared environment such as a web server which will process multiple users requests. You can call `setDefaultRequestOptions` with `true` as a second argument to disable this warning.");
    }
    DEFAULT_ARCGIS_REQUEST_OPTIONS = options;
}
var ArcGISAuthError = /** @class */ (function (_super) {
    __extends(ArcGISAuthError, _super);
    /**
     * Create a new `ArcGISAuthError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options of the request
     */
    function ArcGISAuthError(message, code, response, url, options) {
        if (message === void 0) { message = "AUTHENTICATION_ERROR"; }
        if (code === void 0) { code = "AUTHENTICATION_ERROR_CODE"; }
        var _this = _super.call(this, message, code, response, url, options) || this;
        _this.name = "ArcGISAuthError";
        _this.message =
            code === "AUTHENTICATION_ERROR_CODE" ? message : code + ": " + message;
        return _this;
    }
    ArcGISAuthError.prototype.retry = function (getSession, retryLimit) {
        var _this = this;
        if (retryLimit === void 0) { retryLimit = 3; }
        var tries = 0;
        var retryRequest = function (resolve, reject) {
            getSession(_this.url, _this.options)
                .then(function (session) {
                var newOptions = __assign({}, _this.options, { authentication: session });
                tries = tries + 1;
                return request(_this.url, newOptions);
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (e) {
                if (e.name === "ArcGISAuthError" && tries < retryLimit) {
                    retryRequest(resolve, reject);
                }
                else if (e.name === "ArcGISAuthError" && tries >= retryLimit) {
                    reject(_this);
                }
                else {
                    reject(e);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retryRequest(resolve, reject);
        });
    };
    return ArcGISAuthError;
}(ArcGISRequestError));
/**
 * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
 *
 * @param data The response JSON to check for errors.
 * @param url The url of the original request
 * @param params The parameters of the original request
 * @param options The options of the original request
 * @returns The data that was passed in the `data` parameter
 */
function checkForErrors(response, url, params, options, originalAuthError) {
    // this is an error message from billing.arcgis.com backend
    if (response.code >= 400) {
        var message = response.message, code = response.code;
        throw new ArcGISRequestError(message, code, response, url, options);
    }
    // error from ArcGIS Online or an ArcGIS Portal or server instance.
    if (response.error) {
        var _a = response.error, message = _a.message, code = _a.code, messageCode = _a.messageCode;
        var errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
        if (code === 498 ||
            code === 499 ||
            messageCode === "GWM_0003" ||
            (code === 400 && message === "Unable to generate token.")) {
            if (originalAuthError) {
                throw originalAuthError;
            }
            else {
                throw new ArcGISAuthError(message, errorCode, response, url, options);
            }
        }
        throw new ArcGISRequestError(message, errorCode, response, url, options);
    }
    // error from a status check
    if (response.status === "failed" || response.status === "failure") {
        var message = void 0;
        var code = "UNKNOWN_ERROR_CODE";
        try {
            message = JSON.parse(response.statusMessage).message;
            code = JSON.parse(response.statusMessage).code;
        }
        catch (e) {
            message = response.statusMessage || response.message;
        }
        throw new ArcGISRequestError(message, code, response, url, options);
    }
    return response;
}
/**
 * ```js
 * import { request } from '@esri/arcgis-rest-request';
 * //
 * request('https://www.arcgis.com/sharing/rest')
 *   .then(response) // response.currentVersion === 5.2
 * //
 * request('https://www.arcgis.com/sharing/rest', {
 *   httpMethod: "GET"
 * })
 * //
 * request('https://www.arcgis.com/sharing/rest/search', {
 *   params: { q: 'parks' }
 * })
 *   .then(response) // response.total => 78379
 * ```
 * Generic method for making HTTP requests to ArcGIS REST API endpoints.
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function request(url, requestOptions) {
    if (requestOptions === void 0) { requestOptions = { params: { f: "json" } }; }
    var options = __assign({ httpMethod: "POST" }, DEFAULT_ARCGIS_REQUEST_OPTIONS, requestOptions, {
        params: __assign({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.params, requestOptions.params),
        headers: __assign({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.headers, requestOptions.headers)
    });
    var missingGlobals = [];
    var recommendedPackages = [];
    // don't check for a global fetch if a custom implementation was passed through
    if (!options.fetch && typeof fetch !== "undefined") {
        options.fetch = fetch.bind(Function("return this")());
    }
    else {
        missingGlobals.push("`fetch`");
        recommendedPackages.push("`node-fetch`");
    }
    if (typeof Promise === "undefined") {
        missingGlobals.push("`Promise`");
        recommendedPackages.push("`es6-promise`");
    }
    if (typeof FormData === "undefined") {
        missingGlobals.push("`FormData`");
        recommendedPackages.push("`isomorphic-form-data`");
    }
    if (!options.fetch ||
        typeof Promise === "undefined" ||
        typeof FormData === "undefined") {
        throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing " + missingGlobals.join(", ") + ". We recommend installing the " + recommendedPackages.join(", ") + " modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");
    }
    var httpMethod = options.httpMethod, authentication = options.authentication, rawResponse = options.rawResponse;
    var params = __assign({ f: "json" }, options.params);
    var originalAuthError = null;
    var fetchOptions = {
        method: httpMethod,
        /* ensures behavior mimics XMLHttpRequest.
        needed to support sending IWA cookies */
        credentials: "same-origin"
    };
    return (authentication
        ? authentication.getToken(url, { fetch: options.fetch }).catch(function (err) {
            /**
             * append original request url and requestOptions
             * to the error thrown by getToken()
             * to assist with retrying
             */
            err.url = url;
            err.options = options;
            /**
             * if an attempt is made to talk to an unfederated server
             * first try the request anonymously. if a 'token required'
             * error is thrown, throw the UNFEDERATED error then.
             */
            originalAuthError = err;
            return Promise.resolve("");
        })
        : Promise.resolve(""))
        .then(function (token) {
        if (token.length) {
            params.token = token;
        }
        if (fetchOptions.method === "GET") {
            // encode the parameters into the query string
            var queryParams = encodeQueryString(params);
            // dont append a '?' unless parameters are actually present
            var urlWithQueryString = queryParams === "" ? url : url + "?" + encodeQueryString(params);
            if (options.maxUrlLength &&
                urlWithQueryString.length > options.maxUrlLength) {
                // the consumer specified a maximum length for URLs
                // and this would exceed it, so use post instead
                fetchOptions.method = "POST";
            }
            else {
                // just use GET
                url = urlWithQueryString;
            }
        }
        /* updateResources currently requires FormData even when the input parameters dont warrant it.
    https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
        see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */
        var forceFormData = new RegExp("/items/.+/updateResources").test(url);
        if (fetchOptions.method === "POST") {
            fetchOptions.body = encodeFormData(params, forceFormData);
        }
        // Mixin headers from request options
        fetchOptions.headers = __assign({}, options.headers);
        /* istanbul ignore next - karma reports coverage on browser tests only */
        if (typeof window === "undefined" && !fetchOptions.headers.referer) {
            fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
        }
        /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */
        if (!requiresFormData(params) && !forceFormData) {
            fetchOptions.headers["Content-Type"] =
                "application/x-www-form-urlencoded";
        }
        return options.fetch(url, fetchOptions);
    })
        .then(function (response) {
        if (!response.ok) {
            // server responded w/ an actual error (404, 500, etc)
            var status_1 = response.status, statusText = response.statusText;
            throw new ArcGISRequestError(statusText, "HTTP " + status_1, response, url, options);
        }
        if (rawResponse) {
            return response;
        }
        switch (params.f) {
            case "json":
                return response.json();
            case "geojson":
                return response.json();
            case "html":
                return response.text();
            case "text":
                return response.text();
            /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */
            default:
                return response.blob();
        }
    })
        .then(function (data) {
        if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
            var response = checkForErrors(data, url, params, options, originalAuthError);
            if (originalAuthError) {
                /* if the request was made to an unfederated service that
                didnt require authentication, add the base url and a dummy token
                to the list of trusted servers to avoid another federation check
                in the event of a repeat request */
                var truncatedUrl = url
                    .toLowerCase()
                    .split(/\/rest(\/admin)?\/services\//)[0];
                options.authentication.trustedServers[truncatedUrl] = {
                    token: [],
                    // default to 24 hours
                    expires: new Date(Date.now() + 86400 * 1000)
                };
                originalAuthError = null;
            }
            return response;
        }
        else {
            return data;
        }
    });
}
//# sourceMappingURL=request.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper for methods with lots of first order request options to pass through as request parameters.
 */
function appendCustomParams(customOptions, keys, baseOptions) {
    var requestOptionsKeys = [
        "params",
        "httpMethod",
        "rawResponse",
        "authentication",
        "portal",
        "fetch",
        "maxUrlLength",
        "headers"
    ];
    var options = __assign({ params: {} }, baseOptions, customOptions);
    // merge all keys in customOptions into options.params
    options.params = keys.reduce(function (value, key) {
        if (customOptions[key] || typeof customOptions[key] === "boolean") {
            value[key] = customOptions[key];
        }
        return value;
    }, options.params);
    // now remove all properties in options that don't exist in IRequestOptions
    return requestOptionsKeys.reduce(function (value, key) {
        if (options[key]) {
            value[key] = options[key];
        }
        return value;
    }, {});
}
//# sourceMappingURL=append-custom-params.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
 */
function cleanUrl(url) {
    // trim leading and trailing spaces, but not spaces inside the url
    url = url.trim();
    // remove the trailing slash to the url if one was included
    if (url[url.length - 1] === "/") {
        url = url.slice(0, -1);
    }
    return url;
}
//# sourceMappingURL=clean-url.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Enum describing the different errors that might be thrown by a request.
 *
 * ```ts
 * import { request, ErrorTypes } from '@esri/arcgis-rest-request';
 *
 * request("...").catch((e) => {
 *   switch(e.name) {
 *     case ErrorType.ArcGISRequestError:
 *     // handle a general error from the API
 *     break;
 *
 *     case ErrorType.ArcGISAuthError:
 *     // handle an authentication error
 *     break;
 *
 *     default:
 *     // handle some other error (usually a network error)
 *   }
 * });
 * ```
 */
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["ArcGISRequestError"] = "ArcGISRequestError";
    ErrorTypes["ArcGISAuthError"] = "ArcGISAuthError";
})(ErrorTypes || (ErrorTypes = {}));
//# sourceMappingURL=ErrorTypes.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
//# sourceMappingURL=index.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getFeature } from '@esri/arcgis-rest-feature-layer';
 * //
 * const url = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0";
 * //
 * getFeature({
 *   url,
 *   id: 42
 * }).then(feature => {
 *  console.log(feature.attributes.FID); // 42
 * });
 * ```
 * Get a feature by id.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the feature or the [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) itself if `rawResponse: true` was passed in.
 */
function getFeature(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/" + requestOptions.id;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options).then(function (response) {
        if (options.rawResponse) {
            return response;
        }
        return response.feature;
    });
}
/**
 * ```js
 * import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * queryFeatures({
 *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
 *   where: "STATE_NAME = 'Alaska'"
 * })
 *   .then(result)
 * ```
 * Query a feature service. See [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the query response.
 */
function queryFeatures(requestOptions) {
    var queryOptions = appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "relationParam",
        "time",
        "distance",
        "units",
        "outFields",
        "geometry",
        "geometryType",
        "spatialRel",
        "returnGeometry",
        "maxAllowableOffset",
        "geometryPrecision",
        "inSR",
        "outSR",
        "gdbVersion",
        "returnDistinctValues",
        "returnIdsOnly",
        "returnCountOnly",
        "returnExtentOnly",
        "orderByFields",
        "groupByFieldsForStatistics",
        "outStatistics",
        "returnZ",
        "returnM",
        "multipatchOption",
        "resultOffset",
        "resultRecordCount",
        "quantizationParameters",
        "returnCentroid",
        "resultType",
        "historicMoment",
        "returnTrueCurves",
        "sqlFormat",
        "returnExceededLimitFeatures",
        "f"
    ], {
        httpMethod: "GET",
        params: __assign({ 
            // set default query parameters
            where: "1=1", outFields: "*" }, requestOptions.params)
    });
    return request(cleanUrl(requestOptions.url) + "/query", queryOptions);
}
//# sourceMappingURL=query.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function addFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = appendCustomParams(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
//# sourceMappingURL=add.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 *
 * ```js
 * import { updateFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * updateFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * });
 * ```
 * Update features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/update-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the updateFeatures response.
 */
function updateFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/updateFeatures";
    // edit operations are POST only
    var options = appendCustomParams(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
//# sourceMappingURL=update.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   objectIds: [1,2,3]
 * });
 * ```
 * Delete features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/delete-features.htm) for more information.
 *
 * @param deleteFeaturesRequestOptions - Options for the request.
 * @returns A Promise that will resolve with the deleteFeatures response.
 */
function deleteFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/deleteFeatures";
    // edit operations POST only
    var options = appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
//# sourceMappingURL=delete.js.map

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { applyEdits } from '@esri/arcgis-rest-feature-layer';
 * //
 * applyEdits({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   adds: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }],
 *   updates: [{
 *     attributes: { OBJECTID: 1004, status: "alive" }
 *   }],
 *   deletes: [862, 1548]
 * })
 *   .then(response)
 * ```
 * Apply edits request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/apply-edits-feature-service-layer-.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the applyEdits response.
 */
function applyEdits(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/applyEdits";
    // edit operations are POST only
    var options = appendCustomParams(requestOptions, [
        "adds",
        "updates",
        "deletes",
        "useGlobalIds",
        "attachments",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
//# sourceMappingURL=applyEdits.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getAttachments } from '@esri/arcgis-rest-feature-layer';
 * //
 * getAttachments({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484
 * });
 * ```
 * Request `attachmentInfos` of a feature by id. See [Attachment Infos](https://developers.arcgis.com/rest/services-reference/attachment-infos-feature-service-.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `getAttachments()` response.
 */
function getAttachments(requestOptions) {
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    // pass through
    return request(cleanUrl(options.url) + "/" + options.featureId + "/attachments", options);
}
//# sourceMappingURL=getAttachments.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addAttachment } from '@esri/arcgis-rest-feature-layer';
 * //
 * addAttachment({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachment: myFileInput.files[0]
 * })
 *   .then(response)
 * ```
 * Attach a file to a feature by id. See [Add Attachment](https://developers.arcgis.com/rest/services-reference/add-attachment.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `addAttachment()` response.
 */
function addAttachment(requestOptions) {
    var options = __assign({ params: {} }, requestOptions);
    // `attachment` --> params: {}
    options.params.attachment = requestOptions.attachment;
    return request(cleanUrl(options.url) + "/" + options.featureId + "/addAttachment", options);
}
//# sourceMappingURL=addAttachment.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 *
 * ```js
 * import { updateAttachment } from '@esri/arcgis-rest-feature-layer';
 * //
 * updateAttachment({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachment: myFileInput.files[0],
 *   attachmentId: 306
 * });
 * ```
 * Update a related attachment to a feature by id. See [Update Attachment](https://developers.arcgis.com/rest/services-reference/update-attachment.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `updateAttachment()` response.
 */
function updateAttachment(requestOptions) {
    var options = __assign({ params: {} }, requestOptions);
    // `attachment` and `attachmentId` --> params: {}
    options.params.attachment = requestOptions.attachment;
    options.params.attachmentId = requestOptions.attachmentId;
    return request(cleanUrl(options.url) + "/" + options.featureId + "/updateAttachment", options);
}
//# sourceMappingURL=updateAttachment.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteAttachments } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteAttachments({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachmentIds: [306]
 * });
 * ```
 * Delete existing attachment files of a feature by id. See [Delete Attachments](https://developers.arcgis.com/rest/services-reference/delete-attachments.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `deleteAttachments()` response.
 */
function deleteAttachments(requestOptions) {
    var options = __assign({ params: {} }, requestOptions);
    // `attachmentIds` --> params: {}
    options.params.attachmentIds = requestOptions.attachmentIds;
    return request(cleanUrl(options.url) + "/" + options.featureId + "/deleteAttachments", options);
}
//# sourceMappingURL=deleteAttachments.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 *
 * ```js
 * import { queryRelated } from '@esri/arcgis-rest-feature-layer'
 * //
 * queryRelated({
 *  url: "http://services.myserver/OrgID/ArcGIS/rest/services/Petroleum/KSPetro/FeatureServer/0",
 *  relationshipId: 1,
 *  params: { returnCountOnly: true }
 * })
 *  .then(response) // response.relatedRecords
 * ```
 * Query the related records for a feature service. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-related-records-feature-service-.htm) for more information.
 *
 * @param requestOptions
 * @returns A Promise that will resolve with the query response
 */
function queryRelated(requestOptions) {
    var options = appendCustomParams(requestOptions, ["objectIds", "relationshipId", "definitionExpression", "outFields"], {
        httpMethod: "GET",
        params: __assign({ 
            // set default query parameters
            definitionExpression: "1=1", outFields: "*", relationshipId: 0 }, requestOptions.params)
    });
    return request(cleanUrl(requestOptions.url) + "/queryRelatedRecords", options);
}
//# sourceMappingURL=queryRelated.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getLayer } from '@esri/arcgis-rest-feature-layer';
 * //
 * getLayer({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0"
 * })
 *   .then(response) // { name: "311", id: 0, ... }
 * ```
 * Layer (Feature Service) request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm) for more information.
 *
 * @param options - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function getLayer(options) {
    return request(cleanUrl(options.url), options);
}
//# sourceMappingURL=getLayer.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getService } from '@esri/arcgis-rest-feature-layer';
 * //
 * getService({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer"
 * })
 *   .then(response) // { name: "311", id: 0, ... }
 * ```
 * Feature Service request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/feature-service.htm) for more information.
 *
 * @param options - Options for the request.
 * @returns A Promise that will resolve with the getService response.
 */
function getService(options) {
    return request(cleanUrl(options.url), options);
}
//# sourceMappingURL=getService.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { queryFeatures, decodeValues } from '@esri/arcgis-rest-feature-layer';
 * //
 * const url = `https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0`
 * queryFeatures({ url })
 *   .then(queryResponse => {
 *     decodeValues({
 *       url,
 *       queryResponse
 *     })
 *       .then(decodedResponse)
 *   })
 * ```
 * Replaces the raw coded domain values in a query response with descriptions (for legibility).
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function decodeValues(requestOptions) {
    return new Promise(function (resolve) {
        if (!requestOptions.fields) {
            return getLayer({ url: requestOptions.url }).then(function (metadata) {
                resolve((requestOptions.fields = metadata.fields));
            });
        }
        else {
            resolve(requestOptions.fields);
        }
    }).then(function (fields) {
        // extract coded value domains
        var domains = extractCodedValueDomains(fields);
        if (Object.keys(domains).length < 1) {
            // no values to decode
            return requestOptions.queryResponse;
        }
        // don't mutate original features
        var decodedFeatures = requestOptions.queryResponse.features.map(function (feature) {
            var decodedAttributes = {};
            for (var key in feature.attributes) {
                /* istanbul ignore next */
                if (!feature.attributes.hasOwnProperty(key))
                    continue;
                var value = feature.attributes[key];
                var domain = domains[key];
                decodedAttributes[key] =
                    value !== null && domain ? decodeValue(value, domain) : value;
            }
            // merge decoded attributes into the feature
            return __assign({}, feature, { attributes: decodedAttributes });
        });
        // merge decoded features into the response
        return __assign({}, requestOptions.queryResponse, { features: decodedFeatures });
    });
}
function extractCodedValueDomains(fields) {
    return fields.reduce(function (domains, field) {
        var domain = field.domain;
        if (domain && domain.type === "codedValue") {
            domains[field.name] = domain;
        }
        return domains;
    }, {});
}
// TODO: add type for domain?
function decodeValue(value, domain) {
    var codedValue = domain.codedValues.find(function (d) {
        return value === d.code;
    });
    return codedValue ? codedValue.name : value;
}
//# sourceMappingURL=decodeValues.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
//# sourceMappingURL=index.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper that returns the appropriate portal url for a given request. `requestOptions.portal` is given
 * precedence over `authentication.portal`. If neither are present, `www.arcgis.com/sharing/rest` is returned.
 *
 * @param requestOptions - Request options that may have authentication manager
 * @returns Portal url to be used in API requests
 */
function getPortalUrl(requestOptions) {
    if (requestOptions === void 0) { requestOptions = {}; }
    // use portal in options if specified
    if (requestOptions.portal) {
        return cleanUrl(requestOptions.portal);
    }
    // if auth was passed, use that portal
    if (requestOptions.authentication) {
        // the portal url is already scrubbed in the auth package
        return requestOptions.authentication.portal;
    }
    // default to arcgis.com
    return "https://www.arcgis.com/sharing/rest";
}
//# sourceMappingURL=get-portal-url.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Serialize an item and its data into a json format accepted by the Portal API for create and update operations
 *
 * @param item Item to be serialized
 * @returns a formatted json object to be sent to Portal
 */
function serializeItem(item) {
    // create a clone so we're not messing with the original
    var clone = JSON.parse(JSON.stringify(item));
    // binary data needs POSTed as a `file`
    // JSON object literals should be passed as `text`.
    if (clone.data) {
        (typeof Blob !== "undefined" && item.data instanceof Blob) ||
            // Node.js doesn't implement Blob
            item.data.constructor.name === "ReadStream"
            ? (clone.file = item.data)
            : (clone.text = item.data);
        delete clone.data;
    }
    return clone;
}
/**
 * requestOptions.owner is given priority, requestOptions.item.owner will be checked next. If neither are present, authentication.username will be assumed.
 */
function determineOwner(requestOptions) {
    if (requestOptions.owner) {
        return requestOptions.owner;
    }
    if (requestOptions.item && requestOptions.item.owner) {
        return requestOptions.item.owner;
    }
    else {
        return requestOptions.authentication.username;
    }
}
//# sourceMappingURL=helpers.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { updateItem } from "@esri/arcgis-rest-portal";
 * //
 * updateItem({
 *   item: {
 *     id: "3ef",
 *     description: "A three hour tour"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 * Update an Item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
 *
 * @param item - The item to update.
 * @param requestOptions - Options for the request.
 * @returns A Promise that updates an item.
 */
function updateItem(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.item.id + "/update";
    // serialize the item into something Portal will accept
    requestOptions.params = __assign({}, requestOptions.params, serializeItem(requestOptions.item));
    return request(url, requestOptions);
}
/**
 * ```js
 * import { updateItemResource } from "@esri/arcgis-rest-portal";
 * //
 * updateItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Update a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that updates an item resource.
 */
function updateItemResource(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/updateResources";
    // mix in user supplied params
    requestOptions.params = __assign({ file: requestOptions.resource, fileName: requestOptions.name, text: requestOptions.content }, requestOptions.params);
    // only override the access specified previously if 'private' is passed explicitly
    if (typeof requestOptions.private !== "undefined") {
        requestOptions.params.access = requestOptions.private
            ? "private"
            : "inherit";
    }
    return request(url, requestOptions);
}
/**
 * ```js
 * import { moveItem } from "@esri/arcgis-rest-portal";
 * //
 * moveItem({
 *   itemId: "3ef",
 *   folderId: "7c5",
 *   authentication: userSession
 * })
 * ```
 * Move an item to a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/move-item.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that resolves with owner and folder details once the move has been completed
 */
function moveItem(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.itemId + "/move";
    var folderId = requestOptions.folderId;
    if (!folderId) {
        folderId = "/";
    }
    requestOptions.params = __assign({ folder: folderId }, requestOptions.params);
    return request(url, requestOptions);
}
//# sourceMappingURL=update.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addItemData } from "@esri/arcgis-rest-portal";
 * //
 * addItemData({
 *   id: '3ef',
 *   data: file,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Send a file or blob to an item to be stored as the `/data` resource. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with an object reporting
 *        success/failure and echoing the item id.
 */
function addItemData(requestOptions) {
    var owner = determineOwner(requestOptions);
    var options = __assign({ item: {
            id: requestOptions.id,
            data: requestOptions.data
        } }, requestOptions);
    delete options.id;
    delete options.data;
    return updateItem(options);
}
/**
 * ```js
 * import { addItemRelationship } from "@esri/arcgis-rest-portal";
 * //
 * addItemRelationship({
 *   originItemId: '3ef',
 *   destinationItemId: 'ae7',
 *   relationshipType: 'Service2Layer',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Add a relationship between two items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-relationship.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addItemRelationship(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/addRelationship";
    var options = appendCustomParams(requestOptions, ["originItemId", "destinationItemId", "relationshipType"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
/**
 * ```js
 * import { addItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Add a file resource
 * addItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 *
 * // Add a text resource
 * addItemResource({
 *   id: '4fg',
 *   content: "Text content",
 *   name: 'bigkahuna.txt',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addItemResource(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/addResources";
    requestOptions.params = __assign({ file: requestOptions.resource, fileName: requestOptions.name, text: requestOptions.content, access: requestOptions.private ? "private" : "inherit" }, requestOptions.params);
    return request(url, requestOptions);
}
/**
 * ```js
 * import { addItemPart } from "@esri/arcgis-rest-portal";
 * //
 * addItemPart({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   part: data,
 *   partNum: 1,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Inquire about status when publishing an item, adding an item in async mode, or adding with a multipart upload. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item-part.htm) for more information.
 *
 * @param id - The Id of the item to get status for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item status.
 */
function addItemPart(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/addPart";
    var options = appendCustomParams(requestOptions, ["file", "partNum"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
//# sourceMappingURL=add.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { createFolder } from "@esri/arcgis-rest-portal";
 * //
 * createFolder({
 *   title: 'Map Collection',
 *   authentication: userSession
 * })
 *   .then(response)
 * ```
 * Create a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/create-folder.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that resolves with folder details once the folder has been created
 */
function createFolder(requestOptions) {
    var owner = determineOwner(requestOptions);
    var baseUrl = getPortalUrl(requestOptions) + "/content/users/" + owner;
    var url = baseUrl + "/createFolder";
    requestOptions.params = __assign({ title: requestOptions.title }, requestOptions.params);
    return request(url, requestOptions);
}
/**
 * ```js
 * import { createItemInFolder } from "@esri/arcgis-rest-portal";
 * //
 * createItemInFolder({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   folderId: 'fe8',
 *   authentication
 * })
 * ```
 * Create an item in a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * @param requestOptions = Options for the request
 */
function createItemInFolder(requestOptions) {
    if (requestOptions.file && !requestOptions.multipart) {
        return Promise.reject(new Error("The request must be a multipart request for file uploading."));
    }
    if (requestOptions.multipart && !requestOptions.filename) {
        return Promise.reject(new Error("The file name is required for a multipart request."));
    }
    var owner = determineOwner(requestOptions);
    var baseUrl = getPortalUrl(requestOptions) + "/content/users/" + owner;
    var url = baseUrl + "/addItem";
    if (requestOptions.folderId) {
        url = baseUrl + "/" + requestOptions.folderId + "/addItem";
    }
    requestOptions.params = __assign({}, requestOptions.params, serializeItem(requestOptions.item));
    // serialize the item into something Portal will accept
    var options = appendCustomParams(requestOptions, [
        "owner",
        "folderId",
        "file",
        "dataUrl",
        "text",
        "async",
        "multipart",
        "filename",
        "overwrite"
    ], {
        params: __assign({}, requestOptions.params)
    });
    return request(url, options);
}
/**
 * ```js
 * import { createItem } from "@esri/arcgis-rest-portal";
 * //
 * createItem({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   authentication
 * })
 * ```
 * Create an Item in the user's root folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that creates an item.
 */
function createItem(requestOptions) {
    // delegate to createItemInFolder placing in the root of the filestore
    var options = __assign({ folderId: null }, requestOptions);
    return createItemInFolder(options);
}
//# sourceMappingURL=create.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```
 * import { getItem } from "@esri/arcgis-rest-portal";
 * //
 * getItem("ae7")
 *   .then(response);
 * // or
 * getItem("ae7", { authentication })
 *   .then(response)
 * ```
 * Get an item by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item.htm) for more information.
 *
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the data from the response.
 */
function getItem(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/items/" + id;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * ```
 * import { getItemData } from "@esri/arcgis-rest-portal";
 * //
 * getItemData("ae7")
 *   .then(response)
 * // or
 * getItemData("ae7", { authentication })
 *   .then(response)
 * ```
 * Get the /data for an item. If no data exists, returns `undefined`. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-data.htm) for more information.
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the json data for the item.
 */
function getItemData(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/items/" + id + "/data";
    // default to a GET request
    var options = __assign({ httpMethod: "GET", params: {} }, requestOptions);
    if (options.file) {
        options.params.f = null;
    }
    return request(url, options).catch(function (err) {
        /* if the item doesn't include data, the response will be empty
           and the internal call to response.json() will fail */
        var emptyResponseErr = RegExp(/Unexpected end of (JSON input|data at line 1 column 1)/i);
        /* istanbul ignore else */
        if (emptyResponseErr.test(err.message)) {
            return;
        }
        else
            throw err;
    });
}
/**
 * ```
 * import { getRelatedItems } from "@esri/arcgis-rest-portal";
 * //
 * getRelatedItems({
 *   id: "ae7",
 *   relationshipType: "Service2Layer" // or several ["Service2Layer", "Map2Area"]
 * })
 *   .then(response)
 * ```
 * Get the related items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/related-items.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
function getRelatedItems(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/items/" + requestOptions.id + "/relatedItems";
    var options = __assign({ httpMethod: "GET", params: {
            direction: requestOptions.direction
        } }, requestOptions);
    if (typeof requestOptions.relationshipType === "string") {
        options.params.relationshipType = requestOptions.relationshipType;
    }
    else {
        options.params.relationshipTypes = requestOptions.relationshipType;
    }
    delete options.direction;
    delete options.relationshipType;
    return request(url, options);
}
/**
 * Get the resources associated with an item
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
function getItemResources(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/items/" + id + "/resources";
    // mix in user supplied params
    requestOptions.params = __assign({}, requestOptions.params, { num: 1000 });
    return request(url, requestOptions);
}
/**
 * ```js
 * import { getItemGroups } from "@esri/arcgis-rest-portal";
 * //
 * getItemGroups("30e5fe3149c34df1ba922e6f5bbf808f")
 *   .then(response)
 * ```
 * Lists the groups of which the item is a part, only showing the groups that the calling user can access. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/groups.htm) for more information.
 *
 * @param id - The Id of the item to query group association for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item groups.
 */
function getItemGroups(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/items/" + id + "/groups";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { getItemStatus } from "@esri/arcgis-rest-portal";
 * //
 * getItemStatus({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Inquire about status when publishing an item, adding an item in async mode, or adding with a multipart upload. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/status.htm) for more information.
 *
 * @param id - The Id of the item to get status for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item status.
 */
function getItemStatus(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/status";
    var options = appendCustomParams(requestOptions, ["jobId", "jobType"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
/**
 * ```js
 * import { getItemParts } from "@esri/arcgis-rest-portal";
 * //
 * getItemParts({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Lists the part numbers of the file parts that have already been uploaded in a multipart file upload. This method can be used to verify the parts that have been received as well as those parts that were not received by the server. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/parts.htm) for more information.
 *
 * @param id - The Id of the item to get part list.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item part list.
 */
function getItemParts(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/parts";
    return request(url, requestOptions);
}
//# sourceMappingURL=get.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Protect an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/protect.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to protect an item.
 */
function protectItem(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/protect";
    return request(url, requestOptions);
}
/**
 * Unprotect an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to unprotect an item.
 */
function unprotectItem(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/unprotect";
    return request(url, requestOptions);
}
//# sourceMappingURL=protect.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { removeItem } from "@esri/arcgis-rest-portal";
 * //
 * removeItem({
 *   id: "3ef",
 *   authentication
 * })
 * ```
 * Delete an item from the portal. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-item.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes an item.
 */
function removeItem(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/delete";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { removeItemRelationship } from "@esri/arcgis-rest-portal";
 * //
 * removeItemRelationship({
 *   originItemId: '3ef',
 *   destinationItemId: 'ae7',
 *   relationshipType: 'Service2Layer',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Remove a relationship between two items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-relationship.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function removeItemRelationship(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/removeRelationship";
    var options = appendCustomParams(requestOptions, ["originItemId", "destinationItemId", "relationshipType"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}
/**
 * Remove a resource associated with an item
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes an item resource.
 */
function removeItemResource(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/removeResources";
    // mix in user supplied params
    requestOptions.params = __assign({}, requestOptions.params, { resource: requestOptions.resource });
    return request(url, requestOptions);
}
/**
 * ```js
 * import { removeFolder } from "@esri/arcgis-rest-portal";
 * //
 * removeFolder({
 *   folderId: "fe4",
 *   owner: "c@sey",
 *   authentication
 * })
 *   .then(response)
 *
 * ```
 * Delete a non-root folder and all the items it contains. See the [REST
 * Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-folder.htm) for
 * more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that deletes a folder
 */
function removeFolder(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + encodeURIComponent(owner) + "/" + requestOptions.folderId + "/delete";
    return request(url, requestOptions);
}
//# sourceMappingURL=remove.js.map

/**
 * `SearchQueryBuilder` can be used to construct the `q` param for [`searchItems`](/arcgis-rest-js/api/portal/searchItems#searchItems-search) or [`searchGroups`](/arcgis-rest-js/api/portal/searchGroups#searchGroups-search). By chaining methods, it helps build complex search queries.
 *
 * ```js
 * const query = new SearchQueryBuilder()
 *  .match("Patrick")
 *  .in("owner")
 *  .and()
 *  .startGroup()
 *    .match("Web Mapping Application")
 *    .in("type")
 *    .or()
 *    .match("Mobile Application")
 *    .in("type")
 *    .or()
 *    .match("Application")
 *    .in("type")
 *  .endGroup()
 *  .and()
 *  .match("Demo App");
 *
 * searchItems(query).then((results) => {
 *   console.log(request);
 * });
 * ```
 *
 * Will search for items matching
 * ```
 * "owner: Patrick AND (type:"Web Mapping Application" OR type:"Mobile Application" OR type:Application) AND Demo App"
 * ```
 */
var SearchQueryBuilder = /** @class */ (function () {
    /**
     * @param q An existing query string to start building from.
     */
    function SearchQueryBuilder(q) {
        if (q === void 0) { q = ""; }
        this.termStack = [];
        this.rangeStack = [];
        this.openGroups = 0;
        this.q = q;
    }
    /**
     * Defines strings to search for.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     * ```
     *
     * @param terms strings to search for.
     */
    SearchQueryBuilder.prototype.match = function () {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        this.termStack = this.termStack.concat(terms);
        return this;
    };
    /**
     * Defines fields to search in. You can pass `"*"` or call this method without arguments to search a default set of fields
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     *   .in("title")
     * ```
     *
     * @param field The field to search for the previous match in.
     */
    SearchQueryBuilder.prototype.in = function (field) {
        var fn = "`in(" + (field ? "\"" + field + "\"" : "") + ")`";
        if (!this.hasRange && !this.hasTerms) {
            warn(
            // prettier-ignore
            fn + " was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified.");
            return this;
        }
        if (field && field !== "*") {
            this.q += field + ":";
        }
        return this.commit();
    };
    /**
     * Starts a new search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    SearchQueryBuilder.prototype.startGroup = function () {
        this.commit();
        if (this.openGroups > 0) {
            this.q += " ";
        }
        this.openGroups++;
        this.q += "(";
        return this;
    };
    /**
     * Ends a search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    SearchQueryBuilder.prototype.endGroup = function () {
        if (this.openGroups <= 0) {
            warn("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified.");
            return this;
        }
        this.commit();
        this.openGroups--;
        this.q += ")";
        return this;
    };
    /**
     * Joins two sets of queries with an `AND` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .and()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    SearchQueryBuilder.prototype.and = function () {
        return this.addModifier("and");
    };
    /**
     * Joins two sets of queries with an `OR` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    SearchQueryBuilder.prototype.or = function () {
        return this.addModifier("or");
    };
    /**
     * Joins two sets of queries with a `NOT` clause. Another option for filtering results is the [prohibit operator '-'](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm#ESRI_SECTION1_5C6C35DB9E4A4F4492C5B937BDA2BF67).
     *
     * ```js
     * // omit results with "Rivers" in their title
     * const query = new SearchQueryBuilder()
     *   .not()
     *   .match("Rivers")
     *   .in("title")
     *
     * // equivalent
     * const query = new SearchQueryBuilder()
     *   .match("Rivers")
     *   .in("-title")
     * ```
     */
    SearchQueryBuilder.prototype.not = function () {
        return this.addModifier("not");
    };
    /**
     * Begins a new range query.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .from(yesterdaysDate)
     *   .to(todaysDate)
     *   .in("created")
     * ```
     */
    SearchQueryBuilder.prototype.from = function (term) {
        if (this.hasTerms) {
            warn(
            // prettier-ignore
            "`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified.");
            return this;
        }
        this.rangeStack[0] = term;
        return this;
    };
    /**
     * Ends a range query.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .from(yesterdaysDate)
     *   .to(todaysDate)
     *   .in("created")
     * ```
     */
    SearchQueryBuilder.prototype.to = function (term) {
        if (this.hasTerms) {
            warn(
            // prettier-ignore
            "`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified.");
            return this;
        }
        this.rangeStack[1] = term;
        return this;
    };
    /**
     * Boosts the previous term to increase its rank in the results.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     *   .boost(3)
     * ```
     */
    SearchQueryBuilder.prototype.boost = function (num) {
        this.commit();
        this.q += "^" + num;
        return this;
    };
    /**
     * Returns the current query string. Called internally when the request is made.
     */
    SearchQueryBuilder.prototype.toParam = function () {
        this.commit();
        this.cleanup();
        return this.q;
    };
    /**
     * Returns a new instance of `SearchQueryBuilder` based on the current instance.
     */
    SearchQueryBuilder.prototype.clone = function () {
        this.commit();
        this.cleanup();
        return new SearchQueryBuilder(this.q + "");
    };
    SearchQueryBuilder.prototype.addModifier = function (modifier) {
        if (this.currentModifer) {
            warn(
            // prettier-ignore
            "You have called `" + this.currentModifer + "()` after `" + modifier + "()`. Your current query was not modified.");
            return this;
        }
        this.commit();
        if (this.q === "" && modifier !== "not") {
            warn("You have called `" + modifier + "()` without calling another method to modify your query first. Try calling `match()` first.");
            return this;
        }
        this.currentModifer = modifier;
        this.q += this.q === "" ? "" : " ";
        this.q += modifier.toUpperCase() + " ";
        return this;
    };
    SearchQueryBuilder.prototype.hasWhiteSpace = function (s) {
        return /\s/g.test(s);
    };
    SearchQueryBuilder.prototype.formatTerm = function (term) {
        if (term instanceof Date) {
            return term.getTime();
        }
        if (typeof term === "string" && this.hasWhiteSpace(term)) {
            return "\"" + term + "\"";
        }
        return term;
    };
    SearchQueryBuilder.prototype.commit = function () {
        var _this = this;
        this.currentModifer = undefined;
        if (this.hasRange) {
            this.q += "[" + this.formatTerm(this.rangeStack[0]) + " TO " + this.formatTerm(this.rangeStack[1]) + "]";
            this.rangeStack = [undefined, undefined];
        }
        if (this.hasTerms) {
            this.q += this.termStack
                .map(function (term) {
                return _this.formatTerm(term);
            })
                .join(" ");
            this.termStack = [];
        }
        return this;
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "hasTerms", {
        get: function () {
            return this.termStack.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "hasRange", {
        get: function () {
            return this.rangeStack.length && this.rangeStack[0] && this.rangeStack[1];
        },
        enumerable: true,
        configurable: true
    });
    SearchQueryBuilder.prototype.cleanup = function () {
        // end a group if we have started one
        if (this.openGroups > 0) {
            warn(
            // prettier-ignore
            "Automatically closing " + this.openGroups + " group(s). You can use `endGroup(...)` to remove this warning.");
            while (this.openGroups > 0) {
                this.q += ")";
                this.openGroups--;
            }
        }
        var oldQ = this.q;
        this.q = oldQ.replace(/( AND ?| NOT ?| OR ?)*$/, "");
        if (oldQ !== this.q) {
            warn("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified.");
        }
        // clear empty groups
        this.q = this.q.replace(/(\(\))*/, "");
    };
    return SearchQueryBuilder;
}());
//# sourceMappingURL=SearchQueryBuilder.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function genericSearch(search, searchType) {
    var url;
    var options;
    if (typeof search === "string" || search instanceof SearchQueryBuilder) {
        options = {
            httpMethod: "GET",
            params: {
                q: search
            }
        };
    }
    else {
        options = appendCustomParams(search, ["q", "num", "start", "sortField", "sortOrder"], {
            httpMethod: "GET"
        });
    }
    var path = searchType === "item" ? "/search" : "/community/groups";
    switch (searchType) {
        case "item":
            path = "/search";
            break;
        case "group":
            path = "/community/groups";
            break;
        default:
            // "users"
            path = "/portals/self/users/search";
            break;
    }
    url = getPortalUrl(options) + path;
    // send the request
    return request(url, options).then(function (r) {
        if (r.nextStart && r.nextStart !== -1) {
            r.nextPage = function () {
                var newOptions;
                if (typeof search === "string" ||
                    search instanceof SearchQueryBuilder) {
                    newOptions = {
                        q: search,
                        start: r.nextStart
                    };
                }
                else {
                    newOptions = search;
                    newOptions.start = r.nextStart;
                }
                return genericSearch(newOptions, searchType);
            };
        }
        return r;
    });
}
//# sourceMappingURL=generic-search.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchItems } from "@esri/arcgis-rest-portal";
 * //
 * searchItems('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/search.htm) for more information.
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchItems(search) {
    return genericSearch(search, "item");
}
//# sourceMappingURL=search.js.map

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { commitItemUpload } from "@esri/arcgis-rest-portal";
 * //
 * commitItemUpload({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Commit is called once all parts are uploaded during a multipart Add Item or Update Item operation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/commit.htm) for more information.
 *
 * @param id - The Id of the item to commit upload for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the commit result.
 */
function commitItemUpload(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/commit";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { cancelItemUpload } from "@esri/arcgis-rest-portal";
 * //
 * cancelItemUpload({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Cancels a multipart upload on an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/cancel.htm) for more information.
 *
 * @param id - The Id of the item to cancel upload for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the commit result.
 */
function cancelItemUpload(requestOptions) {
    var owner = determineOwner(requestOptions);
    var url = getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/cancel";
    return request(url, requestOptions);
}
//# sourceMappingURL=upload.js.map

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function chunk(array, size) {
    if (array.length === 0) {
        return [];
    }
    var chunks = [];
    for (var i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}
//# sourceMappingURL=array.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addGroupUsers } from "@esri/arcgis-rest-portal";
 * //
 * addGroupUsers({
 *   id: groupId,
 *   users: ["username1", "username2"],
 *   admins: ["username3"],
 *   authentication
 * })
 * .then(response);
 * ```
 * Add users to a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm) for more information.
 *
 * @param requestOptions  - Options for the request
 * @returns A Promise
 */
function addGroupUsers(requestOptions) {
    var id = requestOptions.id;
    var url = getPortalUrl(requestOptions) + "/community/groups/" + id + "/addUsers";
    var baseOptions = Object.assign({}, requestOptions, {
        admins: undefined,
        users: undefined
    });
    var batchRequestOptions = _prepareRequests("users", requestOptions.users, baseOptions).concat(_prepareRequests("admins", requestOptions.admins, baseOptions));
    var promises = batchRequestOptions.map(function (options) {
        return _sendSafeRequest(url, options);
    });
    return Promise.all(promises).then(_consolidateRequestResults);
}
function _prepareRequests(type, usernames, baseOptions) {
    if (!usernames || usernames.length < 1) {
        return [];
    }
    // the ArcGIS REST API only allows to add no more than 25 users per request,
    // see https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm
    var userChunks = chunk(usernames, 25);
    return userChunks.map(function (users) {
        return _generateRequestOptions(type, users, baseOptions);
    });
}
function _generateRequestOptions(type, usernames, baseOptions) {
    var _a, _b;
    return Object.assign({}, baseOptions, (_a = {},
        _a[type] = usernames,
        _a.params = __assign({}, baseOptions.params, (_b = {}, _b[type] = usernames, _b)),
        _a));
}
// this request is safe since the request error will be handled
function _sendSafeRequest(url, requestOptions) {
    return request(url, requestOptions).catch(function (error) {
        return {
            errors: [error]
        };
    });
}
function _consolidateRequestResults(results) {
    var notAdded = results
        .filter(function (result) { return result.notAdded; })
        .reduce(function (collection, result) { return collection.concat(result.notAdded); }, []);
    var errors = results
        .filter(function (result) { return result.errors; })
        .reduce(function (collection, result) { return collection.concat(result.errors); }, []);
    var consolidated = { notAdded: notAdded };
    if (errors.length > 0) {
        consolidated.errors = errors;
    }
    return consolidated;
}
//# sourceMappingURL=add-users.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { createGroup } from "@esri/arcgis-rest-portal";
 * //
 * createGroup({
 *   group: {
 *     title: "No Homers",
 *     access: "public"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 * Create a new Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/create-group.htm) for more information.
 *
 * Note: The group name must be unique within the user's organization.
 * @param requestOptions  - Options for the request, including a group object
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function createGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/createGroup";
    requestOptions.params = __assign({}, requestOptions.params, requestOptions.group);
    return request(url, requestOptions);
}
//# sourceMappingURL=create.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getGroup } from "@esri/arcgis-rest-portal";
 * //
 * getGroup("fxb988") // id
 *   .then(response)
 * ```
 * Fetch a group using its id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group.htm) for more information.
 *
 * @param id - Group Id
 * @param requestOptions  - Options for the request
 * @returns  A Promise that will resolve with the data from the response.
 */
function getGroup(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + id;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * Returns the content of a Group. Since the group may contain 1000s of items
 * the requestParams allow for paging.
 * @param id - Group Id
 * @param requestOptions  - Options for the request, including paging parameters.
 * @returns  A Promise that will resolve with the content of the group.
 */
function getGroupContent(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/content/groups/" + id;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, { params: { start: 1, num: 100 } }, requestOptions);
    // is this the most concise way to mixin with the defaults above?
    if (requestOptions && requestOptions.paging) {
        options.params = __assign({}, requestOptions.paging);
    }
    return request(url, options);
}
/**
 * Get the usernames of the admins and members. Does not return actual 'User' objects. Those must be
 * retrieved via separate calls to the User's API.
 * @param id - Group Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with arrays of the group admin usernames and the member usernames
 */
function getGroupUsers(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + id + "/users";
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}
/**
 * ```js
 * import { searchGroupUsers } from "@esri/arcgis-rest-portal";
 * //
 * searchGroupUsers('abc123')
 *   .then(response)
 * ```
 * Search the users in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-users-list.htm) for more information.
 *
 * @param id - The group id
 * @param searchOptions - Options for the request, including paging parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroupUsers(id, searchOptions) {
    var url = getPortalUrl(searchOptions) + "/community/groups/" + id + "/userlist";
    var options = appendCustomParams(searchOptions || {}, ["name", "num", "start", "sortField", "sortOrder", "joined", "memberType"], {
        httpMethod: "GET"
    });
    return request(url, options);
}
//# sourceMappingURL=get.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { createGroupNotification } from '@esri/arcgis-rest-portal';
 * // send an email to an entire group
 * createGroupNotification({
 *   authentication: UserSession,
 *   subject: "hello",
 *   message: "world!",
 *   id: groupId
 * })
 * ```
 * Create a group notification.
 *
 * @param requestOptions - Options for the request
 *
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function createGroupNotification(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/createNotification";
    var options = __assign({ params: __assign({ subject: requestOptions.subject, message: requestOptions.message, users: requestOptions.users, notificationChannelType: requestOptions.notificationChannelType || "email", clientId: requestOptions.clientId, silentNotification: requestOptions.silentNotification, notifyAll: !requestOptions.users || requestOptions.users.length === 0 }, requestOptions.params) }, requestOptions);
    return request(url, options);
}
//# sourceMappingURL=notification.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { protectGroup } from '@esri/arcgis-rest-portal';
 * //
 * protectGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Protect a group to avoid accidental deletion. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/protect-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function protectGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/protect";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { unprotectGroup } from '@esri/arcgis-rest-portal';
 * //
 * unprotectGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Unprotect a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect-group.htm) for more information.
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function unprotectGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/unprotect";
    return request(url, requestOptions);
}
//# sourceMappingURL=protect.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { removeGroup } from '@esri/arcgis-rest-portal';
 * //
 * removeGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Delete a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function removeGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/delete";
    var options = __assign({}, requestOptions);
    return request(url, options);
}
//# sourceMappingURL=remove.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchGroups } from "@esri/arcgis-rest-portal";
 * //
 * searchGroups('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for groups. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-search.htm) for more information.
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroups(search) {
    return genericSearch(search, "group");
}
//# sourceMappingURL=search.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { updateGroup } from '@esri/arcgis-rest-portal';
 * //
 * updateGroup({
 *   group: { id: "fgr344", title: "new" }
 * })
 *   .then(response)
 * ```
 * Update the properties of a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-group.htm) for more information.
 *
 * @param requestOptions - Options for the request, including the group
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function updateGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.group.id + "/update";
    requestOptions.params = __assign({}, requestOptions.params, requestOptions.group);
    return request(url, requestOptions);
}
//# sourceMappingURL=update.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { joinGroup } from '@esri/arcgis-rest-portal';
 * //
 * joinGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Make a request as the authenticated user to join a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/join-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function joinGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/join";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { leaveGroup } from '@esri/arcgis-rest-portal';
 * //
 * leaveGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Make a request as the authenticated user to leave a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/leave-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function leaveGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/leave";
    return request(url, requestOptions);
}
//# sourceMappingURL=join.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getUser } from '@esri/arcgis-rest-portal';
 * //
 * getUser("jsmith")
 *   .then(response)
 * // => { firstName: "John", lastName: "Smith",tags: ["GIS Analyst", "City of Redlands"] }
 * ```
 * Get information about a user. This method has proven so generically useful that you can also call [`UserSession.getUser()`](/arcgis-rest-js/api/auth/UserSession#getUser-summary).
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function getUser(requestOptions) {
    var url;
    var options = { httpMethod: "GET" };
    // if a username is passed, assume ArcGIS Online
    if (typeof requestOptions === "string") {
        url = "https://www.arcgis.com/sharing/rest/community/users/" + requestOptions;
    }
    else {
        // if an authenticated session is passed, default to that user/portal unless another username is provided manually
        var username = requestOptions.username || requestOptions.authentication.username;
        url = getPortalUrl(requestOptions) + "/community/users/" + encodeURIComponent(username);
        options = __assign({}, requestOptions, options);
    }
    // send the request
    return request(url, options);
}
//# sourceMappingURL=get-user.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getUserTags } from '@esri/arcgis-rest-portal';
 * //
 * getUserTags({
 *   username: "jsmith",
 *   authentication
 * })
 *   .then(response)
 * ```
 *  Users tag the content they publish in their portal via the add and update item calls. This resource lists all the tags used by the user along with the number of times the tags have been used. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-tags.htm) for more information.
 *
 * @param IGetUserOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user tag array
 */
function getUserTags(requestOptions) {
    var username = requestOptions.username || requestOptions.authentication.username;
    var url = getPortalUrl(requestOptions) + "/community/users/" + encodeURIComponent(username) + "/tags";
    // send the request
    return request(url, requestOptions);
}
//# sourceMappingURL=get-user-tags.js.map

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper that returns the [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm) for a given portal.
 *
 * @param session
 * @returns User url to be used in API requests.
 */
function getUserUrl(session) {
    return getPortalUrl(session) + "/community/users/" + encodeURIComponent(session.username);
}
//# sourceMappingURL=get-user-url.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getUserInvitations } from '@esri/arcgis-rest-portal';
 * // username is inferred from UserSession
 * getUserInvitations({ authentication })
 *   .then(response) // response.userInvitations.length => 3
 * ```
 * Get all invitations for a user. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-invitations.htm) for more information.
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user's invitations
 */
function getUserInvitations(requestOptions) {
    var options = { httpMethod: "GET" };
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/invitations";
    options = __assign({}, requestOptions, options);
    // send the request
    return request(url, options);
}
/**
 * ```js
 * import { getUserInvitation } from '@esri/arcgis-rest-portal';
 * // username is inferred from UserSession
 * getUserInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response) // => response.accepted => true
 * ```
 * Get an invitation for a user by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/user-invitation.htm) for more information.
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the invitation
 */
function getUserInvitation(requestOptions) {
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/invitations/" + requestOptions.invitationId;
    var options = { httpMethod: "GET" };
    options = __assign({}, requestOptions, options);
    // send the request
    return request(url, options);
}
/**
 * ```js
 * import { acceptInvitation } from '@esri/arcgis-rest-portal';
 * // username is inferred from UserSession
 * acceptInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Accept an invitation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/accept-invitation.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function acceptInvitation(requestOptions) {
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/invitations/" + requestOptions.invitationId + "/accept";
    var options = __assign({}, requestOptions);
    return request(url, options);
}
/**
 * ```js
 * import { declineInvitation } from '@esri/arcgis-rest-portal';
 * // username is inferred from UserSession
 * declineInvitation({
 *   invitationId: "3ef",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Decline an invitation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/decline-invitation.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function declineInvitation(requestOptions) {
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/invitations/" + requestOptions.invitationId + "/decline";
    var options = __assign({}, requestOptions);
    return request(url, options);
}
//# sourceMappingURL=invitation.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getUserNotifications } from '@esri/arcgis-rest-portal';
 * // username is inferred from UserSession
 * getUserNotifications({ authentication })
 *   .then(results) // results.notifications.length) => 3
 * ```
 * Get notifications for a user.
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with the user's notifications
 */
function getUserNotifications(requestOptions) {
    var options = { httpMethod: "GET" };
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/notifications";
    options = __assign({}, requestOptions, options);
    // send the request
    return request(url, options);
}
/**
 * Delete a notification.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request
 */
function removeNotification(requestOptions) {
    var username = encodeURIComponent(requestOptions.authentication.username);
    var portalUrl = getPortalUrl(requestOptions);
    var url = portalUrl + "/community/users/" + username + "/notifications/" + requestOptions.id + "/delete";
    return request(url, requestOptions);
}
//# sourceMappingURL=notification.js.map

/**
 * ```js
 * import { searchItems } from "@esri/arcgis-rest-portal";
 * //
 * searchUsers({ q: 'tommy', authentication })
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for users.
 *
 * @param search - A RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchUsers(search) {
    return genericSearch(search, "user");
}
//# sourceMappingURL=search-users.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { updateUser } from '@esri/arcgis-rest-portal';
 * // any user can update their own profile
 * updateUser({
 *   authentication,
 *   user: { description: "better than the last one" }
 * })
 *   .then(response)
 * // org administrators must declare the username that will be updated explicitly
 * updateUser({
 *   authentication,
 *   user: { username: "c@sey", description: "" }
 * })
 *   .then(response)
 * // => { "success": true, "username": "c@sey" }
 * ```
 * Update a user profile. The username will be extracted from the authentication session unless it is provided explicitly. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-user.htm) for more information.
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function updateUser(requestOptions) {
    // default to the authenticated username unless another username is provided manually
    var username = requestOptions.user.username || requestOptions.authentication.username;
    var updateUrl = getPortalUrl(requestOptions) + "/community/users/" + encodeURIComponent(username) + "/update";
    // mixin custom params and the user information, then drop the user info
    requestOptions.params = __assign({}, requestOptions.user, requestOptions.params);
    delete requestOptions.user;
    // send the request
    return request(updateUrl, requestOptions);
}
//# sourceMappingURL=update.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function getSharingUrl(requestOptions) {
    var username = requestOptions.authentication.username;
    var owner = requestOptions.owner || username;
    return getPortalUrl(requestOptions) + "/content/users/" + encodeURIComponent(owner) + "/items/" + requestOptions.id + "/share";
}
function isItemOwner(requestOptions) {
    var username = requestOptions.authentication.username;
    var owner = requestOptions.owner || username;
    return owner === username;
}
/**
 * Check it the user is a full org_admin
 * @param requestOptions
 * @returns Promise resolving in a boolean indicating if the user is an ArcGIS Organization administrator
 */
function isOrgAdmin(requestOptions) {
    var session = requestOptions.authentication;
    return session.getUser(requestOptions).then(function (user) {
        if (!user || user.role !== "org_admin") {
            return false;
        }
        else {
            return true;
        }
    });
}
/**
 * Get the User Membership for a particular group. Use this if all you have is the groupId.
 * If you have the group object, check the `userMembership.memberType` property instead of calling this method.
 *
 * @param requestOptions
 * @returns A Promise that resolves with "owner" | "admin" | "member" | "nonmember"
 */
function getUserMembership(requestOptions) {
    // fetch the group...
    return getGroup(requestOptions.groupId, requestOptions)
        .then(function (group) {
        return group.userMembership.memberType;
    })
        .catch(function () {
        return "none";
    });
}
//# sourceMappingURL=helpers.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { setItemAccess } from "@esri/arcgis-rest-portal";
 * //
 * setItemAccess({
 *   id: "abc123",
 *   access: "public", // 'org' || 'private'
 *   authentication: session
 * })
 * ```
 * Change who is able to access an item.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function setItemAccess(requestOptions) {
    var url = getSharingUrl(requestOptions);
    if (isItemOwner(requestOptions)) {
        // if the user owns the item, proceed
        return updateItemAccess(url, requestOptions);
    }
    else {
        // otherwise we need to check to see if they are an organization admin
        return isOrgAdmin(requestOptions).then(function (admin) {
            if (admin) {
                return updateItemAccess(url, requestOptions);
            }
            else {
                // if neither, updating the sharing isnt possible
                throw Error("This item can not be shared by " + requestOptions.authentication.username + ". They are neither the item owner nor an organization admin.");
            }
        });
    }
}
function updateItemAccess(url, requestOptions) {
    requestOptions.params = __assign({ org: false, everyone: false }, requestOptions.params);
    // if the user wants to make the item private, it needs to be unshared from any/all groups as well
    if (requestOptions.access === "private") {
        requestOptions.params.groups = " ";
    }
    if (requestOptions.access === "org") {
        requestOptions.params.org = true;
    }
    // if sharing with everyone, share with the entire organization as well.
    if (requestOptions.access === "public") {
        // this is how the ArcGIS Online Home app sets public access
        // setting org = true instead of account = true will cancel out all sharing
        requestOptions.params.account = true;
        requestOptions.params.everyone = true;
    }
    return request(url, requestOptions);
}
//# sourceMappingURL=access.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { shareItemWithGroup } from '@esri/arcgis-rest-portal';
 * //
 * shareItemWithGroup({
 *   id: "abc123",
 *   groupId: "xyz987",
 *   authentication
 * })
 * ```
 * Share an item with a group, either as an
 * [item owner](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-item-owner-.htm),
 * [group admin](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-group-admin-.htm) or
 * organization admin.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function shareItemWithGroup(requestOptions) {
    return changeGroupSharing(__assign({ action: "share" }, requestOptions));
}
/**
 * Stop sharing an item with a group, either as an
 * [item owner](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-item-owner-.htm),
 * [group admin](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-group-admin-.htm) or
 * organization admin.
 *
 * ```js
 * import { unshareItemWithGroup } from '@esri/arcgis-rest-portal';
 *
 * unshareItemWithGroup({
 *   id: "abc123",
 *   groupId: "xyz987",
 *   authentication: session
 * })
 * ```
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function unshareItemWithGroup(requestOptions) {
    return changeGroupSharing(__assign({ action: "unshare" }, requestOptions));
}
/**
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the data from the response.
 */
function changeGroupSharing(requestOptions) {
    var username = requestOptions.authentication.username;
    var itemOwner = requestOptions.owner || username;
    var isSharedEditingGroup = requestOptions.confirmItemControl || false;
    return isOrgAdmin(requestOptions).then(function (admin) {
        var resultProp = requestOptions.action === "share" ? "notSharedWith" : "notUnsharedFrom";
        // check if the item has already been shared with the group...
        return isItemSharedWithGroup(requestOptions).then(function (result) {
            // if we are sharing and result is true OR we are unsharing and result is false... short circuit
            if ((requestOptions.action === "share" && result === true) ||
                (requestOptions.action === "unshare" && result === false)) {
                // and send back the same response ArcGIS Online would
                var response = {
                    itemId: requestOptions.id,
                    shortcut: true
                };
                response[resultProp] = [];
                return response;
            }
            else {
                // next check to ensure the user is a member of the group
                return getUserMembership(requestOptions)
                    .then(function (membership) {
                    // if user is not a member of the group and not an admin
                    if (membership === "none" && !admin) {
                        // abort and reject promise
                        throw Error("This item can not be " + requestOptions.action + "d by " + username + " as they are not a member of the specified group " + requestOptions.groupId + ".");
                    }
                    else {
                        // ...they are some level of membership or org-admin
                        // if the current user does not own the item, we had more checks...
                        if (itemOwner !== username) {
                            // only item owners can share/unshare items w/ shared editing groups
                            if (isSharedEditingGroup) {
                                throw Error("This item can not be " + requestOptions.action + "d to shared editing group " + requestOptions.groupId + " by " + username + " as they not the item owner.");
                            }
                            // only item-owners, group-admin's, group-owners can unshare an item from a normal group
                            if (requestOptions.action === "unshare" &&
                                membership !== "admin" &&
                                membership !== "owner") {
                                throw Error("This item can not be " + requestOptions.action + "d from group " + requestOptions.groupId + " by " + username + " as they not the item owner, group admin or group owner.");
                            }
                        }
                        // at this point, the user *should* be able to take the action
                        // only question is what url to use
                        // default to the non-owner url...
                        var url = getPortalUrl(requestOptions) + "/content/items/" + requestOptions.id + "/" + requestOptions.action;
                        // but if they are the owner, we use a different path...
                        if (itemOwner === username) {
                            url = getPortalUrl(requestOptions) + "/content/users/" + itemOwner + "/items/" + requestOptions.id + "/" + requestOptions.action;
                        }
                        // now its finally time to do the sharing
                        requestOptions.params = {
                            groups: requestOptions.groupId,
                            confirmItemControl: requestOptions.confirmItemControl
                        };
                        return request(url, requestOptions);
                    }
                })
                    .then(function (sharingResponse) {
                    if (sharingResponse[resultProp].length) {
                        throw Error("Item " + requestOptions.id + " could not be " + requestOptions.action + "d to group " + requestOptions.groupId + ".");
                    }
                    else {
                        // all is well
                        return sharingResponse;
                    }
                });
            } // else
        }); // then
    });
}
/**
 * Find out whether or not an item is already shared with a group.
 *
 * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
 * @returns A Promise that will resolve with the data from the response.
 */
function isItemSharedWithGroup(requestOptions) {
    var query = {
        q: "id: " + requestOptions.id + " AND group: " + requestOptions.groupId,
        start: 1,
        num: 10,
        sortField: "title"
    };
    // we need to append some params into requestOptions, so make a clone
    // instead of mutating the params on the inbound requestOptions object
    var options = __assign({}, requestOptions, { rawResponse: false });
    // instead of calling out to "@esri/arcgis-rest-items, make the request manually to forgoe another dependency
    options.params = __assign({}, query, requestOptions.params);
    var url = getPortalUrl(options) + "/search";
    // to do: just call searchItems now that its in the same package
    return request(url, options).then(function (searchResponse) {
        // if there are no search results at all, we know the item hasnt already been shared with the group
        if (searchResponse.total === 0) {
            return false;
        }
        else {
            var sharedItem_1;
            // otherwise loop through and search for the id
            searchResponse.results.some(function (item) {
                var matchedItem = item.id === requestOptions.id;
                if (matchedItem) {
                    sharedItem_1 = item;
                }
                return matchedItem;
            });
            if (sharedItem_1) {
                return true;
            }
            else {
                return false;
            }
        }
    });
}
//# sourceMappingURL=group-sharing.js.map

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Get the portal
 * @param requestOptions
 */
function getSelf(requestOptions) {
    // just delegate to getPortal w/o an id
    return getPortal(null, requestOptions);
}
/**
 * ```js
 * import { getPortal } from "@esri/arcgis-rest-request";
 * //
 * getPortal()
 * getPortal("fe8")
 * getPortal(null, { portal: "https://custom.maps.arcgis.com/sharing/rest/" })
 * ```
 * Fetch information about the current portal by id. If no id is passed, portals/self will be called
 * @param id
 * @param requestOptions
 */
function getPortal(id, requestOptions) {
    // construct the search url
    var idOrSelf = id ? id : "self";
    var url = getPortalUrl(requestOptions) + "/portals/" + idOrSelf;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    // send the request
    return request(url, options);
}
//# sourceMappingURL=get-portal.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
//# sourceMappingURL=index.js.map

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// https always
var ARCGIS_ONLINE_GEOCODING_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/";
/**
 * Used to fetch metadata from a geocoding service.
 *
 * ```js
 * import { getGeocoderServiceInfo } from '@esri/arcgis-rest-geocoding';
 *
 * getGeocoderServiceInfo()
 *   .then((response) => {
 *     response.serviceDescription; // => 'World Geocoder'
 *   });
 * ```
 *
 * @param requestOptions - Request options can contain a custom geocoding service to fetch metadata from.
 * @returns A Promise that will resolve with the data from the response.
 */
function getGeocodeService(requestOptions) {
    var url = (requestOptions && requestOptions.endpoint) || ARCGIS_ONLINE_GEOCODING_URL;
    var options = __assign({ httpMethod: "GET", maxUrlLength: 2000 }, requestOptions);
    return request(url, options);
}
//# sourceMappingURL=helpers.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { geocode } from '@esri/arcgis-rest-geocoding';
 * //
 * geocode("LAX")
 *   .then((response) => {
 *     response.candidates[0].location; // => { x: -118.409, y: 33.943, spatialReference: ...  }
 *   });
 * //
 * geocode({
 *   address: "1600 Pennsylvania Ave",
 *   postal: 20500,
 *   countryCode: "USA"
 * })
 *   .then((response) => {
 *     response.candidates[1].location; // => { x: -77.036533, y: 38.898719, spatialReference: ... }
 *   });
 * ```
 * Used to determine the location of a single address or point of interest. See the [REST Documentation](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm) for more information.
 * @param address String representing the address or point of interest or RequestOptions to pass to the endpoint.
 * @returns A Promise that will resolve with address candidates for the request. The spatial reference will be added to candidate locations and extents unless `rawResponse: true` was passed.
 */
function geocode(address) {
    var options = {};
    var endpoint;
    if (typeof address === "string") {
        options.params = { singleLine: address };
        endpoint = ARCGIS_ONLINE_GEOCODING_URL;
    }
    else {
        endpoint = address.endpoint || ARCGIS_ONLINE_GEOCODING_URL;
        options = appendCustomParams(address, [
            "singleLine",
            "address",
            "address2",
            "address3",
            "neighborhood",
            "city",
            "subregion",
            "region",
            "postal",
            "postalExt",
            "countryCode",
            "outFields",
            "magicKey"
        ], { params: __assign({}, address.params) });
    }
    // add spatialReference property to individual matches
    return request(cleanUrl(endpoint) + "/findAddressCandidates", options).then(function (response) {
        if (typeof address !== "string" && address.rawResponse) {
            return response;
        }
        var sr = response.spatialReference;
        response.candidates.forEach(function (candidate) {
            candidate.location.spatialReference = sr;
            if (candidate.extent) {
                candidate.extent.spatialReference = sr;
            }
        });
        return response;
    });
}
//# sourceMappingURL=geocode.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { suggest } from '@esri/arcgis-rest-geocoding';
 * //
 * suggest("Starb")
 *   .then(response) // response.text === "Starbucks"
 * ```
 * Used to return a placename [suggestion](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) for a partial string.
 *
 * @param requestOptions - Options for the request including authentication and other optional parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function suggest(partialText, requestOptions) {
    var options = __assign({ endpoint: ARCGIS_ONLINE_GEOCODING_URL, params: {} }, requestOptions);
    options.params.text = partialText;
    return request(cleanUrl(options.endpoint) + "/suggest", options);
}
const suggest$1 = {
    suggest: suggest
};
//# sourceMappingURL=suggest.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function isLocationArray(coords) {
    return (coords.length === 2 ||
        coords.length === 3);
}
function isLocation(coords) {
    return (coords.latitude !== undefined ||
        coords.lat !== undefined);
}
/**
 * ```js
 * import { reverseGeocode } from '@esri/arcgis-rest-geocoding';
 * //
 * reverseGeocode([-118.409,33.943 ]) // long, lat
 *   .then((response) => {
 *     response.address.PlaceName; // => "LA Airport"
 *   });
 * // or
 * reverseGeocode({ long: -118.409, lat: 33.943 })
 * reverseGeocode({ latitude: 33.943, latitude: -118.409 })
 * reverseGeocode({ x: -118.409, y: 33.9425 }) // wgs84 is assumed
 * reverseGeocode({ x: -13181226, y: 4021085, spatialReference: { wkid: 3857 })
 * ```
 * Used to determine the address of a [location](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-reverse-geocode.htm).
 *
 * @param coordinates - the location you'd like to associate an address with.
 * @param requestOptions - Additional options for the request including authentication.
 * @returns A Promise that will resolve with the data from the response.
 */
function reverseGeocode(coords, requestOptions) {
    var options = __assign({ endpoint: ARCGIS_ONLINE_GEOCODING_URL, params: {} }, requestOptions);
    if (isLocationArray(coords)) {
        options.params.location = coords.join();
    }
    else if (isLocation(coords)) {
        if (coords.lat) {
            options.params.location = coords.long + "," + coords.lat;
        }
        if (coords.latitude) {
            options.params.location = coords.longitude + "," + coords.latitude;
        }
    }
    else {
        // if input is a point, we can pass it straight through, with or without a spatial reference
        options.params.location = coords;
    }
    return request(cleanUrl(options.endpoint) + "/reverseGeocode", options);
}
const reverse = {
    reverseGeocode: reverseGeocode
};
//# sourceMappingURL=reverse.js.map

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { bulkGeocode } from '@esri/arcgis-rest-geocoding';
 * import { ApplicationSession } from '@esri/arcgis-rest-auth';
 * //
 * const addresses = [
 *   { "OBJECTID": 1, "SingleLine": "380 New York Street 92373" },
 *   { "OBJECTID": 2, "SingleLine": "1 World Way Los Angeles 90045" }
 * ];
 * //
 * bulkGeocode({ addresses, authentication: session })
 *   .then((response) => {
 *     response.locations[0].location; // => { x: -117, y: 34, spatialReference: { wkid: 4326 } }
 *   });
 * ```
 * Used to geocode a [batch](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-geocode-addresses.htm) of addresses.
 *
 * @param requestOptions - Request options to pass to the geocoder, including an array of addresses and authentication session.
 * @returns A Promise that will resolve with the data from the response. The spatial reference will be added to address locations unless `rawResponse: true` was passed.
 */
function bulkGeocode(requestOptions // must POST, which is the default
) {
    var options = __assign({ endpoint: ARCGIS_ONLINE_GEOCODING_URL, params: {} }, requestOptions);
    options.params.addresses = {
        records: requestOptions.addresses.map(function (address) {
            return { attributes: address };
        })
    };
    // the SAS service doesnt support anonymous requests
    if (!requestOptions.authentication &&
        options.endpoint === ARCGIS_ONLINE_GEOCODING_URL) {
        return Promise.reject("bulk geocoding using the ArcGIS service requires authentication");
    }
    return request(cleanUrl(options.endpoint) + "/geocodeAddresses", options).then(function (response) {
        if (options.rawResponse) {
            return response;
        }
        var sr = response.spatialReference;
        response.locations.forEach(function (address) {
            if (address.location) {
                address.location.spatialReference = sr;
            }
        });
        return response;
    });
}
//# sourceMappingURL=bulk.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
//# sourceMappingURL=index.js.map

function getMessages(webmap, address) {
    // First clear previous messages 
    let messages = [];
    return getMap(webmap, address);
}
function getLocation(address) {
    return new Promise((resolve, reject) => {
        geocode(address)
            .then((response) => {
            console.log("getLocation then", response);
            resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        })
            .catch(reject);
    });
}
function getMap(id, address) {
    return new Promise((resolve, reject) => {
        getLocation({
            address: address,
        }).then(location => {
            getItemData(id)
                .then(response => {
                // Get Features from each map layer
                let promises = response['operationalLayers'].reverse().map(layer => {
                    return getFeatures(layer, location);
                });
                Promise.all(promises).then(results => {
                    console.log("getMap Promise all", results);
                    let features = [];
                    results.map(r => {
                        // There may not have been any features from this layer
                        if (r['features'].length > 0) {
                            r['description'] = r['features'][0].title;
                            r['description'] += `<br/><em>${r['features'][0].description}</em>`;
                        }
                        features.push(r);
                    });
                    resolve(features);
                });
            })
                .catch(reject);
        })
            .catch(reject);
    });
}
function getFeatures(layer, location) {
    // console.log("getFeatures", layer, location)
    let options = {
        "url": layer.url,
        "outFields": "*",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326"
    };
    if (layer.title.indexOf('Nearby') !== -1) {
        let match = layer.title.match(/Nearby (\d+)/);
        let distance;
        if (match !== null) {
            distance = parseInt(match[1]);
        }
        options["distance"] = distance;
        options["units"] = 'esriSRUnit_Meter';
    }
    // if (location.length !== undefined) {
    options["geometry"] = location;
    // }
    return new Promise((resolve, reject) => {
        queryFeatures(options)
            .then(results => {
            let collection = {
                "title": layer.title,
                "features": interpretResults(layer, results)
            };
            resolve(collection);
        }).catch(reject);
    });
}
// Methods to convert features to interpolated display
function getValue(data, key, fields) {
    if (data.hasOwnProperty(key)) {
        return coerceAttributeValue(data, key, fields);
    }
    else {
        return "";
    }
}
function coerceAttributeValue(data, key, fields) {
    switch (fields[key].type) {
        case "esriFieldTypeDate":
            return new Date(data[key]);
        default:
            return data[key];
    }
}
function interpretResults(layer, results) {
    let fields = {};
    // console.log('results from t-f', results);
    results.fields.forEach((field) => {
        fields[field.name] = field;
    });
    let featureInfos = [];
    // let layerTitle = layer.title;
    let featureTitle = layer.popupInfo.title;
    let featureDescription = layer.popupInfo.description;
    results.features.forEach((feature) => {
        let data = feature.attributes;
        // Template replace `{POP00001}` -> feature['POP00001']
        var featureTitleInterpolated = featureTitle.replace(/\{(\w*)\}/g, (m, key) => {
            return getValue(data, key, fields);
        });
        if (featureDescription !== null) {
            var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g, (m, key) => {
                return getValue(data, key, fields);
            });
        }
        let featureInfo = {
            "title": featureTitleInterpolated,
            "description": featureDescriptionInterpolated ? featureDescriptionInterpolated : ""
        };
        featureInfos.push(featureInfo);
    });
    // console.log("featureInfos", featureInfos)
    return featureInfos;
}

const HubRadar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleAddressUpdated(event) {
        event.preventDefault();
        console.log("radar handleUpdateAddress", event.detail);
        this.address = event.detail;
        getMessages(this.webmap, this.address).then(results => {
            this.messages = results;
        });
    }
    componentWillLoad() {
        getMessages(this.webmap, this.address).then(results => {
            this.messages = results;
        });
    }
    render() {
        let output = [];
        // Get Address
        output.push(h("hub-proximity-input", { address: this.address }));
        output.push(h("em", null, "Searching '", this.address, "'"));
        // Get Results
        if (this.messages === undefined || this.messages.length == 0) {
            output.push(h("calcite-loader", { text: "Fetching data...", "is-active": true }));
        }
        else {
            this.messages.forEach(m => {
                output.push(h("hub-topic", { name: m.title, description: m.description }));
            });
        }
        return output;
    }
    static get style() { return ""; }
};

export { HubRadar as hub_radar };
