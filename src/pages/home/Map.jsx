import { useNavigate } from "react-router-dom";
import { geoUrl } from "../../utils/Constants";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  const navigate = useNavigate();

  const redirect = (geo) => {
    navigate(`/detail/${geo.properties.name.toLowerCase()}`);
  };

  return (
    <div className="container p-0 mt-10 mb-20">
      <h1 className="p-5 text-2xl font-semibold">Ülke Seçin</h1>
      <div className="border shadow-lg md:rounded-xl bg-gray-200">
        <ComposableMap style={{ backgroundColor: "#88d6ea" }}>
          <ZoomableGroup zoom={1} center={[0, 20]}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "#90ea59", stroke: "gray" },
                      hover: { fill: "#DB2777" },
                    }}
                    onClick={() => redirect(geo)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
