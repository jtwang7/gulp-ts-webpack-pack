import React from "react";
export interface InputProps<T> {
    style?: React.CSSProperties;
    className?: string | string[];
    disabled?: boolean;
    placeholder?: string;
    allowClear?: boolean;
    defaultValue?: T;
    value?: T;
    onChange?: (value: T, e: any) => void;
    onPressEnter?: (e: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onClear?: () => void;
}
declare const Input: React.ForwardRefExoticComponent<InputProps<string> & React.RefAttributes<HTMLInputElement>>;
export default Input;
