import { slicedToArray as _slicedToArray, toConsumableArray as _toConsumableArray } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { r as reactExports } from '../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js';
import cls from '../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js';
import Input from '../Input/index.js';
import Tag from '../Tag/index.js';
import { useControllableValue } from '../../hooks/useControllableValue.js';
import v4 from '../../../node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js';

var InputTag = function InputTag(props, ref) {
  var inputRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }, []);
  var _useControllableValue = useControllableValue(props),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    value = _useControllableValue2[0],
    setValue = _useControllableValue2[1];
  var _useState = reactExports.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
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
      var _t = _toConsumableArray(t);
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
  reactExports.useEffect(function () {
    if (props.autoFocus && isTagListsEmpty) {
      inputRef.current.focus();
    }
  }, [props.autoFocus, isTagListsEmpty]);
  return /*#__PURE__*/React.createElement("div", {
    className: cls("input-tag-container", props.className)
  }, tagLists.map(function (tag, idx) {
    return /*#__PURE__*/React.createElement(Tag, {
      bordered: true,
      closable: !props.disabled,
      onClose: function onClose(e) {
        return handleTagClear(tag, idx, e);
      },
      key: v4(),
      className: "input-tag-tagger"
    }, tag);
  }), /*#__PURE__*/React.createElement(Input, {
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
var index = /*#__PURE__*/React.forwardRef(InputTag);

export { index as default };
//# sourceMappingURL=index.js.map
