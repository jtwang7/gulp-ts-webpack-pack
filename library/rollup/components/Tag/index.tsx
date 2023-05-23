import React from "react";
import cls from "classnames";

export interface TagProps {
  bordered?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => Promise<any> | void;
  style?: React.CSSProperties;
  className?: string | string[];
  children?: React.ReactNode;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    bordered = false,
    icon,
    closable = false,
    onClose,
    style: _style,
    className,
  } = props;

  const style = {
    ..._style,
    border: bordered ? _style?.border : "none",
  };

  return (
    <div style={style} className={cls("tag-container", className)} ref={ref}>
      {icon ? <span className="tag-icon">{icon}</span> : null}
      <span className="tag-content">{props.children ?? ""}</span>
      {closable ? (
        <span
          role="button"
          className="tag-close-button"
          onClick={(e) => {
            onClose?.(e);
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
});

export default Tag;
