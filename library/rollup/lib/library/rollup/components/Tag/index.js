'use strict';

var React = require('react');
var index = require('../../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Tag = React__default["default"].forwardRef((props, ref) => {
    var _a;
    const { bordered = false, icon, closable = false, onClose, style: _style, className, } = props;
    const style = Object.assign(Object.assign({}, _style), { border: bordered ? _style === null || _style === void 0 ? void 0 : _style.border : "none" });
    return (React__default["default"].createElement("div", { style: style, className: index("tag-container", className), ref: ref },
        icon ? React__default["default"].createElement("span", { className: "tag-icon" }, icon) : null,
        React__default["default"].createElement("span", { className: "tag-content" }, (_a = props.children) !== null && _a !== void 0 ? _a : ""),
        closable ? (React__default["default"].createElement("span", { role: "button", className: "tag-close-button", onClick: (e) => {
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
            } },
            React__default["default"].createElement("svg", { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "2595", width: "10", height: "10" },
                React__default["default"].createElement("path", { d: "M512 512m-450.56 0a450.56 450.56 0 1 0 901.12 0 450.56 450.56 0 1 0-901.12 0Z", fill: "#131415", "p-id": "2596" }),
                React__default["default"].createElement("path", { d: "M717.55776 305.7664l0.67584 0.67584a30.72 30.72 0 0 1 0 43.43808L556.1344 512l162.0992 162.11968a30.72 30.72 0 0 1 0 43.43808l-0.67584 0.67584a30.72 30.72 0 0 1-43.43808 0L512 556.1344l-162.11968 162.0992a30.72 30.72 0 0 1-43.43808 0l-0.67584-0.67584a30.72 30.72 0 0 1 0-43.43808L467.8656 512l-162.0992-162.11968a30.72 30.72 0 0 1 0-43.43808l0.67584-0.67584a30.72 30.72 0 0 1 43.43808 0L512 467.8656l162.11968-162.0992a30.72 30.72 0 0 1 43.43808 0z", fill: "#FFFFFF", "p-id": "2597" })))) : null));
});

module.exports = Tag;
//# sourceMappingURL=index.js.map
