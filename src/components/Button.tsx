const Button = ({
  handleClick,
  word,
  cusStyle,
}: {
  handleClick?: () => void;
  word: string;
  cusStyle: string;
}): JSX.Element => {
  return (
    <button onClick={handleClick} className={cusStyle}>
      {word}
    </button>
  );
};
export default Button;
