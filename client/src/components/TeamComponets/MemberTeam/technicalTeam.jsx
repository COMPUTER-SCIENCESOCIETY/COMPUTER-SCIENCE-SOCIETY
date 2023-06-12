import axios from "axios";
import React, { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

const TechnicalTeam = () => {
  const [data, setData] = React.useState([]);
  const [Loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios.get("/api/creativemember/gettechnicalmember").then((response) => {
      setData(response.data.post);
      setLoading(true);
    });
  }, []);

  return (
    <div className="mb-10">
      {Loading ? (
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <>
              <div className="flex items-start ring-1 ring-amber-300 rounded-lg hover:bg-amber-300">
                <img
                  src={item.image}
                  alt="loading"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                  className="h-32 w-32 m-3 object-cover rounded-full"
                />
                <div className="ml-5 m-3">
                  <h3 className="text-xl font-semibold text-black">
                    {item.NAME}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {item.YEAR} Year
                  </p>
                  <div className="bg-red-400 w-[199px] rounded-2xl text-center">
                    <p className="mt-3 text-base text-white">{item.POST}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default TechnicalTeam;
