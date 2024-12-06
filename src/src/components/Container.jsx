const Container = ({ children, className }) => {
  return (
    <div className={`w-full md:w-[768px] sm:w-[640px]  lg:w-[1024px] xl:w-[1280px] overflow-x-hidden mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
