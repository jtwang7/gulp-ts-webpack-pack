"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _uuid = require("uuid");
var _Input = _interopRequireDefault(require("../Input"));
var _Tag = _interopRequireDefault(require("../Tag"));
var _useControllableValue3 = require("../hooks/useControllableValue");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var InputTag = function InputTag(props, ref) {
  var inputRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }, []);
  var _useControllableValue = (0, _useControllableValue3.useControllableValue)(props),
    _useControllableValue2 = (0, _slicedToArray2["default"])(_useControllableValue, 2),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    tagLists = _useState2[0],
    setTagLists = _useState2[1];
  var isTagListsEmpty = tagLists.length === 0;
  var increaseTag = function increaseTag(val) {
    setTagLists(function (t) {
      var _t = structuredClone(t);
      _t.push(val);
      return _t;
    });
  };
  var decreaseTag = function decreaseTag(tagPosition) {
    setTagLists(function (t) {
      var _t = (0, _toConsumableArray2["default"])(t);
      _t.splice(tagPosition, 1);
      return _t;
    });
  };
  var handleTagClear = function handleTagClear(tag, tagIndex, e) {
    var _a;
    decreaseTag(tagIndex);
    (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, tag, tagIndex, e);
  };
  var handleChange = function handleChange(v, e) {
    setValue(v);
  };
  var handlePressEnter = function handlePressEnter() {
    // 检测是否已存在 tag
    var isTagExisted = tagLists.find(function (tag) {
      return tag === value;
    });
    if (value && !isTagExisted) {
      increaseTag(value);
      setValue("");
    }
  };
  // 点击清除按钮时，onClear 和 onBlur 会发生冲突，原因是因为:
  // <input /> 会先失去焦点，触发 onBlur，然后才会触发 onClick。但因为 onBlur 触发后，关闭按钮的位置发生了变化，导致 onClick 执行失败。
  // 我们可以将 onClick 替换为 onMouseDown，并添加 e.preventDefault() 组织 mouseDown 本身的 focus 行为来避免上述情况。
  // 原因: 1. onMouseDown 优先于 onBlur 执行。2. 阻止 mouseDown 原生的 focus 行为可以避免触发 onBlur。
  var handleClear = function handleClear() {
    var _a;
    if (!isTagListsEmpty) {
      setTagLists([]);
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  };
  var handleBlur = function handleBlur(e) {
    var _a;
    if (props.saveOnBlur) {
      handlePressEnter();
    }
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  var handleFocus = function handleFocus(e) {
    var _a;
    (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  (0, _react.useEffect)(function () {
    if (props.autoFocus && isTagListsEmpty) {
      inputRef.current.focus();
    }
  }, [props.autoFocus, isTagListsEmpty]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("input-tag-container", props.className)
  }, tagLists.map(function (tag, idx) {
    return /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
      bordered: true,
      closable: !props.disabled,
      onClose: function onClose(e) {
        return handleTagClear(tag, idx, e);
      },
      key: (0, _uuid.v4)(),
      className: "input-tag-tagger"
    }, tag);
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    ref: inputRef,
    className: "input-tag-inputer",
    placeholder: "\u8BF7\u8F93\u5165\u6570\u636E",
    disabled: props.disabled,
    value: value,
    onChange: handleChange,
    onPressEnter: handlePressEnter,
    onBlur: handleBlur,
    onFocus: handleFocus,
    allowClear: props.allowClear && !isTagListsEmpty,
    onClear: handleClear
  }));
};
var _default = /*#__PURE__*/_react["default"].forwardRef(InputTag);
exports["default"] = _default;