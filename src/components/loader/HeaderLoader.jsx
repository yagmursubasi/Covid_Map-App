const HeaderLoader = () => {
  return (
    <div data-testid="header-loader" className="flex items-center gap-4">
      <div className="bg-gray-300 h-10 w-[120px] rounded-md animate-pulse" />
      <div className="bg-gray-300 w-16 h-10 rounded-md animate-pulse" />
    </div>
  );
};

export default HeaderLoader;
