// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

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

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    (function (self) {
      (function (exports) {
        var support = {
          searchParams: 'URLSearchParams' in self,
          iterable: 'Symbol' in self && 'iterator' in Symbol,
          blob: 'FileReader' in self && 'Blob' in self && function () {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: 'FormData' in self,
          arrayBuffer: 'ArrayBuffer' in self
        };

        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }

        if (support.arrayBuffer) {
          var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

          var isArrayBufferView = ArrayBuffer.isView || function (obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }

        function normalizeName(name) {
          if (typeof name !== 'string') {
            name = String(name);
          }

          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
          }

          return name.toLowerCase();
        }

        function normalizeValue(value) {
          if (typeof value !== 'string') {
            value = String(value);
          }

          return value;
        } // Build a destructive iterator for the value list


        function iteratorFor(items) {
          var iterator = {
            next: function () {
              var value = items.shift();
              return {
                done: value === undefined,
                value: value
              };
            }
          };

          if (support.iterable) {
            iterator[Symbol.iterator] = function () {
              return iterator;
            };
          }

          return iterator;
        }

        function Headers(headers) {
          this.map = {};

          if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function (header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
              this.append(name, headers[name]);
            }, this);
          }
        }

        Headers.prototype.append = function (name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ', ' + value : value;
        };

        Headers.prototype['delete'] = function (name) {
          delete this.map[normalizeName(name)];
        };

        Headers.prototype.get = function (name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };

        Headers.prototype.has = function (name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };

        Headers.prototype.set = function (name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };

        Headers.prototype.forEach = function (callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };

        Headers.prototype.keys = function () {
          var items = [];
          this.forEach(function (value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };

        Headers.prototype.values = function () {
          var items = [];
          this.forEach(function (value) {
            items.push(value);
          });
          return iteratorFor(items);
        };

        Headers.prototype.entries = function () {
          var items = [];
          this.forEach(function (value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };

        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }

        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
          }

          body.bodyUsed = true;
        }

        function fileReaderReady(reader) {
          return new Promise(function (resolve, reject) {
            reader.onload = function () {
              resolve(reader.result);
            };

            reader.onerror = function () {
              reject(reader.error);
            };
          });
        }

        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }

        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }

        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);

          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }

          return chars.join('');
        }

        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }

        function Body() {
          this.bodyUsed = false;

          this._initBody = function (body) {
            this._bodyInit = body;

            if (!body) {
              this._bodyText = '';
            } else if (typeof body === 'string') {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }

            if (!this.headers.get('content-type')) {
              if (typeof body === 'string') {
                this.headers.set('content-type', 'text/plain;charset=UTF-8');
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set('content-type', this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
              }
            }
          };

          if (support.blob) {
            this.blob = function () {
              var rejected = consumed(this);

              if (rejected) {
                return rejected;
              }

              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob');
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };

            this.arrayBuffer = function () {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }

          this.text = function () {
            var rejected = consumed(this);

            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as text');
            } else {
              return Promise.resolve(this._bodyText);
            }
          };

          if (support.formData) {
            this.formData = function () {
              return this.text().then(decode);
            };
          }

          this.json = function () {
            return this.text().then(JSON.parse);
          };

          return this;
        } // HTTP methods whose capitalization should be normalized


        var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }

        function Request(input, options) {
          options = options || {};
          var body = options.body;

          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError('Already read');
            }

            this.url = input.url;
            this.credentials = input.credentials;

            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }

            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;

            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }

          this.credentials = options.credentials || this.credentials || 'same-origin';

          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }

          this.method = normalizeMethod(options.method || this.method || 'GET');
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;

          if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
          }

          this._initBody(body);
        }

        Request.prototype.clone = function () {
          return new Request(this, {
            body: this._bodyInit
          });
        };

        function decode(body) {
          var form = new FormData();
          body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
              var split = bytes.split('=');
              var name = split.shift().replace(/\+/g, ' ');
              var value = split.join('=').replace(/\+/g, ' ');
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }

        function parseHeaders(rawHeaders) {
          var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
          // https://tools.ietf.org/html/rfc7230#section-3.2

          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
          preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
            var parts = line.split(':');
            var key = parts.shift().trim();

            if (key) {
              var value = parts.join(':').trim();
              headers.append(key, value);
            }
          });
          return headers;
        }

        Body.call(Request.prototype);

        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }

          this.type = 'default';
          this.status = options.status === undefined ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = 'statusText' in options ? options.statusText : 'OK';
          this.headers = new Headers(options.headers);
          this.url = options.url || '';

          this._initBody(bodyInit);
        }

        Body.call(Response.prototype);

        Response.prototype.clone = function () {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };

        Response.error = function () {
          var response = new Response(null, {
            status: 0,
            statusText: ''
          });
          response.type = 'error';
          return response;
        };

        var redirectStatuses = [301, 302, 303, 307, 308];

        Response.redirect = function (url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code');
          }

          return new Response(null, {
            status: status,
            headers: {
              location: url
            }
          });
        };

        exports.DOMException = self.DOMException;

        try {
          new exports.DOMException();
        } catch (err) {
          exports.DOMException = function (message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };

          exports.DOMException.prototype = Object.create(Error.prototype);
          exports.DOMException.prototype.constructor = exports.DOMException;
        }

        function fetch(input, init) {
          return new Promise(function (resolve, reject) {
            var request = new Request(input, init);

            if (request.signal && request.signal.aborted) {
              return reject(new exports.DOMException('Aborted', 'AbortError'));
            }

            var xhr = new XMLHttpRequest();

            function abortXhr() {
              xhr.abort();
            }

            xhr.onload = function () {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || '')
              };
              options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
              var body = 'response' in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };

            xhr.onerror = function () {
              reject(new TypeError('Network request failed'));
            };

            xhr.ontimeout = function () {
              reject(new TypeError('Network request failed'));
            };

            xhr.onabort = function () {
              reject(new exports.DOMException('Aborted', 'AbortError'));
            };

            xhr.open(request.method, request.url, true);

            if (request.credentials === 'include') {
              xhr.withCredentials = true;
            } else if (request.credentials === 'omit') {
              xhr.withCredentials = false;
            }

            if ('responseType' in xhr && support.blob) {
              xhr.responseType = 'blob';
            }

            request.headers.forEach(function (value, name) {
              xhr.setRequestHeader(name, value);
            });

            if (request.signal) {
              request.signal.addEventListener('abort', abortXhr);

              xhr.onreadystatechange = function () {
                // DONE (success or failure)
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener('abort', abortXhr);
                }
              };
            }

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
          });
        }

        fetch.polyfill = true;

        if (!self.fetch) {
          self.fetch = fetch;
          self.Headers = Headers;
          self.Request = Request;
          self.Response = Response;
        }

        exports.Headers = Headers;
        exports.Request = Request;
        exports.Response = Response;
        exports.fetch = fetch;
        return exports;
      })({});
    })(typeof self !== 'undefined' ? self : commonjsGlobal);

    var browserPolyfill = {};

    var meilisearch_umd = createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory(exports, browserPolyfill) ;
      })(commonjsGlobal, function (exports) {
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
          Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */

        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          };

          return extendStatics(d, b);
        };

        function __extends(d, b) {
          extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
          __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }

        function __generator(thisArg, body) {
          var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          },
              f,
              y,
              t,
              g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;

          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }

          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");

            while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }

            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        }

        var MeiliSearchError =
        /** @class */
        function (_super) {
          __extends(MeiliSearchError, _super);

          function MeiliSearchError(message) {
            var _this = _super.call(this, message) || this;

            _this.name = 'MeiliSearchError';
            _this.type = 'MeiliSearchError';

            if (Error.captureStackTrace) {
              Error.captureStackTrace(_this, MeiliSearchError);
            }

            return _this;
          }

          return MeiliSearchError;
        }(Error);

        var MeiliSearchTimeOutError =
        /** @class */
        function (_super) {
          __extends(MeiliSearchTimeOutError, _super);

          function MeiliSearchTimeOutError(message) {
            var _this = _super.call(this, message) || this;

            _this.name = 'MeiliSearchTimeOutError';
            _this.type = _this.constructor.name;

            if (Error.captureStackTrace) {
              Error.captureStackTrace(_this, MeiliSearchTimeOutError);
            }

            return _this;
          }

          return MeiliSearchTimeOutError;
        }(Error);
        /**
         * Removes undefined entries from object
         */


        function removeUndefinedFromObject(obj) {
          return Object.entries(obj).reduce(function (acc, curEntry) {
            var key = curEntry[0],
                val = curEntry[1];
            if (val !== undefined) acc[key] = val;
            return acc;
          }, {});
        }

        function sleep(ms) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , new Promise(function (resolve) {
                    return setTimeout(resolve, ms);
                  })];

                case 1:
                  return [2
                  /*return*/
                  , _a.sent()];
              }
            });
          });
        }

        var MeiliSearchCommunicationError =
        /** @class */
        function (_super) {
          __extends(MeiliSearchCommunicationError, _super);

          function MeiliSearchCommunicationError(message, body) {
            var _this = _super.call(this, message) || this;

            _this.name = 'MeiliSearchCommunicationError';
            _this.type = 'MeiliSearchCommunicationError';

            if (body instanceof Response) {
              _this.message = body.statusText;
              _this.statusCode = body.status;
            }

            if (body instanceof Error) {
              _this.errno = body.errno;
              _this.code = body.code;
            }

            if (Error.captureStackTrace) {
              Error.captureStackTrace(_this, MeiliSearchCommunicationError);
            }

            return _this;
          }

          return MeiliSearchCommunicationError;
        }(Error);

        var MeiliSearchApiError =
        /** @class */
        function (_super) {
          __extends(class_1, _super);

          function class_1(error, status) {
            var _this = _super.call(this, error.message) || this;

            _this.type = 'MeiliSearchApiError';
            _this.name = 'MeiliSearchApiError';
            _this.errorCode = error.errorCode;
            _this.errorType = error.errorType;
            _this.errorLink = error.errorLink;
            _this.message = error.message;
            _this.httpStatus = status;

            if (Error.captureStackTrace) {
              Error.captureStackTrace(_this, MeiliSearchApiError);
            }

            return _this;
          }

          return class_1;
        }(Error);

        function httpResponseErrorHandler(response) {
          return __awaiter(this, void 0, void 0, function () {
            var err;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!!response.ok) return [3
                  /*break*/
                  , 5];
                  err = void 0;
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , response.json()];

                case 2:
                  err = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  _a.sent();

                  throw new MeiliSearchCommunicationError(response.statusText, response);

                case 4:
                  throw new MeiliSearchApiError(err, response.status);

                case 5:
                  return [2
                  /*return*/
                  , response];
              }
            });
          });
        }

        function httpErrorHandler(response) {
          if (response.type !== 'MeiliSearchApiError') {
            throw new MeiliSearchCommunicationError(response.message, response);
          }

          throw response;
        }

        var HttpRequests =
        /** @class */
        function () {
          function HttpRequests(config) {
            this.headers = __assign(__assign(__assign({}, config.headers || {}), {
              'Content-Type': 'application/json'
            }), config.apiKey ? {
              'X-Meili-API-Key': config.apiKey
            } : {});
            this.url = new URL(config.host);
          }

          HttpRequests.addTrailingSlash = function (url) {
            if (!url.endsWith('/')) {
              url += '/';
            }

            return url;
          };

          HttpRequests.prototype.request = function (_a) {
            var method = _a.method,
                url = _a.url,
                params = _a.params,
                body = _a.body,
                config = _a.config;
            return __awaiter(this, void 0, void 0, function () {
              var constructURL, queryParams_1, response, parsedBody, parsedJson, e_1;
              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _b.trys.push([0, 3,, 4]);

                    constructURL = new URL(url, this.url);

                    if (params) {
                      queryParams_1 = new URLSearchParams();
                      Object.keys(params).filter(function (x) {
                        return params[x] !== null;
                      }).map(function (x) {
                        return queryParams_1.set(x, params[x]);
                      });
                      constructURL.search = queryParams_1.toString();
                    }

                    return [4
                    /*yield*/
                    , fetch(constructURL.toString(), __assign(__assign({}, config), {
                      method: method,
                      body: body ? JSON.stringify(body) : undefined,
                      headers: this.headers
                    })).then(function (res) {
                      return httpResponseErrorHandler(res);
                    })];

                  case 1:
                    response = _b.sent();
                    return [4
                    /*yield*/
                    , response.text()];

                  case 2:
                    parsedBody = _b.sent();

                    try {
                      parsedJson = JSON.parse(parsedBody);
                      return [2
                      /*return*/
                      , parsedJson];
                    } catch (_) {
                      return [2
                      /*return*/
                      ];
                    }

                    return [3
                    /*break*/
                    , 4];

                  case 3:
                    e_1 = _b.sent();
                    httpErrorHandler(e_1);
                    return [3
                    /*break*/
                    , 4];

                  case 4:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          HttpRequests.prototype.get = function (url, params, config) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.request({
                      method: 'GET',
                      url: url,
                      params: params,
                      config: config
                    })];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          HttpRequests.prototype.post = function (url, data, params, config) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.request({
                      method: 'POST',
                      url: url,
                      body: data,
                      params: params,
                      config: config
                    })];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          HttpRequests.prototype.put = function (url, data, params, config) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.request({
                      method: 'PUT',
                      url: url,
                      body: data,
                      params: params,
                      config: config
                    })];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          HttpRequests.prototype["delete"] = function (url, data, params, config) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.request({
                      method: 'DELETE',
                      url: url,
                      body: data,
                      params: params,
                      config: config
                    })];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          return HttpRequests;
        }();
        /*
         * Bundle: MeiliSearch / Indexes
         * Project: MeiliSearch - Javascript API
         * Author: Quentin de Quelen <quentin@meilisearch.com>
         * Copyright: 2019, MeiliSearch
         */


        var Index =
        /** @class */
        function () {
          function Index(config, uid, primaryKey) {
            this.uid = uid;
            this.primaryKey = primaryKey;
            this.httpRequest = new HttpRequests(config);
          } ///
          /// STATIC
          ///


          Index.getApiRoutes = function () {
            return Index.apiRoutes;
          };

          Index.getRouteConstructors = function () {
            return Index.routeConstructors;
          }; ///
          /// UPDATES
          ///

          /**
           * Get the informations about an update status
           * @memberof Index
           * @method getUpdateStatus
           */


          Index.prototype.getUpdateStatus = function (updateId) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getUpdateStatus(this.uid, updateId);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          Index.prototype.waitForPendingUpdate = function (updateId, _a) {
            var _b = _a === void 0 ? {} : _a,
                _c = _b.timeOutMs,
                timeOutMs = _c === void 0 ? 5000 : _c,
                _d = _b.intervalMs,
                intervalMs = _d === void 0 ? 50 : _d;

            return __awaiter(this, void 0, void 0, function () {
              var startingTime, response;
              return __generator(this, function (_e) {
                switch (_e.label) {
                  case 0:
                    startingTime = Date.now();
                    _e.label = 1;

                  case 1:
                    if (!(Date.now() - startingTime < timeOutMs)) return [3
                    /*break*/
                    , 4];
                    return [4
                    /*yield*/
                    , this.getUpdateStatus(updateId)];

                  case 2:
                    response = _e.sent();
                    if (response.status !== 'enqueued') return [2
                    /*return*/
                    , response];
                    return [4
                    /*yield*/
                    , sleep(intervalMs)];

                  case 3:
                    _e.sent();

                    return [3
                    /*break*/
                    , 1];

                  case 4:
                    throw new MeiliSearchTimeOutError("timeout of " + timeOutMs + "ms has exceeded on process " + updateId + " when waiting for pending update to resolve.");
                }
              });
            });
          };
          /**
           * Get the list of all updates
           * @memberof Index
           * @method getAllUpdateStatus
           */


          Index.prototype.getAllUpdateStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getAllUpdateStatus(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// SEARCH
          ///

          /**
           * Search for documents into an index
           * @memberof Index
           * @method search
           */


          Index.prototype.search = function (query, options, method, config) {
            if (method === void 0) {
              method = 'POST';
            }

            return __awaiter(this, void 0, void 0, function () {
              var url, params, getParams;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.search(this.uid);
                    params = {
                      q: query,
                      offset: options === null || options === void 0 ? void 0 : options.offset,
                      limit: options === null || options === void 0 ? void 0 : options.limit,
                      cropLength: options === null || options === void 0 ? void 0 : options.cropLength,
                      filters: options === null || options === void 0 ? void 0 : options.filters,
                      matches: options === null || options === void 0 ? void 0 : options.matches,
                      facetFilters: options === null || options === void 0 ? void 0 : options.facetFilters,
                      facetsDistribution: options === null || options === void 0 ? void 0 : options.facetsDistribution,
                      attributesToRetrieve: options === null || options === void 0 ? void 0 : options.attributesToRetrieve,
                      attributesToCrop: options === null || options === void 0 ? void 0 : options.attributesToCrop,
                      attributesToHighlight: options === null || options === void 0 ? void 0 : options.attributesToHighlight
                    };
                    if (!(method.toUpperCase() === 'POST')) return [3
                    /*break*/
                    , 2];
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, removeUndefinedFromObject(params), undefined, config)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];

                  case 2:
                    if (!(method.toUpperCase() === 'GET')) return [3
                    /*break*/
                    , 4];
                    getParams = __assign(__assign({}, params), {
                      facetFilters: Array.isArray(options === null || options === void 0 ? void 0 : options.facetFilters) && (options === null || options === void 0 ? void 0 : options.facetFilters) ? JSON.stringify(options.facetFilters) : undefined,
                      facetsDistribution: (options === null || options === void 0 ? void 0 : options.facetsDistribution) ? JSON.stringify(options.facetsDistribution) : undefined,
                      attributesToRetrieve: (options === null || options === void 0 ? void 0 : options.attributesToRetrieve) ? options.attributesToRetrieve.join(',') : undefined,
                      attributesToCrop: (options === null || options === void 0 ? void 0 : options.attributesToCrop) ? options.attributesToCrop.join(',') : undefined,
                      attributesToHighlight: (options === null || options === void 0 ? void 0 : options.attributesToHighlight) ? options.attributesToHighlight.join(',') : undefined
                    });
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url, removeUndefinedFromObject(getParams), config)];

                  case 3:
                    return [2
                    /*return*/
                    , _a.sent()];

                  case 4:
                    throw new MeiliSearchError('method parameter should be either POST or GET');
                }
              });
            });
          }; ///
          /// INDEX
          ///

          /**
           * Get index information.
           * @memberof Index
           * @method getRawInfo
           */


          Index.prototype.getRawInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url, res;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.indexRoute(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    res = _a.sent();
                    this.primaryKey = res.primaryKey;
                    return [2
                    /*return*/
                    , res];
                }
              });
            });
          };
          /**
           * Fetch and update Index information.
           * @memberof Index
           * @method fetchInfo
           */


          Index.prototype.fetchInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.getRawInfo()];

                  case 1:
                    _a.sent();

                    return [2
                    /*return*/
                    , this];
                }
              });
            });
          };
          /**
           * Get Primary Key.
           * @memberof Index
           * @method fetchPrimaryKey
           */


          Index.prototype.fetchPrimaryKey = function () {
            return __awaiter(this, void 0, void 0, function () {
              var _a;

              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _a = this;
                    return [4
                    /*yield*/
                    , this.getRawInfo()];

                  case 1:
                    _a.primaryKey = _b.sent().primaryKey;
                    return [2
                    /*return*/
                    , this.primaryKey];
                }
              });
            });
          };
          /**
           * Create an index.
           * @memberof Index
           * @method create
           */


          Index.create = function (config, uid, options) {
            if (options === void 0) {
              options = {};
            }

            return __awaiter(this, void 0, void 0, function () {
              var url, req, index;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.apiRoutes.indexes;
                    req = new HttpRequests(config);
                    return [4
                    /*yield*/
                    , req.post(url, __assign(__assign({}, options), {
                      uid: uid
                    }))];

                  case 1:
                    index = _a.sent();
                    return [2
                    /*return*/
                    , new Index(config, uid, index.primaryKey)];
                }
              });
            });
          };
          /**
           * Update an index.
           * @memberof Index
           * @method update
           */


          Index.prototype.update = function (data) {
            return __awaiter(this, void 0, void 0, function () {
              var url, index;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.update(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.put(url, data)];

                  case 1:
                    index = _a.sent();
                    this.primaryKey = index.primaryKey;
                    return [2
                    /*return*/
                    , this];
                }
              });
            });
          };
          /**
           * Delete an index.
           * @memberof Index
           * @method delete
           */


          Index.prototype["delete"] = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors["delete"](this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// STATS
          ///

          /**
           * get stats of an index
           * @memberof Index
           * @method getStats
           */


          Index.prototype.getStats = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = "/indexes/" + this.uid + "/stats";
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// DOCUMENTS
          ///

          /**
           * get documents of an index
           * @memberof Index
           * @method getDocuments
           */


          Index.prototype.getDocuments = function (options) {
            return __awaiter(this, void 0, void 0, function () {
              var url, attr;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getDocuments(this.uid);

                    if (options !== undefined && Array.isArray(options.attributesToRetrieve)) {
                      attr = options.attributesToRetrieve.join(',');
                    }

                    return [4
                    /*yield*/
                    , this.httpRequest.get(url, __assign(__assign({}, options), attr !== undefined ? {
                      attributesToRetrieve: attr
                    } : {}))];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Get one document
           * @memberof Index
           * @method getDocument
           */


          Index.prototype.getDocument = function (documentId) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getDocument(this.uid, documentId);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Add or replace multiples documents to an index
           * @memberof Index
           * @method addDocuments
           */


          Index.prototype.addDocuments = function (documents, options) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.addDocuments(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, documents, options)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Add or update multiples documents to an index
           * @memberof Index
           * @method updateDocuments
           */


          Index.prototype.updateDocuments = function (documents, options) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateDocuments(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.put(url, documents, options)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Delete one document
           * @memberof Index
           * @method deleteDocument
           */


          Index.prototype.deleteDocument = function (documentId) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.deleteDocument(this.uid, documentId);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Delete multiples documents of an index
           * @memberof Index
           * @method deleteDocuments
           */


          Index.prototype.deleteDocuments = function (documentsIds) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.deleteDocuments(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, documentsIds)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Delete all documents of an index
           * @memberof Index
           * @method deleteAllDocuments
           */


          Index.prototype.deleteAllDocuments = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.deleteAllDocuments(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// SETTINGS
          ///

          /**
           * Retrieve all settings
           * @memberof Index
           * @method getSettings
           */


          Index.prototype.getSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getSettings(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update all settings
           * Any parameters not provided will be left unchanged.
           * @memberof Index
           * @method updateSettings
           */


          Index.prototype.updateSettings = function (settings) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateSettings(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, settings)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset settings.
           * @memberof Index
           * @method resetSettings
           */


          Index.prototype.resetSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetSettings(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// SYNONYMS
          ///

          /**
           * Get the list of all synonyms
           * @memberof Index
           * @method getSynonyms
           */


          Index.prototype.getSynonyms = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getSynonyms(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the list of synonyms. Overwrite the old list.
           * @memberof Index
           * @method updateSynonyms
           */


          Index.prototype.updateSynonyms = function (synonyms) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateSynonyms(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, synonyms)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the synonym list to be empty again
           * @memberof Index
           * @method resetSynonyms
           */


          Index.prototype.resetSynonyms = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetSynonyms(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// STOP WORDS
          ///

          /**
           * Get the list of all stop-words
           * @memberof Index
           * @method getStopWords
           */


          Index.prototype.getStopWords = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getStopWords(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the list of stop-words. Overwrite the old list.
           * @memberof Index
           * @method updateStopWords
           */


          Index.prototype.updateStopWords = function (stopWords) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateStopWords(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, stopWords)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the stop-words list to be empty again
           * @memberof Index
           * @method resetStopWords
           */


          Index.prototype.resetStopWords = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetStopWords(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// RANKING RULES
          ///

          /**
           * Get the list of all ranking-rules
           * @memberof Index
           * @method getRankingRules
           */


          Index.prototype.getRankingRules = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getRankingRules(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the list of ranking-rules. Overwrite the old list.
           * @memberof Index
           * @method updateRankingRules
           */


          Index.prototype.updateRankingRules = function (rankingRules) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateRankingRules(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, rankingRules)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the ranking rules list to its default value
           * @memberof Index
           * @method resetRankingRules
           */


          Index.prototype.resetRankingRules = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetRankingRules(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// DISTINCT ATTRIBUTE
          ///

          /**
           * Get the distinct-attribute
           * @memberof Index
           * @method getDistinctAttribute
           */


          Index.prototype.getDistinctAttribute = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getDistinctAttribute(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the distinct-attribute.
           * @memberof Index
           * @method updateDistinctAttribute
           */


          Index.prototype.updateDistinctAttribute = function (distinctAttribute) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateDistinctAttribute(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, distinctAttribute)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the distinct-attribute.
           * @memberof Index
           * @method resetDistinctAttribute
           */


          Index.prototype.resetDistinctAttribute = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetDistinctAttribute(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// ATTRIBUTES FOR FACETING
          ///

          /**
           * Get the attributes-for-faceting
           * @memberof Index
           * @method getAttributesForFaceting
           */


          Index.prototype.getAttributesForFaceting = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getAttributesForFaceting(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the attributes-for-faceting.
           * @memberof Index
           * @method updateAttributesForFaceting
           */


          Index.prototype.updateAttributesForFaceting = function (attributesForFaceting) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateAttributesForFaceting(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, attributesForFaceting)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the attributes-for-faceting.
           * @memberof Index
           * @method resetAttributesForFaceting
           */


          Index.prototype.resetAttributesForFaceting = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetAttributesForFaceting(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// SEARCHABLE ATTRIBUTE
          ///

          /**
           * Get the searchable-attributes
           * @memberof Index
           * @method getSearchableAttributes
           */


          Index.prototype.getSearchableAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getSearchableAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the searchable-attributes.
           * @memberof Index
           * @method updateSearchableAttributes
           */


          Index.prototype.updateSearchableAttributes = function (searchableAttributes) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateSearchableAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, searchableAttributes)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the searchable-attributes.
           * @memberof Index
           * @method resetSearchableAttributes
           */


          Index.prototype.resetSearchableAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetSearchableAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// DISPLAYED ATTRIBUTE
          ///

          /**
           * Get the displayed-attributes
           * @memberof Index
           * @method getDisplayedAttributes
           */


          Index.prototype.getDisplayedAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.getDisplayedAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update the displayed-attributes.
           * @memberof Index
           * @method updateDisplayedAttributes
           */


          Index.prototype.updateDisplayedAttributes = function (displayedAttributes) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.updateDisplayedAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url, displayedAttributes)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Reset the displayed-attributes.
           * @memberof Index
           * @method resetDisplayedAttributes
           */


          Index.prototype.resetDisplayedAttributes = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = Index.routeConstructors.resetDisplayedAttributes(this.uid);
                    return [4
                    /*yield*/
                    , this.httpRequest["delete"](url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          Index.apiRoutes = {
            indexes: 'indexes'
          };
          Index.routeConstructors = {
            indexRoute: function indexRoute(indexUid) {
              return Index.apiRoutes.indexes + "/" + indexUid;
            },
            getUpdateStatus: function getUpdateStatus(indexUid, updateId) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + ("updates/" + updateId);
            },
            getAllUpdateStatus: function getAllUpdateStatus(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "updates";
            },
            search: function search(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "search";
            },
            getRawInfo: function getRawInfo(indexUid) {
              return "indexes/" + indexUid;
            },
            update: function update(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid);
            },
            "delete": function _delete(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid);
            },
            getStats: function getStats(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "stats";
            },
            getDocument: function getDocument(indexUid, documentId) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + ("documents/" + documentId);
            },
            getDocuments: function getDocuments(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "documents";
            },
            addDocuments: function addDocuments(indexUid) {
              return Index.routeConstructors.getDocuments(indexUid);
            },
            updateDocuments: function updateDocuments(indexUid) {
              return Index.routeConstructors.getDocuments(indexUid);
            },
            deleteAllDocuments: function deleteAllDocuments(indexUid) {
              return Index.routeConstructors.getDocuments(indexUid);
            },
            deleteDocument: function deleteDocument(indexUid, documentId) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + ("documents/" + documentId);
            },
            deleteDocuments: function deleteDocuments(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "documents/delete-batch";
            },
            getSettings: function getSettings(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings";
            },
            updateSettings: function updateSettings(indexUid) {
              return Index.routeConstructors.getSettings(indexUid);
            },
            resetSettings: function resetSettings(indexUid) {
              return Index.routeConstructors.getSettings(indexUid);
            },
            getSynonyms: function getSynonyms(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/synonyms";
            },
            updateSynonyms: function updateSynonyms(indexUid) {
              return Index.routeConstructors.getSynonyms(indexUid);
            },
            resetSynonyms: function resetSynonyms(indexUid) {
              return Index.routeConstructors.getSynonyms(indexUid);
            },
            getStopWords: function getStopWords(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/stop-words";
            },
            updateStopWords: function updateStopWords(indexUid) {
              return Index.routeConstructors.getStopWords(indexUid);
            },
            resetStopWords: function resetStopWords(indexUid) {
              return Index.routeConstructors.getStopWords(indexUid);
            },
            getRankingRules: function getRankingRules(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/ranking-rules";
            },
            updateRankingRules: function updateRankingRules(indexUid) {
              return Index.routeConstructors.getRankingRules(indexUid);
            },
            resetRankingRules: function resetRankingRules(indexUid) {
              return Index.routeConstructors.getRankingRules(indexUid);
            },
            getDistinctAttribute: function getDistinctAttribute(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/distinct-attribute";
            },
            updateDistinctAttribute: function updateDistinctAttribute(indexUid) {
              return Index.routeConstructors.getDistinctAttribute(indexUid);
            },
            resetDistinctAttribute: function resetDistinctAttribute(indexUid) {
              return Index.routeConstructors.getDistinctAttribute(indexUid);
            },
            getAttributesForFaceting: function getAttributesForFaceting(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/attributes-for-faceting";
            },
            updateAttributesForFaceting: function updateAttributesForFaceting(indexUid) {
              return Index.routeConstructors.getAttributesForFaceting(indexUid);
            },
            resetAttributesForFaceting: function resetAttributesForFaceting(indexUid) {
              return Index.routeConstructors.getAttributesForFaceting(indexUid);
            },
            getSearchableAttributes: function getSearchableAttributes(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/searchable-attributes";
            },
            updateSearchableAttributes: function updateSearchableAttributes(indexUid) {
              return Index.routeConstructors.getSearchableAttributes(indexUid);
            },
            resetSearchableAttributes: function resetSearchableAttributes(indexUid) {
              return Index.routeConstructors.getSearchableAttributes(indexUid);
            },
            getDisplayedAttributes: function getDisplayedAttributes(indexUid) {
              return Index.routeConstructors.indexRoute(indexUid) + '/' + "settings/displayed-attributes";
            },
            updateDisplayedAttributes: function updateDisplayedAttributes(indexUid) {
              return Index.routeConstructors.getDisplayedAttributes(indexUid);
            },
            resetDisplayedAttributes: function resetDisplayedAttributes(indexUid) {
              return Index.routeConstructors.getDisplayedAttributes(indexUid);
            }
          };
          return Index;
        }();
        /*
         * Bundle: MeiliSearch
         * Project: MeiliSearch - Javascript API
         * Author: Quentin de Quelen <quentin@meilisearch.com>
         * Copyright: 2019, MeiliSearch
         */


        var MeiliSearch =
        /** @class */
        function () {
          function MeiliSearch(config) {
            config.host = HttpRequests.addTrailingSlash(config.host);
            this.config = config;
            this.httpRequest = new HttpRequests(config);
          }

          MeiliSearch.getApiRoutes = function () {
            return MeiliSearch.apiRoutes;
          };

          MeiliSearch.getRouteConstructors = function () {
            return MeiliSearch.routeConstructors;
          };
          /**
           * Return an Index instance
           * @memberof MeiliSearch
           * @method index
           */


          MeiliSearch.prototype.index = function (indexUid) {
            return new Index(this.config, indexUid);
          };
          /**
           * Gather information about an index by calling MeiliSearch and
           * return an Index instance with the gathered information
           * @memberof MeiliSearch
           * @method getIndex
           */


          MeiliSearch.prototype.getIndex = function (indexUid) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2
                /*return*/
                , new Index(this.config, indexUid).fetchInfo()];
              });
            });
          };
          /**
           * Get an index or create it if it does not exist
           * @memberof MeiliSearch
           * @method getOrCreateIndex
           */


          MeiliSearch.prototype.getOrCreateIndex = function (uid, options) {
            if (options === void 0) {
              options = {};
            }

            return __awaiter(this, void 0, void 0, function () {
              var index, e_1;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2,, 3]);

                    return [4
                    /*yield*/
                    , this.getIndex(uid)];

                  case 1:
                    index = _a.sent();
                    return [2
                    /*return*/
                    , index];

                  case 2:
                    e_1 = _a.sent();

                    if (e_1.errorCode === 'index_not_found') {
                      return [2
                      /*return*/
                      , this.createIndex(uid, options)];
                    }

                    throw new MeiliSearchApiError(e_1, e_1.status);

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };
          /**
           * List all indexes in the database
           * @memberof MeiliSearch
           * @method listIndexes
           */


          MeiliSearch.prototype.listIndexes = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.apiRoutes.listIndexes;
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Create a new index
           * @memberof MeiliSearch
           * @method createIndex
           */


          MeiliSearch.prototype.createIndex = function (uid, options) {
            if (options === void 0) {
              options = {};
            }

            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , Index.create(this.config, uid, options)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Update an index
           * @memberof MeiliSearch
           * @method updateIndex
           */


          MeiliSearch.prototype.updateIndex = function (uid, options) {
            if (options === void 0) {
              options = {};
            }

            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2
                /*return*/
                , new Index(this.config, uid).update(options)];
              });
            });
          };
          /**
           * Delete an index
           * @memberof MeiliSearch
           * @method deleteIndex
           */


          MeiliSearch.prototype.deleteIndex = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2
                /*return*/
                , new Index(this.config, uid)["delete"]()];
              });
            });
          }; ///
          /// KEYS
          ///

          /**
           * Get private and public key
           * @memberof MeiliSearch
           * @method getKey
           */


          MeiliSearch.prototype.getKeys = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.apiRoutes.getKeys;
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// HEALTH
          ///

          /**
           * Checks if the server is healthy, otherwise an error will be thrown.
           *
           * @memberof MeiliSearch
           * @method isHealthy
           */


          MeiliSearch.prototype.isHealthy = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.httpRequest.get(MeiliSearch.apiRoutes.isHealthy).then(function () {
                      return true;
                    })];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// STATS
          ///

          /**
           * Get the stats of all the database
           * @memberof MeiliSearch
           * @method stats
           */


          MeiliSearch.prototype.stats = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.apiRoutes.stats;
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Get the version of MeiliSearch
           * @memberof MeiliSearch
           * @method version
           */


          MeiliSearch.prototype.version = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.apiRoutes.version;
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }; ///
          /// DUMPS
          ///

          /**
           * Triggers a dump creation process
           * @memberof MeiliSearch
           * @method createDump
           */


          MeiliSearch.prototype.createDump = function () {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.apiRoutes.createDump;
                    return [4
                    /*yield*/
                    , this.httpRequest.post(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };
          /**
           * Get the status of a dump creation process
           * @memberof MeiliSearch
           * @method getDumpStatus
           */


          MeiliSearch.prototype.getDumpStatus = function (dumpUid) {
            return __awaiter(this, void 0, void 0, function () {
              var url;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    url = MeiliSearch.routeConstructors.getDumpStatus(dumpUid);
                    return [4
                    /*yield*/
                    , this.httpRequest.get(url)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          MeiliSearch.apiRoutes = {
            listIndexes: 'indexes',
            getKeys: 'keys',
            isHealthy: 'health',
            stats: 'stats',
            version: 'version',
            createDump: 'dumps'
          };
          MeiliSearch.routeConstructors = {
            getDumpStatus: function getDumpStatus(dumpUid) {
              return "dumps/" + dumpUid + "/status";
            }
          };
          return MeiliSearch;
        }();

        exports.MeiliSearch = MeiliSearch;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
    });

    var adaptToMeiliSearchParams = function (_a, _b) {
        var query = _a.query, facets = _a.facets, facetFilters = _a.facetFilters, attributesToCrop = _a.attributesToSnippet, attributesToRetrieve = _a.attributesToRetrieve, attributesToHighlight = _a.attributesToHighlight, _c = _a.filters, filters = _c === void 0 ? '' : _c, _d = _a.numericFilters, numericFilters = _d === void 0 ? [] : _d;
        var paginationTotalHits = _b.paginationTotalHits, placeholderSearch = _b.placeholderSearch;
        var limit = paginationTotalHits;
        var filter = [numericFilters.join(' AND '), filters.trim()]
            .filter(function (x) { return x; })
            .join(' AND ')
            .trim();
        // Creates search params object compliant with MeiliSearch
        return __assign(__assign(__assign(__assign(__assign(__assign({ q: query }, ((facets === null || facets === void 0 ? void 0 : facets.length) && { facetsDistribution: facets })), (facetFilters && { facetFilters: facetFilters })), (attributesToCrop && { attributesToCrop: attributesToCrop })), (attributesToRetrieve && { attributesToRetrieve: attributesToRetrieve })), (filter && { filters: filter })), { attributesToHighlight: attributesToHighlight || ['*'], limit: (!placeholderSearch && query === '') || !limit ? 0 : limit });
    };

    var getNumberPages = function (hitsLength, _a) {
        var hitsPerPage = _a.hitsPerPage;
        if (hitsPerPage > 0) {
            var NumberPages = Math.ceil(hitsLength / hitsPerPage); // total number of pages rounded up to the next largest integer.
            return NumberPages;
        }
        return 0;
    };
    var paginateHits = function (hits, _a) {
        var page = _a.page, hitsPerPage = _a.hitsPerPage;
        var start = page * hitsPerPage;
        return hits.splice(start, hitsPerPage);
    };

    function isString(str) {
        return typeof str === 'string' || str instanceof String;
    }

    var replaceHighlightTags = function (value, highlightPreTag, highlightPostTag) {
        // Value has to be a string to have highlight.
        // Highlight is applied by MeiliSearch (<em> tags)
        // We replace the <em> by the expected tag for InstantSearch
        highlightPreTag = highlightPreTag || '__ais-highlight__';
        highlightPostTag = highlightPostTag || '__/ais-highlight__';
        if (isString(value)) {
            return value
                .replace(/<em>/g, highlightPreTag)
                .replace(/<\/em>/g, highlightPostTag);
        }
        // We JSON stringify to avoid loss of nested information
        return JSON.stringify(value);
    };
    var createHighlighResult = function (_a) {
        var formattedHit = _a.formattedHit, highlightPreTag = _a.highlightPreTag, highlightPostTag = _a.highlightPostTag;
        // formattedHit is the `_formatted` object returned by MeiliSearch.
        // It contains all the highlighted and croped attributes
        return Object.keys(formattedHit).reduce(function (result, key) {
            result[key] = {
                value: replaceHighlightTags(formattedHit[key], highlightPreTag, highlightPostTag),
            };
            return result;
        }, {});
    };
    var snippetValue = function (value, snippetEllipsisText, highlightPreTag, highlightPostTag) {
        var newValue = value;
        // manage a kind of `...` for the crop until this issue is solved: https://github.com/meilisearch/MeiliSearch/issues/923
        // `...` is put if we are at the middle of a sentence (instead at the middle of the document field)
        if (snippetEllipsisText !== undefined && isString(newValue) && newValue) {
            if (newValue[0] === newValue[0].toLowerCase() && // beginning of a sentence
                newValue.startsWith('<em>') === false // beginning of the document field, otherwise MeiliSearch would crop around the highligh
            ) {
                newValue = "" + snippetEllipsisText + newValue;
            }
            if (!!newValue.match(/[.!?]$/) === false) {
                // end of the sentence
                newValue = "" + newValue + snippetEllipsisText;
            }
        }
        return replaceHighlightTags(newValue, highlightPreTag, highlightPostTag);
    };
    var createSnippetResult = function (_a) {
        var formattedHit = _a.formattedHit, attributesToSnippet = _a.attributesToSnippet, snippetEllipsisText = _a.snippetEllipsisText, highlightPreTag = _a.highlightPreTag, highlightPostTag = _a.highlightPostTag;
        if (attributesToSnippet === undefined) {
            return null;
        }
        attributesToSnippet = attributesToSnippet.map(function (attribute) { return attribute.split(':')[0]; });
        // formattedHit is the `_formatted` object returned by MeiliSearch.
        // It contains all the highlighted and croped attributes
        return Object.keys(formattedHit).reduce(function (result, key) {
            if (attributesToSnippet.includes(key)) {
                result[key] = {
                    value: snippetValue(formattedHit[key], snippetEllipsisText, highlightPreTag, highlightPostTag),
                };
            }
            return result;
        }, {});
    };

    var adaptToISHits = function (meiliSearchHits, instantSearchParams, instantMeiliSearchContext) {
        var primaryKey = instantMeiliSearchContext.primaryKey;
        var paginatedHits = paginateHits(meiliSearchHits, instantMeiliSearchContext);
        return paginatedHits.map(function (hit) {
            // Creates Hit object compliant with InstantSearch
            if (Object.keys(hit).length > 0) {
                var formattedHit = hit._formatted; hit._matchesInfo; var restOfHit = __rest(hit, ["_formatted", "_matchesInfo"]);
                return __assign(__assign(__assign({}, restOfHit), { _highlightResult: createHighlighResult(__assign({ formattedHit: formattedHit }, instantSearchParams)), _snippetResult: createSnippetResult(__assign({ formattedHit: formattedHit }, instantSearchParams)) }), (primaryKey && { objectID: hit[primaryKey] }));
            }
            return hit;
        });
    };

    var adaptToISResponse = function (indexUid, _a, instantSearchParams, instantMeiliSearchContext) {
        var exhaustiveFacetsCount = _a.exhaustiveFacetsCount, exhaustiveNbHits = _a.exhaustiveNbHits, facets = _a.facetsDistribution, nbHits = _a.nbHits, processingTimeMs = _a.processingTimeMs, query = _a.query, hits = _a.hits;
        // Create response object compliant with InstantSearch
        var hitsPerPage = instantMeiliSearchContext.hitsPerPage, page = instantMeiliSearchContext.page;
        var ISResponse = __assign(__assign(__assign({ index: indexUid, hitsPerPage: hitsPerPage }, (facets && { facets: facets })), (exhaustiveFacetsCount && { exhaustiveFacetsCount: exhaustiveFacetsCount })), { page: page, nbPages: getNumberPages(hits.length, instantMeiliSearchContext), exhaustiveNbHits: exhaustiveNbHits,
            nbHits: nbHits, processingTimeMS: processingTimeMs, query: query, hits: adaptToISHits(hits, instantSearchParams, instantMeiliSearchContext) });
        return {
            results: [ISResponse],
        };
    };

    function instantMeiliSearch(hostUrl, apiKey, options) {
        if (options === void 0) { options = {}; }
        return {
            MeiliSearchClient: new meilisearch_umd.MeiliSearch({ host: hostUrl, apiKey: apiKey }),
            search: function (_a) {
                var isSearchRequest = _a[0];
                return __awaiter(this, void 0, void 0, function () {
                    var instantSearchParams, indexUid, paginationTotalHits, primaryKey, placeholderSearch, page, hitsPerPage, client, context, msSearchParams, searchResponse, ISresponse, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                instantSearchParams = isSearchRequest.params, indexUid = isSearchRequest.indexName;
                                paginationTotalHits = options.paginationTotalHits, primaryKey = options.primaryKey, placeholderSearch = options.placeholderSearch;
                                page = instantSearchParams.page, hitsPerPage = instantSearchParams.hitsPerPage;
                                client = this.MeiliSearchClient;
                                context = {
                                    client: client,
                                    paginationTotalHits: paginationTotalHits || 200,
                                    primaryKey: primaryKey || undefined,
                                    placeholderSearch: placeholderSearch !== false,
                                    hitsPerPage: hitsPerPage === undefined ? 20 : hitsPerPage,
                                    page: page || 0, // default page is 0 if none is provided
                                };
                                msSearchParams = adaptToMeiliSearchParams(instantSearchParams, context);
                                return [4 /*yield*/, client
                                        .index(indexUid)
                                        .search(msSearchParams.q, msSearchParams)
                                    // Parses the MeiliSearch response and returns it for InstantSearch
                                ];
                            case 1:
                                searchResponse = _b.sent();
                                ISresponse = adaptToISResponse(indexUid, searchResponse, instantSearchParams, context);
                                return [2 /*return*/, ISresponse];
                            case 2:
                                e_1 = _b.sent();
                                console.error(e_1);
                                throw new Error(e_1);
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
        };
    }

    exports.adaptToISHits = adaptToISHits;
    exports.adaptToISResponse = adaptToISResponse;
    exports.adaptToMeiliSearchParams = adaptToMeiliSearchParams;
    exports.createHighlighResult = createHighlighResult;
    exports.createSnippetResult = createSnippetResult;
    exports.getNumberPages = getNumberPages;
    exports.instantMeiliSearch = instantMeiliSearch;
    exports.isString = isString;
    exports.paginateHits = paginateHits;
    exports.replaceHighlightTags = replaceHighlightTags;
    exports.snippetValue = snippetValue;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],"src/app.js":[function(require,module,exports) {
"use strict";

var _instantMeilisearch = require("@meilisearch/instant-meilisearch");

/* global algoliasearch instantsearch 

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

const search = instantsearch({
  indexName: 'instant_search',
  searchClient,
});

*/
var search = instantsearch({
  indexName: 'datasets',
  searchClient: (0, _instantMeilisearch.instantMeiliSearch)('http://35.232.184.215', '0c03cdf5572a83db2a9d90bb9003ca6fcc47d9ab06c3330b41709bb4138a981b', {
    paginationTotalHits: 200 // default: 200.

  })
});
var hitTemplate = '<div class="hit media">' + '<div class="media-left">' + // '<div class="media-object" style="background-image: url(\'{{image}}\');"></div>' +
'</div>' + '<div class="media-body">' + '<h4 class="media-heading"> <a href="{{#helpers.highlight}}{"attribute": "link"}{{/helpers.highlight}}">{{#helpers.highlight}} { "attribute": "name" }{{/helpers.highlight}} </a></h4>' + '<h3 class="media-heading">Class: {{#helpers.highlight}}{ "attribute": "classes" }{{/helpers.highlight}} </h3>' + '<p class="year">Description: {{description}}</p>' + '</div>' + '</div>';
var noResultsTemplate = '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';
search.addWidgets([instantsearch.widgets.searchBox({
  container: '#searchbox',
  showReset: false,
  cssClasses: {
    root: 'root',
    form: 'form',
    input: 'input form-control',
    submit: 'btn btn-default',
    reset: 'btn btn-default'
  }
}), instantsearch.widgets.hits({
  container: '#hits',
  templates: {
    empty: noResultsTemplate,
    item: hitTemplate
  },
  cssClasses: {
    list: 'list'
  }
}), instantsearch.widgets.pagination({
  container: '#pagination',
  cssClasses: {
    root: 'root',
    list: 'pagination',
    disabledItem: 'disabledItem',
    selectedItem: 'selectedItem'
  }
}), instantsearch.widgets.refinementList({
  container: '#refinement-list',
  attribute: 'name',
  operator: 'or',
  showMore: true,
  showMoreLimit: 40,
  cssClasses: {
    list: 'nav nav-list',
    count: 'badge pull-right',
    selectedItem: 'active',
    item: 'item'
  }
})]);
search.start();
},{"@meilisearch/instant-meilisearch":"node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59241" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.js.map