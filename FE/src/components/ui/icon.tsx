import { cn } from "@/lib/utils";

const IconDelete = ({ className }: any) => (
  <div>
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
          <stop offset="0" stopColor="#9cecfb"></stop>
          <stop offset=".51" stopColor="#65c7f7"></stop>
          <stop offset="1" stopColor="#0052d4"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M16.14,23H7.86a3,3,0,0,1-3-2.79L3.94,7A1,1,0,0,1,4,5H8V4a3,3,0,0,1,3-3h2a3,3,0,0,1,3,3V5h4a1,1,0,0,1,.06,2l-.93,13.21A3,3,0,0,1,16.14,23ZM5.94,7l.93,13.07a1,1,0,0,0,1,.93h8.28a1,1,0,0,0,1-.93L18.06,7ZM10,5h4V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1Zm4,13a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,14,18Zm-4,0a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,10,18Z"
      ></path>
    </svg>
  </div>
);
IconDelete.displayName = "IconDelete";

const IconUnBookmark = ({ className, ...props }: any) => (
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
          <stop stopColor="#00C0FF"></stop>
          <stop offset="1" stopColor="#4071FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);
IconUnBookmark.displayName = "IconUnBookmark";

const IconBookmark = ({ className, ...props }: any) => (
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
          <stop offset="0" stopColor="#9cecfb"></stop>
          <stop offset=".51" stopColor="#65c7f7"></stop>
          <stop offset="1" stopColor="#0052d4"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M18,23a2,2,0,0,1-1-.27l-5-2.86L7,22.73A2,2,0,0,1,4,21V4A3,3,0,0,1,7,1H17a3,3,0,0,1,3,3V21a2,2,0,0,1-1,1.73A2,2,0,0,1,18,23Zm-6-5.13a1.94,1.94,0,0,1,1,.27L18,21V4a1,1,0,0,0-1-1H7A1,1,0,0,0,6,4V21l5-2.86A1.94,1.94,0,0,1,12,17.87ZM15,7H9A1,1,0,0,1,9,5h6a1,1,0,0,1,0,2Z"
      ></path>
    </svg>
  </div>
);
IconBookmark.displayName = "IconBookmark";

const IconEdit = ({ className, ...props }: any) => (
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
          <stop stopColor="#57EAEA"></stop>
          <stop offset="1" stopColor="#2BC9FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);
IconEdit.displayName = "IconEdit";

const IconComment = ({ className, ...props }: any) => (
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
          <stop offset="0" stopColor="#59c173"></stop>
          <stop offset="1" stopColor="#5d26c1"></stop>
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
);
IconComment.displayName = "IconComment";

const IconHide = ({ className, ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 56"
      viewBox="0 0 24 24"
      className={cn(className)}
      id="hide"
    >
      <defs>
        <linearGradient
          id="a"
          x1="5.99"
          x2="18.01"
          y1="5.99"
          y2="18.009"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8e2de2"></stop>
          <stop offset="1" stopColor="#4a00e0"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="m17.37 5.739 1.46-2.19a1 1 0 1 0-1.66-1.1l-1.56 2.34A9.082 9.082 0 0 0 12 4C6.63 4 2 9.369 2 12c0 1.68 1.88 4.45 4.63 6.26l-1.46 2.19a.988.988 0 0 0 .28 1.38A.938.938 0 0 0 6 22a1 1 0 0 0 .83-.45l1.56-2.34A9.081 9.081 0 0 0 12 20c5.37 0 10-5.37 10-8 0-1.681-1.88-4.451-4.63-6.261ZM9.02 14.66v.01l-1.29 1.94C5.49 15.15 4 12.95 4 12c0-1.47 3.6-6 8-6a7.1 7.1 0 0 1 2.48.47l-1.16 1.75A4.248 4.248 0 0 0 12 8a3.994 3.994 0 0 0-2.98 6.66ZM12 18a7.094 7.094 0 0 1-2.48-.47l6.75-10.14C18.51 8.849 20 11.049 20 12c0 1.47-3.6 6-8 6Z"
      ></path>
    </svg>
  </div>
);
IconHide.displayName = "IconHide";

const IconReport = ({ className, ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn(className)}
      id="analytics-report"
    >
      <defs>
        <linearGradient
          id="a"
          x1="16"
          x2="16"
          y1="28.5"
          y2="3.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#12c2e9"></stop>
          <stop offset="1" stopColor="#c471ed"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M23.25 19.6V3.5h-20v22a3 3 0 0 0 3 3h19.5a3 3 0 0 0 3-3v-5.9ZM18 21.94H8v-2h10Zm.5-9.52h-.07l-1.8 2.44a1.67 1.67 0 0 1 .21.8 1.75 1.75 0 0 1-3.5 0 1.74 1.74 0 0 1 .1-.56l-1.82-2.48L10 14.83a1.7 1.7 0 0 1 .23.84 1.75 1.75 0 0 1-3.5 0 1.74 1.74 0 0 1 1.56-1.73l-.07-.06 1.94-2.64a1.67 1.67 0 0 1-.11-.59 1.75 1.75 0 1 1 3.24.9L15 13.79l1.87-2.55a1.62 1.62 0 0 1-.11-.58 1.75 1.75 0 1 1 1.75 1.75Zm8.25 13.08a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3.9h3Z"
        data-name="chart 9"
      ></path>
    </svg>
  </div>
);
IconReport.displayName = "IconReport";

const IconReportUser = ({ className, ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      className={cn(className)}
      viewBox="0 0 512 512"
      id="cancel-user"
    >
      <path
        fill="#00efd1"
        d="M211 223a90.4 90.4 0 1 0-90.4-90.4A90.5 90.5 0 0 0 211 223zm0-160.7a70.4 70.4 0 1 1-70.4 70.4A70.5 70.5 0 0 1 211 62.3zM361 449.7H71v-132a62.366 62.366 0 0 1 57.5-62.1 106.586 106.586 0 0 0 165 0A62.025 62.025 0 0 1 349.3 303l19.4-4.7a82.074 82.074 0 0 0-80-62.8h0a10 10 0 0 0-8.1 4.1 86.461 86.461 0 0 1-139.4 0 10 10 0 0 0-8.1-4.1h0a82.432 82.432 0 0 0-82.3 82.3v142a10.029 10.029 0 0 0 10 10h300a10.029 10.029 0 0 0 10-10v-.6h-10v-9.5z"
      ></path>
      <path
        fill="#00acea"
        d="M371,289.7a86.716,86.716,0,0,0-13.5,1A90.01,90.01,0,0,0,359.8,469a84.21,84.21,0,0,0,11.2.7,90,90,0,0,0,0-180Zm0,160a86.517,86.517,0,0,1-8.8-.5A70.065,70.065,0,0,1,301,379.7c0-34.3,25.6-64.1,59.4-69.2a74.518,74.518,0,0,1,10.6-.8,70,70,0,0,1,0,140Z"
      ></path>
      <path
        fill="#00acea"
        d="M403,347.9a9.959,9.959,0,0,0-14.1,0L371,365.7,353.3,348a9.97,9.97,0,0,0-14.1,14.1l17.7,17.7L339,397.7a9.959,9.959,0,0,0,0,14.1,9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9L371,394l17.7,17.7a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1l-17.7-17.7L403,362A9.959,9.959,0,0,0,403,347.9Z"
      ></path>
    </svg>
  </div>
);
IconReportUser.displayName = "IconReportUser";

const IconBlock = ({ className, ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 48 48"
      id="transaction"
      className={cn(className)}
    >
      <defs>
        <linearGradient id="a">
          <stop offset="0" stopColor="#000092"></stop>
          <stop offset="1" stopColor="#ff00f3"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="4.001"
          x2="41.975"
          y1="23.987"
          y2="23.987"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        ></linearGradient>
      </defs>
      <path
        fill="url(#b)"
        d="M36.05 9.975c-2.05 0-4.1.776-5.65 2.326-3.1 3.1-3.1 8.199 0 11.299C31.9 25.2 34 26 36 26c2 0 4.1-.8 5.7-2.3 3.1-3.2 3.1-8.2 0-11.4a7.964 7.964 0 0 0-5.65-2.325zM36 12c1.2 0 2.4.4 3.5 1.1l-8.3 8.3c-1.7-2.3-1.5-5.5.6-7.6C33 12.6 34.5 12 36 12zm-26 2c-1.7 0-3 1.3-3 3v11.6l-1.3-1.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L9 28.6V17c0-.6.4-1 1-1h15c.6 0 1-.4 1-1s-.4-1-1-1H10zm30.8.5c1.7 2.4 1.5 5.6-.6 7.7-2.1 2.1-5.4 2.3-7.7.6l8.3-8.3zM36 28c-.6 0-1 .4-1 1v6c0 .6-.4 1-1 1H8c-.6 0-1 .4-1 1s.4 1 1 1h26c1.7 0 3-1.3 3-3v-6c0-.6-.4-1-1-1z"
      ></path>
    </svg>
  </div>
);
IconBlock.displayName = "IconBlock";

const IconSettingAccount = ({ ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="profile-setting"
      // className={cn(className)}
      className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
    >
      <defs>
        <linearGradient
          id="a"
          x1="7.12"
          x2="24.88"
          y1="7.12"
          y2="24.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00c6ff"></stop>
          <stop offset="1" stopColor="#0072ff"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M28.05,14.15h-2.1c-.26-1.38-.81-2.71-1.61-3.88l1.49-1.49c.2-.18,.2-.52,0-.7l-1.91-1.91c-.19-.2-.51-.2-.7,0l-1.49,1.49c-1.17-.8-2.5-1.35-3.88-1.61V3.95c0-.28-.22-.5-.5-.5h-2.7c-.28,0-.5,.22-.5,.5v2.1c-1.38,.26-2.71,.81-3.88,1.61l-1.49-1.49c-.19-.2-.51-.2-.7,0l-1.91,1.91c-.2,.18-.2,.52,0,.7l1.49,1.49c-.8,1.17-1.35,2.5-1.61,3.88H3.95c-.28,0-.5,.22-.5,.5v2.7c0,.28,.22,.5,.5,.5h2.1c.26,1.38,.81,2.71,1.61,3.88l-1.49,1.49c-.2,.18-.2,.52,0,.7l1.91,1.91c.19,.2,.51,.2,.7,0l1.49-1.49c1.17,.8,2.5,1.35,3.88,1.61v2.1c0,.28,.22,.5,.5,.5h2.7c.28,0,.5-.22,.5-.5v-2.1c1.38-.26,2.71-.81,3.88-1.61l1.49,1.49c.19,.2,.51,.2,.7,0l1.91-1.91c.2-.18,.2-.52,0-.7l-1.49-1.49c.8-1.17,1.35-2.5,1.61-3.88h2.1c.28,0,.5-.22,.5-.5v-2.7c0-.28-.22-.5-.5-.5Zm-12.05,8.31c-3.56,0-6.46-2.9-6.46-6.46,.33-8.56,12.59-8.56,12.92,0,0,3.56-2.9,6.46-6.46,6.46Zm0-10.78c.9,0,1.63,.78,1.63,1.75,.05,1.33-1.52,2.28-2.58,1.42-1.26-.9-.64-3.2,.95-3.17Zm3.26,7.36c-.04,.39,.19,1.27-.44,1.27h-5.64c-.63,0-.41-.89-.44-1.27,.13-4.31,6.39-4.33,6.53,0Z"
      ></path>
    </svg>
  </div>
);
IconSettingAccount.displayName = "IconSettingAccount";

const IconAddress = ({ ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 64 64"
      id="home-location"
      className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
    >
      <defs>
        <linearGradient
          id="a"
          x1="53.914"
          x2="17.962"
          y1="9.563"
          y2="71.833"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00aeef"></stop>
          <stop offset=".57" stopColor="#5a4ef6"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M42.228 19.42 40 17.689V14a2 2 0 0 0-4 0v.577l-2.772-2.156a2.004 2.004 0 0 0-2.456 0l-9 7A1.995 1.995 0 0 0 24 22.72V26a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-3.298a1.986 1.986 0 0 0 2.228-3.281ZM34 26v-1a2 2 0 0 0-4 0v1h-2v-6.355l4-3.11 4 3.11V26ZM32 0a20.023 20.023 0 0 0-20 20c0 21.058 18.404 29.48 19.188 29.827a1.996 1.996 0 0 0 1.625 0C33.596 49.48 52 41.057 52 20A20.023 20.023 0 0 0 32 0Zm0 45.77C28.598 43.986 16 36.273 16 20a16 16 0 0 1 32 0c0 16.276-12.603 23.988-16 25.77ZM58 34h-5a2 2 0 0 0 0 4h5a2.002 2.002 0 0 1 2 2v3H47a2 2 0 0 0 0 4h13v4H40a2 2 0 0 0-1.505 3.317L43.467 60h-8.569l-7.403-8.33A2 2 0 0 0 26 51H4v-4h13a2 2 0 0 0 0-4H4v-3a2.002 2.002 0 0 1 2-2h5a2 2 0 0 0 0-4H6a6.007 6.007 0 0 0-6 6v18a6.007 6.007 0 0 0 6 6h52a6.007 6.007 0 0 0 6-6V40a6.007 6.007 0 0 0-6-6ZM4 58v-3h21.102l4.444 5H6a2.002 2.002 0 0 1-2-2Zm54 2h-9.27a2.006 2.006 0 0 0-.225-.317L44.408 55H60v3a2.002 2.002 0 0 1-2 2Z"
      ></path>
    </svg>
  </div>
);
IconAddress.displayName = "IconAddress";

const IconPassword = ({ ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
      id="security"
    >
      <path
        fill="#3b65f5"
        d="M17,9V5c0-1.7-1.3-3-3-3h-4C8.3,2,7,3.3,7,5v4c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,5c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v4H9V5z M18,19c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1V19z"
      ></path>
    </svg>
  </div>
);
IconPassword.displayName = "IconPassword";

const IconNotification = ({ ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
      id="notification"
    >
      <path
        fill="url(#paint0_linear_1_13239)"
        d="M19.1832 7C19.1832 8.10457 18.2878 9 17.1832 9C16.0787 9 15.1832 8.10457 15.1832 7C15.1832 5.89543 16.0787 5 17.1832 5C18.2878 5 19.1832 5.89543 19.1832 7Z"
      ></path>
      <path
        fill="url(#paint1_linear_1_13239)"
        fillRule="evenodd"
        d="M11.1 1.25C7.70442 1.25 5.07724 4.22603 5.49841 7.59536L5.57776 8.23021C5.69388 9.15916 5.35455 10.0871 4.66654 10.7219C3.24086 12.0375 2.84477 14.1315 3.69142 15.8769L3.79477 16.09C4.54092 17.6282 6.05598 18.6356 7.74728 18.7409L7.93556 19.0636C8.94835 20.7998 10.5264 21.75 12.1834 21.75C13.8404 21.75 15.4184 20.7998 16.4312 19.0636L16.6225 18.7358C18.0431 18.6235 19.3385 17.8513 20.1111 16.6373C21.2932 14.7799 20.9801 12.3432 19.3668 10.845L19.3229 10.8042C18.9565 10.4639 18.6824 10.0466 18.5145 9.59023C18.0699 9.85069 17.5524 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C17.2417 4 17.4768 4.02859 17.702 4.08258C16.7317 2.40121 14.9159 1.25 12.8029 1.25H11.1ZM12.1834 20.25C11.2623 20.25 10.2795 19.7877 9.52013 18.75H14.8467C14.0873 19.7877 13.1045 20.25 12.1834 20.25Z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_13239"
          x1="12.037"
          x2="12.037"
          y1="1.25"
          y2="21.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#834D9B"></stop>
          <stop offset="1" stopColor="#D04ED6"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_13239"
          x1="12.037"
          x2="12.037"
          y1="1.25"
          y2="21.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#834D9B"></stop>
          <stop offset="1" stopColor="#D04ED6"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);
IconNotification.displayName = "IconNotification";

const IconHelp = ({ ...props }: any) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
      id="help"
    >
      <path
        fill="url(#paint0_linear_2461_9463)"
        d="M19.5816 18.5209C21.0889 16.7701 22 14.4915 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906L15.3089 9.75178C15.745 10.3925 16 11.1665 16 12C16 12.8335 15.745 13.6075 15.3089 14.2482L19.5816 18.5209Z"
      ></path>
      <path
        fill="url(#paint1_linear_2461_9463)"
        d="M18.5209 19.5816C16.7701 21.0889 14.4915 22 12 22C9.50853 22 7.22987 21.0889 5.47906 19.5816L9.75178 15.3089C10.3925 15.745 11.1665 16 12 16C12.8335 16 13.6075 15.745 14.2482 15.3089L18.5209 19.5816Z"
      ></path>
      <path
        fill="url(#paint2_linear_2461_9463)"
        d="M4.4184 18.5209L8.69112 14.2482C8.25495 13.6075 8 12.8335 8 12C8 11.1665 8.25495 10.3925 8.69112 9.75178L4.4184 5.47906C2.91114 7.22987 2 9.50853 2 12C2 14.4915 2.91114 16.7701 4.4184 18.5209Z"
      ></path>
      <path
        fill="url(#paint3_linear_2461_9463)"
        d="M12 8C11.1665 8 10.3925 8.25495 9.75178 8.69112L5.47906 4.4184C7.22987 2.91114 9.50853 2 12 2C14.4915 2 16.7701 2.91114 18.5209 4.4184L14.2482 8.69112C13.6075 8.25495 12.8335 8 12 8Z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2461_9463"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854D9C"></stop>
          <stop offset="1" stopColor="#CD4ED3"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2461_9463"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854D9C"></stop>
          <stop offset="1" stopColor="#CD4ED3"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2461_9463"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854D9C"></stop>
          <stop offset="1" stopColor="#CD4ED3"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2461_9463"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#854D9C"></stop>
          <stop offset="1" stopColor="#CD4ED3"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);
IconHelp.displayName = "IconHelp";

export {
  IconDelete,
  IconUnBookmark,
  IconBookmark,
  IconEdit,
  IconComment,
  IconHide,
  IconReport,
  IconReportUser,
  IconBlock,
  IconSettingAccount,
  IconPassword,
  IconAddress,
  IconNotification,
  IconHelp,
};

export function FolderIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      {...props}
    >
      <path
        fill="#F7A004"
        d="M52.613 50.4H5.602v-42h46.626A3.773 3.773 0 0 1 56 12.174v34.84a3.387 3.387 0 0 1-3.387 3.387Z"
      />
      <path
        fill="#fff"
        d="M8.398 47.6V11.2h43.827c.536 0 .972.436.972.973V47.01a.589.589 0 0 1-.588.588H8.4Z"
      />
      <path
        fill="url(#b)"
        d="m30.007 12.26-4.023-3.52a12.691 12.691 0 0 0-8.357-3.14h-6.836a3.795 3.795 0 0 0-3.795 3.795V22.4h39.199v-3.205A3.795 3.795 0 0 0 42.4 15.4h-4.036a12.691 12.691 0 0 1-8.357-3.14Z"
      />
      <path
        fill="url(#c)"
        d="m24.413 12.26-4.022-3.52a12.692 12.692 0 0 0-8.357-3.14H5.197a3.795 3.795 0 0 0-3.795 3.795V22.4h39.2v-3.205a3.795 3.795 0 0 0-3.795-3.795H32.77a12.69 12.69 0 0 1-8.357-3.14Z"
      />
      <path
        fill="#F9C10A"
        d="M48.999 46.9V21.973a3.772 3.772 0 0 0-3.773-3.772H30.1a4.967 4.967 0 0 1-4.121-2.2l-.003.006c-3.598-7.27-13.35-7.606-13.35-7.606h-8.35A4.274 4.274 0 0 0 0 12.675v34.072A3.653 3.653 0 0 0 3.653 50.4h48.846a3.5 3.5 0 0 1-3.5-3.5Z"
      />
      <defs>
        <linearGradient
          id="b"
          x1={6.996}
          x2={46.195}
          y1={14}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.001} stopColor="#009DFF" />
          <stop offset={0.355} stopColor="#217FFF" />
          <stop offset={0.772} stopColor="#4261FF" />
          <stop offset={1} stopColor="#4F56FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={1.402}
          x2={40.601}
          y1={14}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.001} stopColor="#00CE2C" />
          <stop offset={1} stopColor="#0CA529" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function PDFIcon({
  strokeWidth,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      {...props}
    >
      <path
        fill="#DC0A20"
        d="M14.336 0h18.742l15.866 16.545v32.174c0 4.017-3.263 7.281-7.292 7.281H14.336a7.286 7.286 0 0 1-7.281-7.281V7.28A7.286 7.286 0 0 1 14.336 0Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M33.055 0v16.416h15.887L33.055 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        d="M27.528 25c-.711.01-1.206.462-1.446.733-.557.626-.582 1.485-.396 2.317.186.832.585 1.718 1.071 2.615.055.1.115.169.172.27-.978 1.78-2.324 3.718-3.498 5.264-1.525.362-2.984.54-3.861 1.527-.734.827-.785 2.084 0 2.816.341.3.82.452 1.236.458a1.93 1.93 0 0 0 .993-.28c1.025-.625 1.692-1.954 2.431-3.49l5.992-1.396c.9 1.114 1.835 2.206 2.95 2.55.517.16 1.063.141 1.55-.035.489-.177.945-.526 1.153-1.064a2.05 2.05 0 0 0-.973-2.552c-.727-.392-1.633-.459-2.642-.415-.515.023-1.06.078-1.613.158-.653-.996-1.533-2.312-2.3-3.594.45-.893.84-1.773 1.01-2.58.187-.9.15-1.788-.361-2.472a1.72 1.72 0 0 0-1.468-.83Zm.492 1.544c.222.287.297.776.145 1.506-.084.405-.37.949-.577 1.443-.297-.61-.607-1.236-.714-1.713-.143-.64-.044-.995.12-1.236.115-.188.271-.304.495-.317.236-.013.393.14.53.317Zm-.37 5.52c.574.914 1.185 1.866 1.685 2.639l-4.01.973c.81-1.227 1.658-2.478 2.325-3.613Zm6.667 3.741c.44.238.573.615.413 1.038-.151.39-.878.495-1.198.38-.435-.135-1.136-.941-1.778-1.606.178-.044.393-.074.561-.082.645-.028 1.4-.013 2.002.27Zm-11.979 2.083c-.424.69-.902 1.627-1.181 1.797a.595.595 0 0 1-.757-.045c-.223-.216-.262-.703.091-1.1.36-.346.873-.49 1.847-.652Z"
      />
    </svg>
  );
}

export function DocIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="#0263D1"
        d="M14.336 0h18.742l15.866 16.545v32.174c0 4.017-3.263 7.281-7.292 7.281H14.336a7.286 7.286 0 0 1-7.281-7.281V7.28A7.286 7.286 0 0 1 14.336 0Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M33.059 0v16.416h15.887L33.06 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        d="M35.385 29.137H20.618c-.679 0-1.24-.55-1.24-1.228 0-.679.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.456Zm-4.922 14.767h-9.845c-.679 0-1.24-.55-1.24-1.228 0-.678.561-1.228 1.24-1.228h9.845a1.227 1.227 0 1 1 0 2.456Zm4.922-4.923H20.618c-.679 0-1.24-.549-1.24-1.227 0-.679.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.455Zm0-4.922H20.618c-.679 0-1.24-.55-1.24-1.228 0-.678.561-1.228 1.24-1.228h14.767a1.227 1.227 0 1 1 0 2.456Z"
      />
    </svg>
  );
}

export function ImageIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="#0AC963"
        fillRule="evenodd"
        d="M7.293 0h18.73l15.865 16.551v32.156A7.296 7.296 0 0 1 34.594 56H7.293A7.296 7.296 0 0 1 0 48.707V7.293A7.296 7.296 0 0 1 7.293 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M26 0v16.41h15.888L26 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28.06 27.988H13.827a1.95 1.95 0 0 0-1.941 1.942v9.045a1.95 1.95 0 0 0 1.941 1.942H28.06c1.066 0 1.918-.876 1.918-1.942V29.93c0-1.066-.852-1.942-1.918-1.942Zm-10.348 2.44c1.16 0 2.083.946 2.083 2.083 0 1.16-.923 2.107-2.083 2.107a2.112 2.112 0 0 1-2.108-2.107c0-1.137.947-2.084 2.108-2.084Zm10.987 8.547c0 .355-.285.663-.64.663H13.83c-.356 0-.64-.308-.64-.663v-.379l2.581-2.58 2.131 2.13c.26.26.663.26.924 0l5.351-5.35 4.523 4.522v1.657Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function XMLIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      {...props}
    >
      <path
        fill="#00733B"
        fillRule="evenodd"
        d="M14.348 0h18.73l15.864 16.551v32.156A7.296 7.296 0 0 1 41.65 56H14.348a7.296 7.296 0 0 1-7.293-7.293V7.293A7.296 7.296 0 0 1 14.348 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M33.055 0v16.41h15.888L33.055 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.39 41.083h7.436V43.9H19.39v-2.817Zm9.756-14.397h7.459v2.794h-7.459v-2.794Zm-9.755 0h7.435v2.794H19.39v-2.794Zm9.755 4.736h7.459v2.817h-7.459v-2.817Zm-9.755 0h7.435v2.817H19.39v-2.817Zm9.755 4.925h7.459v2.818h-7.459v-2.818Zm-9.755 0h7.435v2.818H19.39v-2.818Zm9.755 4.736h7.459V43.9h-7.459v-2.817Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
