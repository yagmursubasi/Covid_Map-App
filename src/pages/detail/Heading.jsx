import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import HeaderLoader from "../../components/loader/HeaderLoader";

const Heading = () => {
  const { isLoading, data } = useSelector((state) => state);
  console.log(data);
  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="group bg-[#ce4095] hover:bg-[#b0327d] text-white py-2 px-3 rounded-lg flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-105"
      >
        <MdKeyboardArrowLeft className="text-xl transition-colors duration-300 group-hover:text-white" />
        Geri
      </Link>
      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="  text-2xl lg:text-3xl font-bold text-center text-gray-900">
              {data.country}
            </h1>
            <img
              src={data?.flag.png}
              alt={data.flag.alt}
              className="drop-shadow-[0_0_5px_rgba(0,0,0,0.3)] w-[55px] "
            />
          </div>
        )
      )}
    </div>
  );
};

export default Heading;
