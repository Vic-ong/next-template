/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ReactNode, CSSProperties, LegacyRef } from "react";

export interface GenericObject<T = any> {
  [key: string]: T;
}

export interface AppContext {
  user?: string;
  organization?: string;
}

export interface RouteParams {
  [key: string]: string;
}

export interface RouteQueryParams {
  [key: string]: string | string[] | undefined;
}

export interface LayoutProps {
  params: RouteParams;
  children: ReactNode;
}

export interface PageProps {
  params: RouteParams;
  searchParams: RouteQueryParams;
}

export interface BaseProps {
  ref?: LegacyRef<any>;
  children?: ReactNode;
  className?: string | undefined;
  style?: CSSProperties | undefined;
}

export interface BasePropsNoChildren extends Omit<BaseProps, "children"> {}
