const ContentLoader = () => {
  const arr = new Array(8).fill("");
  return arr.map(() => (
    <div
      data-testid="content-loader"
      className="flex flex-col items-center justify-center text-transparent select-none bg-gray-200 animate-pulse shadow-lg rounded-lg p-4 m-2"
    >
      <div>.</div>
      <div>.</div>
    </div>
  ));
};

export default ContentLoader;
