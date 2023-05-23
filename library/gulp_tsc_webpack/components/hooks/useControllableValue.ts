import { SetStateAction, useCallback, useMemo, useRef, useState } from "react";

export interface Props<T> {
  defaultValue?: T;
  value?: T;
  onChange?: (v: T, ...args: any[]) => void;
}

export const useControllableValue = <T>(props: Props<T>) => {
  const isControlled = props.hasOwnProperty("value");
  const initialState = useMemo(() => {
    if (Reflect.has(props, "value")) {
      return props.value;
    }
    if (Reflect.has(props, "defaultValue")) {
      return props.defaultValue;
    }
    return undefined;
  }, []);

  // 内部状态：受控状态下，实时保持与外部状态同步
  const innerValue = useRef<T | undefined>(initialState);
  if (isControlled) {
    innerValue.current = props.value;
  }

  const [, update] = useState({});
  const forceUpdate = useCallback(() => {
    update({});
  }, []);

  // 封装可同时控制内外状态更新的 set function
  const setState = (v: SetStateAction<T | undefined>, ...args: any[]) => {
    const _r =
      typeof v === "function" ? (v as Function)(innerValue.current) : v;
    if (!isControlled) {
      innerValue.current = _r as T;
      forceUpdate();
    }
    props.onChange?.(_r, ...args);
  };

  return [innerValue.current!, setState] as const;
};
