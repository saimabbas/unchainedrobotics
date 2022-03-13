import React from "react";

const Facebook = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.859 21V12.5539H7.62567V9.51287H9.859V6.91545C9.859 4.87438 11.1782 3 14.218 3C15.4488 3 16.3589 3.11799 16.3589 3.11799L16.2872 5.95778C16.2872 5.95778 15.359 5.94874 14.3462 5.94874C13.25 5.94874 13.0744 6.45391 13.0744 7.29237V9.51287H16.3743L16.2308 12.5539H13.0744V21H9.859Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Facebook;
