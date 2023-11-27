import React from "react";
// import styles from "../../../modules/Hero/hero.module.scss";

export const SvgSelector = ({ color, id, styles, viewBox }) => {
  switch (id) {
    case "facebook":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12.8936C22 7.37355 17.52 2.89355 12 2.89355C6.48 2.89355 2 7.37355 2 12.8936C2 17.7336 5.44 21.7636 10 22.6936V15.8936H8V12.8936H10V10.3936C10 8.46355 11.57 6.89355 13.5 6.89355H16V9.89355H14C13.45 9.89355 13 10.3436 13 10.8936V12.8936H16V15.8936H13V22.8436C18.05 22.3436 22 18.0836 22 12.8936Z"
            fill="#FFFDFA"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 6.71355C15.9165 5.93318 15.5397 4.93099 15.54 3.89355H12.45V16.2936C12.4262 16.9646 12.1429 17.6002 11.6598 18.0665C11.1767 18.5328 10.5315 18.7935 9.86003 18.7936C8.44003 18.7936 7.26003 17.6336 7.26003 16.1936C7.26003 14.4736 8.92003 13.1836 10.63 13.7136V10.5536C7.18003 10.0936 4.16003 12.7736 4.16003 16.1936C4.16003 19.5236 6.92003 21.8936 9.85003 21.8936C12.99 21.8936 15.54 19.3436 15.54 16.1936V9.90355C16.793 10.8034 18.2974 11.2862 19.84 11.2836V8.19355C19.84 8.19355 17.96 8.28356 16.6 6.71355Z"
            fill="#FFFDFA"
          />
        </svg>
      );

    case "paginationArrowL":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7L9 12L14 17"
            stroke="#010101"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "paginationArrowR":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17L15 12L10 7"
            stroke="#010101"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
