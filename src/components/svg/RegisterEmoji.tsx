export const RegisterEmoji = () => {
  return (
    <svg
      className="mx-auto mt-2 w-12 rounded-full p-0"
      viewBox="0 0 36 36"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Margaret Brent</title>
      <mask
        id="mask__beam"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <rect width="36" height="36" fill="#FFFFFF" rx="72"></rect>
      </mask>
      <g mask="url(#mask__beam)">
        <rect width="36" height="36" fill="#86f6cc"></rect>
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          transform="translate(6 6) rotate(356 18 18) scale(1.2)"
          fill="#7e3cf9"
          rx="6"
        ></rect>
        <g transform="translate(4 1) rotate(6 18 18)">
          <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
          <rect
            x="13"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="#FFFFFF"
          ></rect>
          <rect
            x="21"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="#FFFFFF"
          ></rect>
        </g>
      </g>
    </svg>
  );
};
