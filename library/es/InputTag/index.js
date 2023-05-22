import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import cls from "classnames";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import Tag from "../Tag";
import { useControllableValue } from "../hooks/useControllableValue";
const InputTag = (props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            blur() {
                inputRef.current.blur();
            },
        };
    }, []);
    const [value, setValue] = useControllableValue(props);
    const [tagLists, setTagLists] = useState([]);
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
    useEffect(() => {
        if (props.autoFocus && isTagListsEmpty) {
            inputRef.current.focus();
        }
    }, [props.autoFocus, isTagListsEmpty]);
    return (React.createElement("div", { className: cls("input-tag-container", props.className) },
        tagLists.map((tag, idx) => (React.createElement(Tag, { bordered: true, closable: !props.disabled, onClose: (e) => handleTagClear(tag, idx, e), key: uuidv4(), className: "input-tag-tagger" }, tag))),
        React.createElement(Input, { ref: inputRef, className: "input-tag-inputer", placeholder: "\u8BF7\u8F93\u5165\u6570\u636E", disabled: props.disabled, value: value, onChange: handleChange, onPressEnter: handlePressEnter, onBlur: handleBlur, onFocus: handleFocus, allowClear: props.allowClear && !isTagListsEmpty, onClear: handleClear })));
};
export default React.forwardRef(InputTag);
