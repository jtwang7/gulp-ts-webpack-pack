'use strict';

var React = require('react');
var index$1 = require('../../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js');
var index$3 = require('../Input/index.js');
var index$2 = require('../Tag/index.js');
var useControllableValue = require('../hooks/useControllableValue.js');
var v4 = require('../../../../node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const InputTag = (props, ref) => {
    const inputRef = React.useRef(null);
    React.useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            blur() {
                inputRef.current.blur();
            },
        };
    }, []);
    const [value, setValue] = useControllableValue.useControllableValue(props);
    const [tagLists, setTagLists] = React.useState([]);
    const isTagListsEmpty = tagLists.length === 0;
    const increaseTag = (val) => {
        setTagLists((t) => {
            const _t = structuredClone(t);
            _t.push(val);
            return _t;
        });
    };
    const decreaseTag = (tagPosition) => {
        setTagLists((t) => {
            const _t = [...t];
            _t.splice(tagPosition, 1);
            return _t;
        });
    };
    const handleTagClear = (tag, tagIndex, e) => {
        var _a;
        decreaseTag(tagIndex);
        (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, tag, tagIndex, e);
    };
    const handleChange = (v, e) => {
        setValue(v);
    };
    const handlePressEnter = () => {
        // 检测是否已存在 tag
        const isTagExisted = tagLists.find((tag) => tag === value);
        if (value && !isTagExisted) {
            increaseTag(value);
            setValue("");
        }
    };
    // 点击清除按钮时，onClear 和 onBlur 会发生冲突，原因是因为:
    // <input /> 会先失去焦点，触发 onBlur，然后才会触发 onClick。但因为 onBlur 触发后，关闭按钮的位置发生了变化，导致 onClick 执行失败。
    // 我们可以将 onClick 替换为 onMouseDown，并添加 e.preventDefault() 组织 mouseDown 本身的 focus 行为来避免上述情况。
    // 原因: 1. onMouseDown 优先于 onBlur 执行。2. 阻止 mouseDown 原生的 focus 行为可以避免触发 onBlur。
    const handleClear = () => {
        var _a;
        if (!isTagListsEmpty) {
            setTagLists([]);
            (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
        }
    };
    const handleBlur = (e) => {
        var _a;
        if (props.saveOnBlur) {
            handlePressEnter();
        }
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    const handleFocus = (e) => {
        var _a;
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    React.useEffect(() => {
        if (props.autoFocus && isTagListsEmpty) {
            inputRef.current.focus();
        }
    }, [props.autoFocus, isTagListsEmpty]);
    return (React__default["default"].createElement("div", { className: index$1("input-tag-container", props.className) },
        tagLists.map((tag, idx) => (React__default["default"].createElement(index$2, { bordered: true, closable: !props.disabled, onClose: (e) => handleTagClear(tag, idx, e), key: v4(), className: "input-tag-tagger" }, tag))),
        React__default["default"].createElement(index$3, { ref: inputRef, className: "input-tag-inputer", placeholder: "\u8BF7\u8F93\u5165\u6570\u636E", disabled: props.disabled, value: value, onChange: handleChange, onPressEnter: handlePressEnter, onBlur: handleBlur, onFocus: handleFocus, allowClear: props.allowClear && !isTagListsEmpty, onClear: handleClear })));
};
var index = React__default["default"].forwardRef(InputTag);

module.exports = index;
//# sourceMappingURL=index.js.map
