import React from "react";
import { Input, InputTag } from "@tian/ui-rollup";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <span>Rollup:</span>
        <Input placeholder="请输入数据" defaultValue="3" />
      </div>
      <div style={{ display: "flex" }}>
        <span>Rollup:</span>
        <InputTag placeholder="请输入数据" defaultValue="5" />
      </div>
    </>
  );
}
