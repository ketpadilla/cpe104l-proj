/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/enquire.js";
exports.ids = ["vendor-chunks/enquire.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var QueryHandler = __webpack_require__(/*! ./QueryHandler */ \"(ssr)/./node_modules/enquire.js/src/QueryHandler.js\");\nvar each = (__webpack_require__(/*! ./Util */ \"(ssr)/./node_modules/enquire.js/src/Util.js\").each);\n\n/**\n * Represents a single media query, manages it's state and registered handlers for this query\n *\n * @constructor\n * @param {string} query the media query string\n * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design\n */\nfunction MediaQuery(query, isUnconditional) {\n    this.query = query;\n    this.isUnconditional = isUnconditional;\n    this.handlers = [];\n    this.mql = window.matchMedia(query);\n\n    var self = this;\n    this.listener = function(mql) {\n        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly\n        self.mql = mql.currentTarget || mql;\n        self.assess();\n    };\n    this.mql.addListener(this.listener);\n}\n\nMediaQuery.prototype = {\n\n    constuctor : MediaQuery,\n\n    /**\n     * add a handler for this query, triggering if already active\n     *\n     * @param {object} handler\n     * @param {function} handler.match callback for when query is activated\n     * @param {function} [handler.unmatch] callback for when query is deactivated\n     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered\n     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?\n     */\n    addHandler : function(handler) {\n        var qh = new QueryHandler(handler);\n        this.handlers.push(qh);\n\n        this.matches() && qh.on();\n    },\n\n    /**\n     * removes the given handler from the collection, and calls it's destroy methods\n     *\n     * @param {object || function} handler the handler to remove\n     */\n    removeHandler : function(handler) {\n        var handlers = this.handlers;\n        each(handlers, function(h, i) {\n            if(h.equals(handler)) {\n                h.destroy();\n                return !handlers.splice(i,1); //remove from array and exit each early\n            }\n        });\n    },\n\n    /**\n     * Determine whether the media query should be considered a match\n     *\n     * @return {Boolean} true if media query can be considered a match, false otherwise\n     */\n    matches : function() {\n        return this.mql.matches || this.isUnconditional;\n    },\n\n    /**\n     * Clears all handlers and unbinds events\n     */\n    clear : function() {\n        each(this.handlers, function(handler) {\n            handler.destroy();\n        });\n        this.mql.removeListener(this.listener);\n        this.handlers.length = 0; //clear array\n    },\n\n    /*\n        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match\n        */\n    assess : function() {\n        var action = this.matches() ? 'on' : 'off';\n\n        each(this.handlers, function(handler) {\n            handler[action]();\n        });\n    }\n};\n\nmodule.exports = MediaQuery;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsbUJBQU8sQ0FBQywyRUFBZ0I7QUFDM0MsV0FBVyx1RkFBc0I7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtDQUFrQztBQUNsQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm92ZXJvLW5leHQvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeS5qcz9mZDU2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBRdWVyeUhhbmRsZXIgPSByZXF1aXJlKCcuL1F1ZXJ5SGFuZGxlcicpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL1V0aWwnKS5lYWNoO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgbWVkaWEgcXVlcnksIG1hbmFnZXMgaXQncyBzdGF0ZSBhbmQgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3IgdGhpcyBxdWVyeVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBtZWRpYSBxdWVyeSBzdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzVW5jb25kaXRpb25hbD1mYWxzZV0gd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIHJ1biByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGNvbmRpdGlvbnMgYXJlIG1ldC4gUHJpbWFyaWx5IGZvciBoZWxwaW5nIG9sZGVyIGJyb3dzZXJzIGRlYWwgd2l0aCBtb2JpbGUtZmlyc3QgZGVzaWduXG4gKi9cbmZ1bmN0aW9uIE1lZGlhUXVlcnkocXVlcnksIGlzVW5jb25kaXRpb25hbCkge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmlzVW5jb25kaXRpb25hbCA9IGlzVW5jb25kaXRpb25hbDtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICAvLyBDaHJvbWUgcGFzc2VzIGFuIE1lZGlhUXVlcnlMaXN0RXZlbnQgb2JqZWN0LCB3aGlsZSBvdGhlciBicm93c2VycyBwYXNzIE1lZGlhUXVlcnlMaXN0IGRpcmVjdGx5XG4gICAgICAgIHNlbGYubXFsID0gbXFsLmN1cnJlbnRUYXJnZXQgfHwgbXFsO1xuICAgICAgICBzZWxmLmFzc2VzcygpO1xuICAgIH07XG4gICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG59XG5cbk1lZGlhUXVlcnkucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3R1Y3RvciA6IE1lZGlhUXVlcnksXG5cbiAgICAvKipcbiAgICAgKiBhZGQgYSBoYW5kbGVyIGZvciB0aGlzIHF1ZXJ5LCB0cmlnZ2VyaW5nIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgZGVhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbaGFuZGxlci5zZXR1cF0gY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSBleGVjdXRpb24gd2hlbiBhIHF1ZXJ5IGhhbmRsZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhbmRsZXIuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgaGFuZGxlciBpcyBtYXRjaGVkP1xuICAgICAqL1xuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxaCA9IG5ldyBRdWVyeUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChxaCk7XG5cbiAgICAgICAgdGhpcy5tYXRjaGVzKCkgJiYgcWgub24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyB0aGUgZ2l2ZW4gaGFuZGxlciBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgY2FsbHMgaXQncyBkZXN0cm95IG1ldGhvZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBoYW5kbGVyIHRoZSBoYW5kbGVyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZUhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnM7XG4gICAgICAgIGVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uKGgsIGkpIHtcbiAgICAgICAgICAgIGlmKGguZXF1YWxzKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFoYW5kbGVycy5zcGxpY2UoaSwxKTsgLy9yZW1vdmUgZnJvbSBhcnJheSBhbmQgZXhpdCBlYWNoIGVhcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbWVkaWEgcXVlcnkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBtZWRpYSBxdWVyeSBjYW4gYmUgY29uc2lkZXJlZCBhIG1hdGNoLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBtYXRjaGVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1xbC5tYXRjaGVzIHx8IHRoaXMuaXNVbmNvbmRpdGlvbmFsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGhhbmRsZXJzIGFuZCB1bmJpbmRzIGV2ZW50c1xuICAgICAqL1xuICAgIGNsZWFyIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1xbC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5sZW5ndGggPSAwOyAvL2NsZWFyIGFycmF5XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgICogQXNzZXNzZXMgdGhlIHF1ZXJ5LCB0dXJuaW5nIG9uIGFsbCBoYW5kbGVycyBpZiBpdCBtYXRjaGVzLCB0dXJuaW5nIHRoZW0gb2ZmIGlmIGl0IGRvZXNuJ3QgbWF0Y2hcbiAgICAgICAgKi9cbiAgICBhc3Nlc3MgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMubWF0Y2hlcygpID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlclthY3Rpb25dKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/enquire.js/src/MediaQuery.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MediaQuery = __webpack_require__(/*! ./MediaQuery */ \"(ssr)/./node_modules/enquire.js/src/MediaQuery.js\");\nvar Util = __webpack_require__(/*! ./Util */ \"(ssr)/./node_modules/enquire.js/src/Util.js\");\nvar each = Util.each;\nvar isFunction = Util.isFunction;\nvar isArray = Util.isArray;\n\n/**\n * Allows for registration of query handlers.\n * Manages the query handler's state and is responsible for wiring up browser events\n *\n * @constructor\n */\nfunction MediaQueryDispatch () {\n    if(!window.matchMedia) {\n        throw new Error('matchMedia not present, legacy browsers require a polyfill');\n    }\n\n    this.queries = {};\n    this.browserIsIncapable = !window.matchMedia('only all').matches;\n}\n\nMediaQueryDispatch.prototype = {\n\n    constructor : MediaQueryDispatch,\n\n    /**\n     * Registers a handler for the given media query\n     *\n     * @param {string} q the media query\n     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers\n     * @param {function} options.match fired when query matched\n     * @param {function} [options.unmatch] fired when a query is no longer matched\n     * @param {function} [options.setup] fired when handler first triggered\n     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched\n     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers\n     */\n    register : function(q, options, shouldDegrade) {\n        var queries         = this.queries,\n            isUnconditional = shouldDegrade && this.browserIsIncapable;\n\n        if(!queries[q]) {\n            queries[q] = new MediaQuery(q, isUnconditional);\n        }\n\n        //normalise to object in an array\n        if(isFunction(options)) {\n            options = { match : options };\n        }\n        if(!isArray(options)) {\n            options = [options];\n        }\n        each(options, function(handler) {\n            if (isFunction(handler)) {\n                handler = { match : handler };\n            }\n            queries[q].addHandler(handler);\n        });\n\n        return this;\n    },\n\n    /**\n     * unregisters a query and all it's handlers, or a specific handler for a query\n     *\n     * @param {string} q the media query to target\n     * @param {object || function} [handler] specific handler to unregister\n     */\n    unregister : function(q, handler) {\n        var query = this.queries[q];\n\n        if(query) {\n            if(handler) {\n                query.removeHandler(handler);\n            }\n            else {\n                query.clear();\n                delete this.queries[q];\n            }\n        }\n\n        return this;\n    }\n};\n\nmodule.exports = MediaQueryDispatch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHVFQUFjO0FBQ3ZDLFdBQVcsbUJBQU8sQ0FBQywyREFBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLDZCQUE2QjtBQUM1QyxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm92ZXJvLW5leHQvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvTWVkaWFRdWVyeURpc3BhdGNoLmpzPzE0YTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE1lZGlhUXVlcnkgPSByZXF1aXJlKCcuL01lZGlhUXVlcnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG52YXIgZWFjaCA9IFV0aWwuZWFjaDtcbnZhciBpc0Z1bmN0aW9uID0gVXRpbC5pc0Z1bmN0aW9uO1xudmFyIGlzQXJyYXkgPSBVdGlsLmlzQXJyYXk7XG5cbi8qKlxuICogQWxsb3dzIGZvciByZWdpc3RyYXRpb24gb2YgcXVlcnkgaGFuZGxlcnMuXG4gKiBNYW5hZ2VzIHRoZSBxdWVyeSBoYW5kbGVyJ3Mgc3RhdGUgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciB3aXJpbmcgdXAgYnJvd3NlciBldmVudHNcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICBpZighd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXRjaE1lZGlhIG5vdCBwcmVzZW50LCBsZWdhY3kgYnJvd3NlcnMgcmVxdWlyZSBhIHBvbHlmaWxsJyk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgdGhpcy5icm93c2VySXNJbmNhcGFibGUgPSAhd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbn1cblxuTWVkaWFRdWVyeURpc3BhdGNoLnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0cnVjdG9yIDogTWVkaWFRdWVyeURpc3BhdGNoLFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgaGFuZGxlciBmb3IgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcSB0aGUgbWVkaWEgcXVlcnlcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBBcnJheSB8fCBGdW5jdGlvbn0gb3B0aW9ucyBlaXRoZXIgYSBzaW5nbGUgcXVlcnkgaGFuZGxlciBvYmplY3QsIGEgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHF1ZXJ5IGhhbmRsZXJzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy51bm1hdGNoXSBmaXJlZCB3aGVuIGEgcXVlcnkgaXMgbm8gbG9uZ2VyIG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gZmlyZWQgd2hlbiBoYW5kbGVyIGZpcnN0IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG91bGREZWdyYWRlPWZhbHNlXSB3aGV0aGVyIHRoaXMgcGFydGljdWxhciBtZWRpYSBxdWVyeSBzaG91bGQgYWx3YXlzIHJ1biBvbiBpbmNhcGFibGUgYnJvd3NlcnNcbiAgICAgKi9cbiAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgdmFyIHF1ZXJpZXMgICAgICAgICA9IHRoaXMucXVlcmllcyxcbiAgICAgICAgICAgIGlzVW5jb25kaXRpb25hbCA9IHNob3VsZERlZ3JhZGUgJiYgdGhpcy5icm93c2VySXNJbmNhcGFibGU7XG5cbiAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgIHF1ZXJpZXNbcV0gPSBuZXcgTWVkaWFRdWVyeShxLCBpc1VuY29uZGl0aW9uYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1hdGNoIDogb3B0aW9ucyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKCFpc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW29wdGlvbnNdO1xuICAgICAgICB9XG4gICAgICAgIGVhY2gob3B0aW9ucywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJpZXNbcV0uYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHVucmVnaXN0ZXJzIGEgcXVlcnkgYW5kIGFsbCBpdCdzIGhhbmRsZXJzLCBvciBhIHNwZWNpZmljIGhhbmRsZXIgZm9yIGEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gW2hhbmRsZXJdIHNwZWNpZmljIGhhbmRsZXIgdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1txXTtcblxuICAgICAgICBpZihxdWVyeSkge1xuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnJlbW92ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNbcV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnlEaXNwYXRjaDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/enquire.js/src/MediaQueryDispatch.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Delegate to handle a media query being matched and unmatched.\n *\n * @param {object} options\n * @param {function} options.match callback for when the media query is matched\n * @param {function} [options.unmatch] callback for when the media query is unmatched\n * @param {function} [options.setup] one-time callback triggered the first time a query is matched\n * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?\n * @constructor\n */\nfunction QueryHandler(options) {\n    this.options = options;\n    !options.deferSetup && this.setup();\n}\n\nQueryHandler.prototype = {\n\n    constructor : QueryHandler,\n\n    /**\n     * coordinates setup of the handler\n     *\n     * @function\n     */\n    setup : function() {\n        if(this.options.setup) {\n            this.options.setup();\n        }\n        this.initialised = true;\n    },\n\n    /**\n     * coordinates setup and triggering of the handler\n     *\n     * @function\n     */\n    on : function() {\n        !this.initialised && this.setup();\n        this.options.match && this.options.match();\n    },\n\n    /**\n     * coordinates the unmatch event for the handler\n     *\n     * @function\n     */\n    off : function() {\n        this.options.unmatch && this.options.unmatch();\n    },\n\n    /**\n     * called when a handler is to be destroyed.\n     * delegates to the destroy or unmatch callbacks, depending on availability.\n     *\n     * @function\n     */\n    destroy : function() {\n        this.options.destroy ? this.options.destroy() : this.off();\n    },\n\n    /**\n     * determines equality by reference.\n     * if object is supplied compare options, if function, compare match callback\n     *\n     * @function\n     * @param {object || function} [target] the target for comparison\n     */\n    equals : function(target) {\n        return this.options === target || this.options.match === target;\n    }\n\n};\n\nmodule.exports = QueryHandler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvUXVlcnlIYW5kbGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm92ZXJvLW5leHQvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvUXVlcnlIYW5kbGVyLmpzP2YyYjciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/enquire.js/src/QueryHandler.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Helper function for iterating over a collection\n *\n * @param collection\n * @param fn\n */\nfunction each(collection, fn) {\n    var i      = 0,\n        length = collection.length,\n        cont;\n\n    for(i; i < length; i++) {\n        cont = fn(collection[i], i);\n        if(cont === false) {\n            break; //allow early exit\n        }\n    }\n}\n\n/**\n * Helper function for determining whether target object is an array\n *\n * @param target the object under test\n * @return {Boolean} true if array, false otherwise\n */\nfunction isArray(target) {\n    return Object.prototype.toString.apply(target) === '[object Array]';\n}\n\n/**\n * Helper function for determining whether target object is a function\n *\n * @param target the object under test\n * @return {Boolean} true if function, false otherwise\n */\nfunction isFunction(target) {\n    return typeof target === 'function';\n}\n\nmodule.exports = {\n    isFunction : isFunction,\n    isArray : isArray,\n    each : each\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvVXRpbC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvdmVyby1uZXh0Ly4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1V0aWwuanM/ZjZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYSBjb2xsZWN0aW9uXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSBmblxuICovXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGZuKSB7XG4gICAgdmFyIGkgICAgICA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICBjb250O1xuXG4gICAgZm9yKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ID0gZm4oY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgIGlmKGNvbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhazsgLy9hbGxvdyBlYXJseSBleGl0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodGFyZ2V0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpc0Z1bmN0aW9uIDogaXNGdW5jdGlvbixcbiAgICBpc0FycmF5IDogaXNBcnJheSxcbiAgICBlYWNoIDogZWFjaFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/enquire.js/src/Util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ \"(ssr)/./node_modules/enquire.js/src/MediaQueryDispatch.js\");\nmodule.exports = new MediaQueryDispatch();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCLG1CQUFPLENBQUMsdUZBQXNCO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm92ZXJvLW5leHQvLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvaW5kZXguanM/YzBlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/enquire.js/src/index.js\n");

/***/ })

};
;