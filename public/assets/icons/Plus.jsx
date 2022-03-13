import React from "react";

const Plus = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20V12M12 12V4M12 12H20M12 12H4"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Plus;
