import React from "react";

export interface ChildrenOnly {
  children: React.ReactNode;
};

export type SelectorFn<TStore, TResult> = (state: TStore) => TResult;