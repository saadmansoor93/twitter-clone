/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./app/assets/javascripts/frontend/main.jsx ***!
  \**************************************************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TweetBox_jsx__ = __webpack_require__(/*! ./components/TweetBox.jsx */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TweetsList_jsx__ = __webpack_require__(/*! ./components/TweetsList.jsx */ 3);\n\n\n\nclass Main extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { tweetsList: [] };\n  }\n  addTweet(tweetToAdd) {\n    let newTweetsList = this.state.tweetsList;\n    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });\n\n    this.setState({ tweetsList: newTweetsList });\n  }\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'container' },\n      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_TweetBox_jsx__[\"a\" /* default */], { sendTweet: this.addTweet.bind(this) }),\n      React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_TweetsList_jsx__[\"a\" /* default */], { tweets: this.state.tweetsList })\n    );\n  }\n}\n\nlet documentReady = () => {\n  React.render(React.createElement(Main, null), document.getElementById('react'));\n};\n\n$(documentReady);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2Zyb250ZW5kL21haW4uanN4PzAzMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWV0Qm94IGZyb20gJy4vY29tcG9uZW50cy9Ud2VldEJveC5qc3gnO1xuaW1wb3J0IFR3ZWV0c0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1R3ZWV0c0xpc3QuanN4JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHR3ZWV0c0xpc3Q6IFtdfTtcbiAgfVxuICBhZGRUd2VldCh0d2VldFRvQWRkKSB7XG4gICAgbGV0IG5ld1R3ZWV0c0xpc3QgPSB0aGlzLnN0YXRlLnR3ZWV0c0xpc3Q7XG4gICAgbmV3VHdlZXRzTGlzdC51bnNoaWZ0KHsgaWQ6IERhdGUubm93KCksIG5hbWU6ICdHdWVzdCcsIGJvZHk6IHR3ZWV0VG9BZGR9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0d2VldHNMaXN0OiBuZXdUd2VldHNMaXN0fSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8VHdlZXRCb3ggc2VuZFR3ZWV0PXt0aGlzLmFkZFR3ZWV0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPFR3ZWV0c0xpc3QgdHdlZXRzPXt0aGlzLnN0YXRlLnR3ZWV0c0xpc3R9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxubGV0IGRvY3VtZW50UmVhZHkgPSAoKSA9PiB7XG4gIFJlYWN0LnJlbmRlcihcbiAgICA8TWFpbiAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKVxuICApO1xufTtcblxuJChkb2N1bWVudFJlYWR5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL2phdmFzY3JpcHRzL2Zyb250ZW5kL21haW4uanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */
/*!*****************************************************************!*\
  !*** ./app/assets/javascripts/frontend/components/TweetBox.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class TweetBox extends React.Component {\n  sendTweet(event) {\n    event.preventDefault();\n    this.props.sendTweet(this.refs.tweetTextArea.value);\n    this.refs.tweetTextArea.value = '';\n  }\n  render() {\n    return React.createElement(\n      \"div\",\n      { className: \"row\" },\n      React.createElement(\n        \"form\",\n        { onSubmit: this.sendTweet.bind(this) },\n        React.createElement(\n          \"div\",\n          { className: \"input-field\" },\n          React.createElement(\"textarea\", { ref: \"tweetTextArea\", className: \"naterialize-textarea\" }),\n          React.createElement(\n            \"label\",\n            null,\n            \"What's happening?\"\n          ),\n          React.createElement(\n            \"button\",\n            { type: \"submit\", className: \"btn right\" },\n            \"Tweet\"\n          )\n        )\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = TweetBox;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRCb3guanN4Pzc3ZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZXRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzZW5kVHdlZXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2VuZFR3ZWV0KHRoaXMucmVmcy50d2VldFRleHRBcmVhLnZhbHVlKTtcbiAgICB0aGlzLnJlZnMudHdlZXRUZXh0QXJlYS52YWx1ZSA9ICcnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZFR3ZWV0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9XCJ0d2VldFRleHRBcmVhXCIgY2xhc3NOYW1lPVwibmF0ZXJpYWxpemUtdGV4dGFyZWFcIi8+XG4gICAgICAgICAgICA8bGFiZWw+V2hhdCdzIGhhcHBlbmluZz88L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHJpZ2h0XCI+VHdlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9mcm9udGVuZC9jb21wb25lbnRzL1R3ZWV0Qm94LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQURBO0FBVUE7QUFsQkE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************************************!*\
  !*** ./app/assets/javascripts/frontend/components/TweetsList.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tweet_jsx__ = __webpack_require__(/*! ./Tweet.jsx */ 4);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nclass TweetsList extends React.Component {\n  render() {\n    let tweets = this.props.tweets.map(tweet => React.createElement(__WEBPACK_IMPORTED_MODULE_0__Tweet_jsx__[\"a\" /* default */], _extends({ key: tweet.id }, tweet)));\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"ul\",\n        { className: \"collection\" },\n        tweets\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = TweetsList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXRzTGlzdC5qc3g/YzlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZXQgZnJvbSBcIi4vVHdlZXQuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFR3ZWV0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHR3ZWV0cyA9IHRoaXMucHJvcHMudHdlZXRzLm1hcCh0d2VldCA9PiA8VHdlZXQga2V5PXt0d2VldC5pZH0gey4uLnR3ZWV0fS8+KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25cIj5cbiAgICAgICAgICB7dHdlZXRzfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9mcm9udGVuZC9jb21wb25lbnRzL1R3ZWV0c0xpc3QuanN4Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFWQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************************************************!*\
  !*** ./app/assets/javascripts/frontend/components/Tweet.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Tweet extends React.Component {\n  render() {\n    return React.createElement(\n      \"li\",\n      { className: \"collection-item avatar\" },\n      React.createElement(\n        \"i\",\n        { className: \"material-icons circle\" },\n        \"person_pin\"\n      ),\n      React.createElement(\n        \"span\",\n        { className: \"title\" },\n        this.props.name\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        this.props.body\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Tweet;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL2Zyb250ZW5kL2NvbXBvbmVudHMvVHdlZXQuanN4PzJjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFR3ZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjaXJjbGVcIj5wZXJzb25fcGluPC9pPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICA8cD57dGhpcy5wcm9wcy5ib2R5fTwvcD5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9mcm9udGVuZC9jb21wb25lbnRzL1R3ZWV0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFUQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);