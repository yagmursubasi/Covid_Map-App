const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="flex flex-col items-center justify-center text-black bg-white shadow-lg rounded-lg p-4 m-2">
      <p className="text-sm font-semibold mb-2 capitalize text-[#183ea5] ">
        {item[0]}{" "}
      </p>
      <h2 className="text-lg font-bold ">{item[1]} </h2>
    </div>
  );
};

export default Card;
