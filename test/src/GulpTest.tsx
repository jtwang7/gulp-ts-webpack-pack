import React from "react";
import { Input, InputTag } from "@tian/ui";
import "@tian/ui/es/style/index.css";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <span>Gulp+TypeScript</span>
        <Input placeholder="请输入数据" defaultValue="3" />
      </div>
      <div style={{ display: "flex" }}>
        <span>Gulp+TypeScript</span>
        <InputTag placeholder="请输入数据" defaultValue="5" />
      </div>
    </>
  );
}
