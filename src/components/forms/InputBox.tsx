const InputBox = ({ children }: { children: [JSX.Element, JSX.Element] }) => {
  const [labelChild, fieldChild] = children;

  return (
    <div>
      <div className="flex items-center justify-between">{labelChild}</div>
      <div className="mt-2">{fieldChild}</div>
    </div>
  );
};

export default InputBox;
