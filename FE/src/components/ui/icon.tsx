import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import React from "react";

const IconDelete = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div {...props}>
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Gradient Line"
      viewBox="0 0 24 24"
      id="dustbin"
    >
      <defs>
        <linearGradient
          id="a"
          x1="-10.26"
          x2="32.52"
          y1="-9.78"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9cecfb"></stop>
          <stop offset=".51" stop-color="#65c7f7"></stop>
          <stop offset="1" stop-color="#0052d4"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M16.14,23H7.86a3,3,0,0,1-3-2.79L3.94,7A1,1,0,0,1,4,5H8V4a3,3,0,0,1,3-3h2a3,3,0,0,1,3,3V5h4a1,1,0,0,1,.06,2l-.93,13.21A3,3,0,0,1,16.14,23ZM5.94,7l.93,13.07a1,1,0,0,0,1,.93h8.28a1,1,0,0,0,1-.93L18.06,7ZM10,5h4V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Zm4,13a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,14,18Zm-4,0a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,10,18Z"
      ></path>
    </svg>
  </div>
));
IconDelete.displayName = "IconDelete";

const IconUnBookmark = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div {...props}>
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      id="bookmark-subtract"
    >
      <path
        fill="url(#a)"
        d="M17 1H7a3.12 3.12 0 0 0-3 3.21v15.58a3.21 3.21 0 0 0 1.76 2.92 2.8 2.8 0 0 0 3-.34l2.68-2.11a.85.85 0 0 1 1.08 0l2.68 2.11a2.82 2.82 0 0 0 3 .34 3.21 3.21 0 0 0 1.8-2.92V4.21A3.12 3.12 0 0 0 17 1Zm-3 8h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="12"
          x2="12"
          y1="1"
          y2="22.997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C0FF"></stop>
          <stop offset="1" stop-color="#4071FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
));
IconUnBookmark.displayName = "IconUnBookmark";

const IconBookmark = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div {...props}>
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Gradient Line"
      viewBox="0 0 24 24"
      id="bookmark"
    >
      <defs>
        <linearGradient
          id="a"
          x1="-10.17"
          x2="32.62"
          y1="-9.87"
          y2="32.91"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9cecfb"></stop>
          <stop offset=".51" stop-color="#65c7f7"></stop>
          <stop offset="1" stop-color="#0052d4"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M18,23a2,2,0,0,1-1-.27l-5-2.86L7,22.73A2,2,0,0,1,4,21V4A3,3,0,0,1,7,1H17a3,3,0,0,1,3,3V21a2,2,0,0,1-1,1.73A2,2,0,0,1,18,23Zm-6-5.13a1.94,1.94,0,0,1,1,.27L18,21V4a1,1,0,0,0-1-1H7A1,1,0,0,0,6,4V21l5-2.86A1.94,1.94,0,0,1,12,17.87ZM15,7H9A1,1,0,0,1,9,5h6a1,1,0,0,1,0,2Z"
      ></path>
    </svg>
  </div>
));
IconBookmark.displayName = "IconBookmark";

const IconEdit = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      fill="none"
      viewBox="0 0 24 24"
      id="edit"
    >
      <path
        fill="url(#paint0_linear_1233_4284)"
        fill-rule="evenodd"
        d="M20.7071 1.29289C20.3166 0.902369 19.6834 0.902369 19.2929 1.29289L11.2929 9.29289C11.1831 9.40267 11.1004 9.53649 11.0513 9.68377L10.0513 12.6838C9.93154 13.0431 10.0251 13.4393 10.2929 13.7071C10.5607 13.9749 10.9569 14.0685 11.3162 13.9487L14.3162 12.9487C14.4635 12.8996 14.5973 12.8169 14.7071 12.7071L22.7071 4.70711C23.0976 4.31658 23.0976 3.68342 22.7071 3.29289L20.7071 1.29289ZM12.5811 11.4189L12.874 10.5402L20 3.41421L20.5858 4L13.4598 11.126L12.5811 11.4189ZM3 6C3 5.44772 3.44772 5 4 5H14.5C15.0523 5 15.5 4.55228 15.5 4C15.5 3.44772 15.0523 3 14.5 3H4C2.34315 3 1 4.34315 1 6V20C1 21.6569 2.34315 23 4 23H18C19.6569 23 21 21.6569 21 20V9.5C21 8.94772 20.5523 8.5 20 8.5C19.4477 8.5 19 8.94772 19 9.5V20C19 20.5523 18.5523 21 18 21H4C3.44772 21 3 20.5523 3 20V6Z"
        clip-rule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1233_4284"
          x1="12"
          x2="12"
          y1="1"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#57EAEA"></stop>
          <stop offset="1" stop-color="#2BC9FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
));
IconEdit.displayName = "IconEdit";

