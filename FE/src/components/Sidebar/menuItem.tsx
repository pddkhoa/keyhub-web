// import { routes } from "../config/routes";
// import { DUMMY_ID } from "../config/constants";
import { IconType } from "react-icons/lib";
import {
  PiBookOpenFill,
  PiChartLineBold,
  PiHouseBold,
  PiLightning,
  PiRocketLaunch,
  PiTagFill,
  PiUserCircleGearBold,
  PiUsersBold,
} from "react-icons/pi";
import { atom } from "jotai";

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  href?: string;
  menuItems?: ItemType[];
}

export const berylliumMenuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "Feed",
    title: "Feed",
    icon: PiRocketLaunch,
    href: "/",
  },
  {
    id: "2",
    name: "Explore",
    title: "Explore",
    icon: PiLightning,
    href: "/explore",
  },
  {
    id: "3",
    name: "Users",
    title: "Users",
    icon: PiUsersBold,
    href: "/user",
  },
  {
    id: "4",
    name: "Categories",
    title: "Categories",
    icon: PiBookOpenFill,
    href: "/categories",
  },
];
export const berylliumMenuItemAtom = atom(berylliumMenuItems[0]);

export const berylliumMenuItemsAdmin: MenuItemsType[] = [
  {
    id: "1",
    name: "Dashboard",
    title: "Dashboard",
    icon: PiChartLineBold,
    href: "/admin",
  },
  {
    id: "2",
    name: "Users",
    title: "Users",
    icon: PiUserCircleGearBold,
    href: "/admin/users",
  },
  {
    id: "3",
    name: "Tags",
    title: "Tags",
    icon: PiTagFill,
    href: "/admin/tags",
  },
  {
    id: "4",
    name: "Categories",
    title: "Categories",
    icon: PiBookOpenFill,
    href: "/admin/categories",
  },
];

export const berylliumMenuItemAtomAdmin = atom(berylliumMenuItemsAdmin[0]);
