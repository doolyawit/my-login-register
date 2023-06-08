export const LoginEmoji = ({ w, h }: { w: string; h: string }) => {
  return (
    <svg
      className="mx-auto mt-2"
      viewBox="0 0 36 36"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
    >
      <title>Georgia O</title>
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
        <rect width="36" height="36" fill="#fe6e45"></rect>
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          transform="translate(-3 7) rotate(67 18 18) scale(1.1)"
          fill="#fff87b"
          rx="36"
        ></rect>
        <g transform="translate(-3 3.5) rotate(7 18 18)">
          <path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path>
          <rect
            x="12"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="#000000"
          ></rect>
          <rect
            x="22"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="#000000"
          ></rect>
        </g>
      </g>
    </svg>
  );
};
