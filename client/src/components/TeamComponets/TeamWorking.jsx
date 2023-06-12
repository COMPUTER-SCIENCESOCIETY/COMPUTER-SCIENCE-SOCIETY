import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import TeamMember from "./TeamMember";
import { useSelector } from "react-redux";


const TeamWorking = () => {
  const [Data, setData] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  //heade of society members

  React.useEffect(() => {
    axios.get("/api/creativemember/getheadmember").then((response) => {
      setData(response.data.post);
    });
  }, []);

  return (
    <div className="mt-5">
      <section>
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mb-4 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-black">
              Information Technology Society (I T S) Team.
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
              CORE TEAM
            </h2>
          </div>
          <hr />
          <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Data.map((item) => (
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
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold text-black">
                        {item.NAME}
                      </h3>
                      {userInfo ? (
                        <PencilSquareIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                      ) : (
                        ""
                      )}
                    </div>

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
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mb-4 max-w-lg">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
            TEAM MEMBER
          </h2>
        </div>
        <hr />
        <div className="flex justify-center">
          <TeamMember />
        </div>
      </div>
    </div>
  );
};

export default TeamWorking;
