import React from "react";
import { BrowserRouterProps } from 'react-router-dom'
export interface IRoute {
  /**
   * 路由路径
   */
  path: string
  /**
   * 组件
   */
  Component?: React.FC<BrowserRouterProps>
  /**
   * 重定向地址
   */
  redirect?: string
  /**
   * 信息元
   */
  meta?: {
    /**
     * 路由名称
     */
    title: string
    /**
     * 是否在侧边栏显示
     */
    isHidden?: boolean
    /**
     * 是否隐藏显示面包屑
     */
    hiddenBreadcrumb?: boolean
    /**
     * 是否是全屏页面
     */
    isFullPage?: boolean
    /**
     * 图标
     */
    Icon?: React.FC<BrowserRouterProps>
  }
}