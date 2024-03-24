"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/throttle-debounce";
exports.ids = ["vendor-chunks/throttle-debounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce),\n/* harmony export */   throttle: () => (/* binding */ throttle)\n/* harmony export */ });\n/* eslint-disable no-undefined,no-param-reassign,no-shadow */\n\n/**\n * Throttle execution of a function. Especially useful for rate limiting\n * execution of handlers on events like resize and scroll.\n *\n * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)\n *                                            are most useful.\n * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,\n *                                            as-is, to `callback` when the throttled-function is executed.\n * @param {object} [options] -              An object to configure options.\n * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds\n *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed\n *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for\n *                                            `delay` milliseconds, the internal counter is reset).\n * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback\n *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that\n *                                            callback will never executed if both noLeading = true and noTrailing = true.\n * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is\n *                                            false (at end), schedule `callback` to execute after `delay` ms.\n *\n * @returns {Function} A new, throttled, function.\n */\nfunction throttle (delay, callback, options) {\n  var _ref = options || {},\n      _ref$noTrailing = _ref.noTrailing,\n      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,\n      _ref$noLeading = _ref.noLeading,\n      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,\n      _ref$debounceMode = _ref.debounceMode,\n      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;\n  /*\n   * After wrapper has stopped being called, this timeout ensures that\n   * `callback` is executed at the proper times in `throttle` and `end`\n   * debounce modes.\n   */\n\n\n  var timeoutID;\n  var cancelled = false; // Keep track of the last time `callback` was executed.\n\n  var lastExec = 0; // Function to clear existing timeout\n\n  function clearExistingTimeout() {\n    if (timeoutID) {\n      clearTimeout(timeoutID);\n    }\n  } // Function to cancel next exec\n\n\n  function cancel(options) {\n    var _ref2 = options || {},\n        _ref2$upcomingOnly = _ref2.upcomingOnly,\n        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;\n\n    clearExistingTimeout();\n    cancelled = !upcomingOnly;\n  }\n  /*\n   * The `wrapper` function encapsulates all of the throttling / debouncing\n   * functionality and when executed will limit the rate at which `callback`\n   * is executed.\n   */\n\n\n  function wrapper() {\n    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {\n      arguments_[_key] = arguments[_key];\n    }\n\n    var self = this;\n    var elapsed = Date.now() - lastExec;\n\n    if (cancelled) {\n      return;\n    } // Execute `callback` and update the `lastExec` timestamp.\n\n\n    function exec() {\n      lastExec = Date.now();\n      callback.apply(self, arguments_);\n    }\n    /*\n     * If `debounceMode` is true (at begin) this is used to clear the flag\n     * to allow future `callback` executions.\n     */\n\n\n    function clear() {\n      timeoutID = undefined;\n    }\n\n    if (!noLeading && debounceMode && !timeoutID) {\n      /*\n       * Since `wrapper` is being called for the first time and\n       * `debounceMode` is true (at begin), execute `callback`\n       * and noLeading != true.\n       */\n      exec();\n    }\n\n    clearExistingTimeout();\n\n    if (debounceMode === undefined && elapsed > delay) {\n      if (noLeading) {\n        /*\n         * In throttle mode with noLeading, if `delay` time has\n         * been exceeded, update `lastExec` and schedule `callback`\n         * to execute after `delay` ms.\n         */\n        lastExec = Date.now();\n\n        if (!noTrailing) {\n          timeoutID = setTimeout(debounceMode ? clear : exec, delay);\n        }\n      } else {\n        /*\n         * In throttle mode without noLeading, if `delay` time has been exceeded, execute\n         * `callback`.\n         */\n        exec();\n      }\n    } else if (noTrailing !== true) {\n      /*\n       * In trailing throttle mode, since `delay` time has not been\n       * exceeded, schedule `callback` to execute `delay` ms after most\n       * recent execution.\n       *\n       * If `debounceMode` is true (at begin), schedule `clear` to execute\n       * after `delay` ms.\n       *\n       * If `debounceMode` is false (at end), schedule `callback` to\n       * execute after `delay` ms.\n       */\n      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);\n    }\n  }\n\n  wrapper.cancel = cancel; // Return the wrapper function.\n\n  return wrapper;\n}\n\n/* eslint-disable no-undefined */\n/**\n * Debounce execution of a function. Debouncing, unlike throttling,\n * guarantees that a function is only executed a single time, either at the\n * very beginning of a series of calls, or at the very end.\n *\n * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n *                                        to `callback` when the debounced-function is executed.\n * @param {object} [options] -           An object to configure options.\n * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds\n *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.\n *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).\n *\n * @returns {Function} A new, debounced function.\n */\n\nfunction debounce (delay, callback, options) {\n  var _ref = options || {},\n      _ref$atBegin = _ref.atBegin,\n      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;\n\n  return throttle(delay, callback, {\n    debounceMode: atBegin !== false\n  });\n}\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGhyb3R0bGUtZGVib3VuY2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlCQUF5Qjs7QUFFekIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw4RUFBOEUsYUFBYTtBQUMzRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUU4QjtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2VzbS9pbmRleC5qcz8wYTgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSAgICAgICAgICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtICAgICAgICAgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMtaXMsIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtICAgICAgICAgICAgICBBbiBvYmplY3QgdG8gY29uZmlndXJlIG9wdGlvbnMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5vVHJhaWxpbmddIC0gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZSBmaW5hbCB0aW1lIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5vTGVhZGluZ10gLSAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9MZWFkaW5nIGlzIGZhbHNlLCB0aGUgZmlyc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwgd2lsbCBleGVjdXRlIGNhbGxiYWNrXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZWRpYXRlbHkuIElmIG5vTGVhZGluZyBpcyB0cnVlLCB0aGUgZmlyc3QgdGhlIGNhbGxiYWNrIGV4ZWN1dGlvbiB3aWxsIGJlIHNraXBwZWQuIEl0IHNob3VsZCBiZSBub3RlZCB0aGF0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgd2lsbCBuZXZlciBleGVjdXRlZCBpZiBib3RoIG5vTGVhZGluZyA9IHRydWUgYW5kIG5vVHJhaWxpbmcgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWJvdW5jZU1vZGVdIC0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUgKGRlbGF5LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgX3JlZiA9IG9wdGlvbnMgfHwge30sXG4gICAgICBfcmVmJG5vVHJhaWxpbmcgPSBfcmVmLm5vVHJhaWxpbmcsXG4gICAgICBub1RyYWlsaW5nID0gX3JlZiRub1RyYWlsaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkbm9UcmFpbGluZyxcbiAgICAgIF9yZWYkbm9MZWFkaW5nID0gX3JlZi5ub0xlYWRpbmcsXG4gICAgICBub0xlYWRpbmcgPSBfcmVmJG5vTGVhZGluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG5vTGVhZGluZyxcbiAgICAgIF9yZWYkZGVib3VuY2VNb2RlID0gX3JlZi5kZWJvdW5jZU1vZGUsXG4gICAgICBkZWJvdW5jZU1vZGUgPSBfcmVmJGRlYm91bmNlTW9kZSA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZiRkZWJvdW5jZU1vZGU7XG4gIC8qXG4gICAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG4gICAqIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuICAgKiBkZWJvdW5jZSBtb2Rlcy5cbiAgICovXG5cblxuICB2YXIgdGltZW91dElEO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuICB2YXIgbGFzdEV4ZWMgPSAwOyAvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgfVxuICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG4gIGZ1bmN0aW9uIGNhbmNlbChvcHRpb25zKSB7XG4gICAgdmFyIF9yZWYyID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgX3JlZjIkdXBjb21pbmdPbmx5ID0gX3JlZjIudXBjb21pbmdPbmx5LFxuICAgICAgICB1cGNvbWluZ09ubHkgPSBfcmVmMiR1cGNvbWluZ09ubHkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkdXBjb21pbmdPbmx5O1xuXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcbiAgICBjYW5jZWxsZWQgPSAhdXBjb21pbmdPbmx5O1xuICB9XG4gIC8qXG4gICAqIFRoZSBgd3JhcHBlcmAgZnVuY3Rpb24gZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgdGhyb3R0bGluZyAvIGRlYm91bmNpbmdcbiAgICogZnVuY3Rpb25hbGl0eSBhbmQgd2hlbiBleGVjdXRlZCB3aWxsIGxpbWl0IHRoZSByYXRlIGF0IHdoaWNoIGBjYWxsYmFja2BcbiAgICogaXMgZXhlY3V0ZWQuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzXyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3VtZW50c19bX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXG5cbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJndW1lbnRzXyk7XG4gICAgfVxuICAgIC8qXG4gICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuICAgICAqIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGltZW91dElEID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghbm9MZWFkaW5nICYmIGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XG4gICAgICAvKlxuICAgICAgICogU2luY2UgYHdyYXBwZXJgIGlzIGJlaW5nIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG4gICAgICAgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYFxuICAgICAgICogYW5kIG5vTGVhZGluZyAhPSB0cnVlLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfVxuXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuICAgIGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcbiAgICAgIGlmIChub0xlYWRpbmcpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogSW4gdGhyb3R0bGUgbW9kZSB3aXRoIG5vTGVhZGluZywgaWYgYGRlbGF5YCB0aW1lIGhhc1xuICAgICAgICAgKiBiZWVuIGV4Y2VlZGVkLCB1cGRhdGUgYGxhc3RFeGVjYCBhbmQgc2NoZWR1bGUgYGNhbGxiYWNrYFxuICAgICAgICAgKiB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0RXhlYyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKCFub1RyYWlsaW5nKSB7XG4gICAgICAgICAgdGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLypcbiAgICAgICAgICogSW4gdGhyb3R0bGUgbW9kZSB3aXRob3V0IG5vTGVhZGluZywgaWYgYGRlbGF5YCB0aW1lIGhhcyBiZWVuIGV4Y2VlZGVkLCBleGVjdXRlXG4gICAgICAgICAqIGBjYWxsYmFja2AuXG4gICAgICAgICAqL1xuICAgICAgICBleGVjKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub1RyYWlsaW5nICE9PSB0cnVlKSB7XG4gICAgICAvKlxuICAgICAgICogSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuICAgICAgICogZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3RcbiAgICAgICAqIHJlY2VudCBleGVjdXRpb24uXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcbiAgICAgICAqIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cbiAgICAgICAqIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqL1xuICAgICAgdGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHdyYXBwZXIuY2FuY2VsID0gY2FuY2VsOyAvLyBSZXR1cm4gdGhlIHdyYXBwZXIgZnVuY3Rpb24uXG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuLyoqXG4gKiBEZWJvdW5jZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRGVib3VuY2luZywgdW5saWtlIHRocm90dGxpbmcsXG4gKiBndWFyYW50ZWVzIHRoYXQgYSBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIGEgc2luZ2xlIHRpbWUsIGVpdGhlciBhdCB0aGVcbiAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gICAgICAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gICAgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gICAgICAgICAgIEFuIG9iamVjdCB0byBjb25maWd1cmUgb3B0aW9ucy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXRCZWdpbl0gLSAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZSAoZGVsYXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgIF9yZWYkYXRCZWdpbiA9IF9yZWYuYXRCZWdpbixcbiAgICAgIGF0QmVnaW4gPSBfcmVmJGF0QmVnaW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhdEJlZ2luO1xuXG4gIHJldHVybiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIHtcbiAgICBkZWJvdW5jZU1vZGU6IGF0QmVnaW4gIT09IGZhbHNlXG4gIH0pO1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/throttle-debounce/esm/index.js\n");

/***/ })

};
;