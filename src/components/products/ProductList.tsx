function ProductList({ children }: { children: JSX.Element[] }) {
  return (
    <div className="flex flex-col items-center pb-10 md:mb-16 md:flex-row">
      {children}
    </div>
  );
}

export default ProductList;
