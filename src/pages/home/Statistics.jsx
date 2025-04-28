import millify from "millify";
import Item from "./Item";

const Statistics = () => {
  return (
    <div className="container">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px] ">
        <Item
          color="text-pink-500"
          text="Toplam Vaka"
          value={millify(777704325)}
        />
        <Item
          color="text-green-400"
          text="Toplam İyileşen"
          value={millify(769688695)}
        />
        <Item
          color="text-gray-600"
          text="Toplam Vefat"
          value={millify(793786)}
        />
      </div>
    </div>
  );
};

export default Statistics;
