import React from "react";
export interface TagProps {
    bordered?: boolean;
    icon?: React.ReactNode;
    closable?: boolean;
    onClose?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => Promise<any> | void;
    style?: React.CSSProperties;
    className?: string | string[];
    children?: React.ReactNode;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
export default Tag;
