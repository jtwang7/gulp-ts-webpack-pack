import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { r as reactExports } from '../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js';

var useControllableValue = function useControllableValue(props) {
  var isControlled = props.hasOwnProperty("value");
  var initialState = reactExports.useMemo(function () {
    if (Reflect.has(props, "value")) {
      return props.value;
    }
    if (Reflect.has(props, "defaultValue")) {
      return props.defaultValue;
    }
    return undefined;
  }, []);
  // 内部状态：受控状态下，实时保持与外部状态同步
  var innerValue = reactExports.useRef(initialState);
  if (isControlled) {
    innerValue.current = props.value;
  }
  var _useState = reactExports.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    update = _useState2[1];
  var forceUpdate = reactExports.useCallback(function () {
    update({});
  }, []);
  // 封装可同时控制内外状态更新的 set function
  var setState = function setState(v) {
    var _a2;
    var _a;
    var _r = typeof v === "function" ? v(innerValue.current) : v;
    if (!isControlled) {
      innerValue.current = _r;
      forceUpdate();
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    (_a = props.onChange) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [props, _r].concat(args));
  };
  return [innerValue.current, setState];
};

export { useControllableValue };
//# sourceMappingURL=useControllableValue.js.map
