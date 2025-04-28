import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/loader/ContentLoader";
import Error from "../../components/error/index";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";

const Content = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((store) => store);

  //data nesnesini diziye çevir
  const arr = Object.entries(data || {}).filter((i) => i[0] !== "flag");
  console.log(arr);
  return (
    <div className="grid grid-cols-2 gap-4 mt-5 max-md:grid-cols-1">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={() => dispatch(getDetails(code))} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
