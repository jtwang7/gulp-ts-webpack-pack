import React from "react";
export interface InputTagProps<T> {
    allowClear?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    saveOnBlur?: boolean;
    placeholder?: string;
    className?: string | string[];
    style?: React.CSSProperties;
    defaultValue?: T;
    value?: T;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onChange?: (inputValue: T, event?: any) => void;
    onPressEnter?: (e: any) => void;
    onRemove?: (value: T, index: number, event?: any) => void;
    onClear?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<InputTagProps<string> & React.RefAttributes<unknown>>;
export default _default;
