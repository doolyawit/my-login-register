function ProductList({ children }: { children: JSX.Element[] }) {
  return (
    <div className="flex flex-col items-center  md:mb-16 md:flex-row">
      {children}
    </div>
  );
}

export default ProductList;
