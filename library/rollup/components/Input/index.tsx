import React, { useImperativeHandle, useRef } from "react";
import cls from "classnames";
import { useControllableValue } from "../hooks/useControllableValue";

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

const Input = React.forwardRef<HTMLInputElement, InputProps<string>>(
  (props, ref) => {
    const { placeholder, onPressEnter, style, className } = props;

    // 暴露实例
    const inputRef = useRef<HTMLInputElement>(null!);
    useImperativeHandle(
      ref,
      () => {
        // ❌ 错误的写法 (原因未知)
        // return {
        //   focus: inputRef.current.focus,
        //   blur: inputRef.current.blur,
        // }

        // ✅ 正确的写法
        return {
          focus() {
            inputRef.current.focus();
          },
          blur() {
            inputRef.current.blur();
          },
        } as any;
      },
      []
    );

    // 受控&非受控逻辑
    const [_value, _onChange] = useControllableValue<string>(props);

    return (
      <div style={style} className={cls("input-container", className)}>
        <input
          ref={inputRef}
          className="input-main"
          placeholder={placeholder}
          disabled={props.disabled}
          value={_value}
          onChange={(e) => {
            _onChange(e.target.value, e);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              onPressEnter?.(e);
            }
          }}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {props.allowClear ? (
          <span
            role="button"
            className="input-close-button"
            onMouseDown={(e) => {
              // onMouseDown 优先于 onBlur 执行
              // 我们只利用其优先级高的特性，因此需要避免 mouseDown 原生里的 focus:
              // 通过 e.preventDefault() 取消 mouseDown 的原生事件，焦点就不会因为 mouseDown 而转移到 closeButton 上。
              e.preventDefault();
              props.onClear?.();
            }}
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2595"
              width="10"
              height="10"
            >
              <path
                d="M512 512m-450.56 0a450.56 450.56 0 1 0 901.12 0 450.56 450.56 0 1 0-901.12 0Z"
                fill="#131415"
                p-id="2596"
              ></path>
              <path
                d="M717.55776 305.7664l0.67584 0.67584a30.72 30.72 0 0 1 0 43.43808L556.1344 512l162.0992 162.11968a30.72 30.72 0 0 1 0 43.43808l-0.67584 0.67584a30.72 30.72 0 0 1-43.43808 0L512 556.1344l-162.11968 162.0992a30.72 30.72 0 0 1-43.43808 0l-0.67584-0.67584a30.72 30.72 0 0 1 0-43.43808L467.8656 512l-162.0992-162.11968a30.72 30.72 0 0 1 0-43.43808l0.67584-0.67584a30.72 30.72 0 0 1 43.43808 0L512 467.8656l162.11968-162.0992a30.72 30.72 0 0 1 43.43808 0z"
                fill="#FFFFFF"
                p-id="2597"
              ></path>
            </svg>
          </span>
        ) : null}
      </div>
    );
  }
);

export default Input;
