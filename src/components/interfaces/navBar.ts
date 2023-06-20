import React from "react";

export interface NavBarProps {
  shopName: string;
  logoIcon: JSX.Element | React.ReactNode;
  menuItems: Array<string> | Array<JSX.Element> | Array<React.ReactNode>;
  menuItemStyle?: string;
}
