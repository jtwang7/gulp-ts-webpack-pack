import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import cls from "classnames";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import Tag from "../Tag";
import { useControllableValue } from "../hooks/useControllableValue";

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

const InputTag = (props: InputTagProps<string>, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        blur() {
          inputRef.current.blur();
        },
      };
    },
    []
  );

  const [value, setValue] = useControllableValue<string>(props);

  const [tagLists, setTagLists] = useState<string[]>([]);
  const isTagListsEmpty = tagLists.length === 0;

  const increaseTag = (val: string) => {
    setTagLists((t) => {
      const _t = structuredClone(t);
      _t.push(val);
      return _t;
    });
  };
  const decreaseTag = (tagPosition: number) => {
    setTagLists((t) => {
      const _t = [...t];
      _t.splice(tagPosition, 1);
      return _t;
    });
  };

  const handleTagClear = (tag: string, tagIndex: number, e: any) => {
    decreaseTag(tagIndex);
    props.onRemove?.(tag, tagIndex, e);
  };
  const handleChange = (v: string, e: any) => {
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
    if (!isTagListsEmpty) {
      setTagLists([]);
      props.onClear?.();
    }
  };
  const handleBlur = (e: any) => {
    if (props.saveOnBlur) {
      handlePressEnter();
    }
    props.onBlur?.(e);
  };
  const handleFocus = (e?: any) => {
    props.onFocus?.(e);
  };

  useEffect(() => {
    if (props.autoFocus && isTagListsEmpty) {
      inputRef.current.focus();
    }
  }, [props.autoFocus, isTagListsEmpty]);

  return (
    <div className={cls("input-tag-container", props.className)}>
      {tagLists.map((tag, idx) => (
        <Tag
          bordered
          closable={!props.disabled}
          onClose={(e) => handleTagClear(tag, idx, e)}
          key={uuidv4()}
          className="input-tag-tagger"
        >
          {tag}
        </Tag>
      ))}
      <Input
        ref={inputRef}
        className="input-tag-inputer"
        placeholder="请输入数据"
        disabled={props.disabled}
        value={value}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
        onBlur={handleBlur}
        onFocus={handleFocus}
        allowClear={props.allowClear && !isTagListsEmpty}
        onClear={handleClear}
      />
    </div>
  );
};

export default React.forwardRef(InputTag);
