import { SetStateAction } from "react";
export interface Props<T> {
    defaultValue?: T;
    value?: T;
    onChange?: (v: T, ...args: any[]) => void;
}
export declare const useControllableValue: <T>(props: Props<T>) => readonly [NonNullable<T>, (v: SetStateAction<T | undefined>, ...args: any[]) => void];
