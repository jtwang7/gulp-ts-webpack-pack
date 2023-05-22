"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useControllableValue3 = require("../hooks/useControllableValue");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Input = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var placeholder = props.placeholder,
    onPressEnter = props.onPressEnter,
    style = props.style,
    className = props.className;
  // 暴露实例
  var inputRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    // ❌ 错误的写法 (原因未知)
    // return {
    //   focus: inputRef.current.focus,
    //   blur: inputRef.current.blur,
    // }
    // ✅ 正确的写法
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }, []);
  // 受控&非受控逻辑
  var _useControllableValue = (0, _useControllableValue3.useControllableValue)(props),
    _useControllableValue2 = (0, _slicedToArray2["default"])(_useControllableValue, 2),
    _value = _useControllableValue2[0],
    _onChange = _useControllableValue2[1];
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style,
    className: (0, _classnames["default"])("input-container", className)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    className: "input-main",
    placeholder: placeholder,
    disabled: props.disabled,
    value: _value,
    onChange: function onChange(e) {
      _onChange(e.target.value, e);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.keyCode === 13) {
        onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(e);
      }
    },
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }), props.allowClear ? /*#__PURE__*/_react["default"].createElement("span", {
    role: "button",
    className: "input-close-button",
    onMouseDown: function onMouseDown(e) {
      var _a;
      // onMouseDown 优先于 onBlur 执行
      // 我们只利用其优先级高的特性，因此需要避免 mouseDown 原生里的 focus:
      // 通过 e.preventDefault() 取消 mouseDown 的原生事件，焦点就不会因为 mouseDown 而转移到 closeButton 上。
      e.preventDefault();
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2595",
    width: "10",
    height: "10"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M512 512m-450.56 0a450.56 450.56 0 1 0 901.12 0 450.56 450.56 0 1 0-901.12 0Z",
    fill: "#131415",
    "p-id": "2596"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M717.55776 305.7664l0.67584 0.67584a30.72 30.72 0 0 1 0 43.43808L556.1344 512l162.0992 162.11968a30.72 30.72 0 0 1 0 43.43808l-0.67584 0.67584a30.72 30.72 0 0 1-43.43808 0L512 556.1344l-162.11968 162.0992a30.72 30.72 0 0 1-43.43808 0l-0.67584-0.67584a30.72 30.72 0 0 1 0-43.43808L467.8656 512l-162.0992-162.11968a30.72 30.72 0 0 1 0-43.43808l0.67584-0.67584a30.72 30.72 0 0 1 43.43808 0L512 467.8656l162.11968-162.0992a30.72 30.72 0 0 1 43.43808 0z",
    fill: "#FFFFFF",
    "p-id": "2597"
  }))) : null);
});
var _default = Input;
exports["default"] = _default;