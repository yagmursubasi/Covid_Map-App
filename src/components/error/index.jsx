const Error = ({ info, refetch }) => {
  return (
    <div
      data-testid="error"
      className="flex flex-col col-span-3 items-center justify-center text-transparent select-none bg-gray-200 animate-pulse shadow-lg rounded-lg p-4 my-20"
    >
      <div>
        <h1 className="text-2xl text-red-500 font-bold">
          Üzgünüz bir hata oluştu.
        </h1>
        <p className="text-red-500">{info}</p>
      </div>
      <button
        onClick={refetch}
        className="bg-[#1e3a8a] text-white px-4 py-2 rounded mt-10 "
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
