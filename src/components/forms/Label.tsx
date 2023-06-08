const Label = ({ htmlFor, text }: { htmlFor: string; text: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className=" block text-sm font-extrabold leading-6 text-blue"
    >
      {text}
    </label>
  );
};
export default Label;
