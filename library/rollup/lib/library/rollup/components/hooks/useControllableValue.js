'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useControllableValue = (props) => {
    const isControlled = props.hasOwnProperty("value");
    const initialState = React.useMemo(() => {
        if (Reflect.has(props, "value")) {
            return props.value;
        }
        if (Reflect.has(props, "defaultValue")) {
            return props.defaultValue;
        }
        return undefined;
    }, []);
    // 内部状态：受控状态下，实时保持与外部状态同步
    const innerValue = React.useRef(initialState);
    if (isControlled) {
        innerValue.current = props.value;
    }
    const [, update] = React.useState({});
    const forceUpdate = React.useCallback(() => {
        update({});
    }, []);
    // 封装可同时控制内外状态更新的 set function
    const setState = (v, ...args) => {
        var _a;
        const _r = typeof v === "function" ? v(innerValue.current) : v;
        if (!isControlled) {
            innerValue.current = _r;
            forceUpdate();
        }
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, _r, ...args);
    };
    return [innerValue.current, setState];
};

exports.useControllableValue = useControllableValue;
//# sourceMappingURL=useControllableValue.js.map