const IconComment = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      className={cn(className)}
      id="comment"
    >
      <g>
        <linearGradient
          id="a"
          x1="2"
          x2="22"
          y1="13.001"
          y2="13.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#59c173"></stop>
          <stop offset="1" stop-color="#5d26c1"></stop>
        </linearGradient>
        <path
          fill="url(#a)"
          d="M3.0703,17.9941v1.3257c0,1.1392,0.6533,2.1274,1.665,2.5171c0.2871,0.1108,0.582,0.1646,0.8721,0.1646
		c0.666,0,1.3086-0.2842,1.7939-0.8198l1.4307-1.5781c2.2764,0.1025,4.5771-0.0059,6.8545-0.3228
		c1.5371-0.2114,2.7617-1.4438,3.0459-3.0562c0.1099-0.5847,0.1713-1.1757,0.2094-1.7531c0.0847-0.0117,0.1729-0.0192,0.2564-0.0311
		c1.3076-0.1826,2.3516-1.2554,2.5957-2.6641C21.9307,11.0137,22,10.2041,22,9.3701c0-0.8408-0.0693-1.6538-0.2061-2.4155
		c-0.168-0.9443-0.6973-1.7583-1.4209-2.2109c-0.334-0.228-0.7471-0.3887-1.1709-0.4536c-2.6729-0.3848-5.5781-0.3862-8.2744,0.0015
		c-0.4131,0.0635-0.8105,0.2202-1.1123,0.4272c-0.7568,0.4663-1.2891,1.2808-1.4551,2.21C8.3509,6.9746,8.3483,7.0234,8.3397,7.0698
		C7.3392,7.1252,6.326,7.2106,5.2998,7.3511c-0.4922,0.0752-0.96,0.2559-1.3047,0.4917c-0.8994,0.54-1.5303,1.48-1.7275,2.5698
		C2.0898,11.3433,2,12.3213,2,13.3198s0.0898,1.9771,0.2627,2.8789C2.3701,16.8647,2.6523,17.4878,3.0703,17.9941z M10.9033,6.396
		c0.0928-0.0635,0.2129-0.1099,0.3193-0.1265c2.4863-0.3574,5.2188-0.356,7.6855-0.0015c0.1221,0.019,0.248,0.0664,0.3701,0.1489
		c0.2744,0.1719,0.4785,0.5039,0.5469,0.8892C19.9414,7.9531,20,8.6475,20,9.3701c0,0.7158-0.0586,1.4067-0.1758,2.0591
		c-0.0889,0.5127-0.4395,0.9312-0.8477,1.0205c-0.007-0.1337-0.0236-0.2635-0.0339-0.396c-0.0097-0.1236-0.019-0.2462-0.0315-0.3685
		c-0.0438-0.4293-0.0988-0.8533-0.1768-1.2633c-0.1992-1.0991-0.8301-2.0391-1.6826-2.5488
		c-0.3916-0.2661-0.8594-0.4468-1.3652-0.5239c-0.7127-0.0981-1.436-0.1658-2.1642-0.2205c-0.2556-0.02-0.51-0.0382-0.7673-0.0531
		c-0.6505-0.0359-1.3059-0.0598-1.9694-0.0659C10.6899,7.0089,10.5958,7,10.5,7c-0.0303,0-0.0596,0-0.0898,0
		C10.5107,6.7451,10.6768,6.5361,10.9033,6.396z M4.2344,10.7783c0.0977-0.54,0.3779-0.9736,0.8369-1.251
		c0.1455-0.0981,0.333-0.1689,0.5146-0.1968c1.2285-0.1685,2.459-0.2729,3.6475-0.311c0.5078-0.0122,1.0161-0.0156,1.5231-0.011
		c0.6246,0.0043,1.2455,0.0269,1.862,0.0621c0.2514,0.0137,0.5005,0.0326,0.7499,0.0513c0.6854,0.0535,1.3677,0.1153,2.031,0.2066
		c0.1963,0.0298,0.3838,0.1006,0.5762,0.229c0.4121,0.2471,0.6924,0.6807,0.792,1.23C16.9219,11.5947,17,12.4468,17,13.3198
		c0,0.0496,0.001,0.0943-0.0037,0.1432c-0.0015,0.0307-0.0023,0.0564-0.0061,0.1053c-0.0088,0.7788-0.084,1.5483-0.2246,2.2979
		c-0.1328,0.7524-0.6895,1.3418-1.3535,1.4336c-2.3115,0.3218-4.6484,0.418-6.9434,0.2822
		c-0.2969-0.0181-0.5957,0.1021-0.7998,0.3262l-1.75,1.9307c-0.1387,0.1523-0.2939,0.1987-0.4648,0.1313
		c-0.1855-0.0713-0.3838-0.2798-0.3838-0.6504v-1.7197c0-0.2778-0.1152-0.5435-0.3193-0.7324
		c-0.2695-0.2505-0.4521-0.6006-0.5186-1.0151C4.0781,15.0454,4,14.1929,4,13.3198S4.0781,11.5947,4.2344,10.7783z"
        ></path>
      </g>
    </svg>
  </div>
));
IconComment.displayName = "IconComment";

export { IconDelete, IconUnBookmark, IconBookmark, IconEdit, IconComment };
