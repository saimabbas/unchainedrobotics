import React from "react";

const CheckIcon = (props) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6637 0.19296C18.0512 0.495663 18.1129 1.04642 17.8015 1.42312L7.67655 13.6731C7.51462 13.869 7.27386 13.9878 7.01561 13.9991C6.75736 14.0105 6.50657 13.9133 6.32713 13.7324L0.252141 7.60738C-0.0928832 7.25952 -0.0825241 6.70559 0.275278 6.37015C0.633081 6.03471 1.20283 6.04478 1.54786 6.39265L6.91353 11.8025L16.3984 0.326938C16.7098 -0.0497582 17.2763 -0.109742 17.6637 0.19296Z"
        fill={props.color}
      />
    </svg>
  );
};

export default CheckIcon;
