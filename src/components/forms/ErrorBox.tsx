const ErrorBox = ({ children }: { children: string }) => {
  return (
    <div className=" mt-1 text-center text-sm font-semibold text-red">
      {children}
    </div>
  );
};
export default ErrorBox;
