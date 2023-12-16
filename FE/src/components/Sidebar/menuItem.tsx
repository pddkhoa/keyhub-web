// import { routes } from "../config/routes";
// import { DUMMY_ID } from "../config/constants";
import { IconType } from "react-icons/lib";
import {
    PiBookOpenFill,
    PiChartLineBold,
    PiChatsCircleBold,
    PiCheckSquareOffsetFill,
    PiFlagBold,
    PiGearFill,
    PiHeadsetFill,
    PiHouseBold,
    PiLightning,
    PiPaintBrushBroadFill,
    PiRocketLaunch,
    PiTagFill,
    PiUserCircleMinusFill,
    PiUserListFill,
    PiUserSwitchFill,
    PiUsersBold,
    PiWarningOctagonFill,
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
    {
        id: "5",
        name: "Messenger",
        title: "Messenger",
        icon: PiChatsCircleBold,
        href: "/messenger",
    },
];
export const berylliumMenuItemAtom = atom(berylliumMenuItems[0]);

export const berylliumMenuItemsAdmin: MenuItemsType[] = [
    {
        id: "1",
        name: "Home",
        title: "Dashboard",
        icon: PiHouseBold,
        menuItems: [
            {
                name: "Analysis",
                href: "/",
                icon: PiChartLineBold,
            },
        ],
    },
    {
        id: "2",
        name: "Manager",
        title: "Management",
        icon: PiPaintBrushBroadFill,
        menuItems: [
            {
                name: "Blogs",
                icon: PiCheckSquareOffsetFill,
                href: "/admin/blogs",
            },
            {
                name: "Accounts",
                icon: PiUserListFill,
                href: "/admin/users",
            },
            {
                name: "Categories",
                icon: PiBookOpenFill,
                href: "/admin/categories",
            },
            {
                name: "Tags",
                icon: PiTagFill,
                href: "/admin/tags",
            },
        ],
    },
    {
        id: "3",
        name: "Support",
        title: "Support",
        icon: PiHeadsetFill,
        menuItems: [
            {
                name: "Blogs Report",
                icon: PiWarningOctagonFill,
                href: "/admin/support/blog-report",
            },
            {
                name: "Accounts Report",
                icon: PiUserSwitchFill,
                href: "/admin/support/account-report",
            },
            {
                name: "Comments Report",
                icon: PiFlagBold,
                href: "/admin/support/comment-report",
            },
            {
                name: "Account Blocked",
                icon: PiUserCircleMinusFill,
                href: "/admin/support/account-blocked",
            },
        ],
    },
    // {
    //   id: "4",
    //   name: "Setting",
    //   title: "Setting",
    //   icon: PiGearFill,
    //   menuItems: [
    //     {
    //       name: "Blogs",
    //       description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
    //       icon: PiBookOpenFill,
    //       href: "/",
    //     },
    //     {
    //       name: "Accounts",
    //       description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
    //       icon: PiBookOpenFill,
    //       href: "/",
    //     },
    //     {
    //       name: "Categories",
    //       description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
    //       icon: PiBookOpenFill,
    //       href: "/",
    //     },
    //     {
    //       name: "Tags",
    //       description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
    //       icon: PiBookOpenFill,
    //       href: "/",
    //     },
    //   ],
    // },
];

export const berylliumMenuItemAtomAdmin = atom(berylliumMenuItemsAdmin[0]);
