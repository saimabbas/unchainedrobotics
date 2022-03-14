import React from "react";

const LinkedIn = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.983 7.19704C6.1914 7.19704 7.171 6.21744 7.171 5.00904C7.171 3.80065 6.1914 2.82104 4.983 2.82104C3.7746 2.82104 2.795 3.80065 2.795 5.00904C2.795 6.21744 3.7746 7.19704 4.983 7.19704Z"
        fill={props.color}
      />
      <path
        d="M9.237 8.85493V20.9939H13.006V14.9909C13.006 13.4069 13.304 11.8729 15.268 11.8729C17.205 11.8729 17.229 13.6839 17.229 15.0909V20.9949H21V14.3379C21 11.0679 20.296 8.55493 16.474 8.55493C14.639 8.55493 13.409 9.56193 12.906 10.5149H12.855V8.85493H9.237ZM3.095 8.85493H6.87V20.9939H3.095V8.85493Z"
        fill={props.color}
      />
    </svg>
  );
};

export default LinkedIn;