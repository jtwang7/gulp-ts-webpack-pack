// ts 类型注释需要加上前缀 type，否则 webpack 会弹出(例) WARNING: export 'TagProps' (reexported as 'TagProps') was not found in './/Tag/types' (module has no exports);
// export type {xxx} from "./xxx"; 或者 export {type xxx, type yyy} from "./xxx";

export { default as Input, type InputProps } from "./Input";

export { default as Tag, type TagProps } from "./Tag";

export { default as InputTag, type InputTagProps } from "./InputTag";
