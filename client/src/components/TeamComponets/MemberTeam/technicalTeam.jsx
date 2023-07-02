import React from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import UpTechnicalMember from "../UpdateTeam/UpTechnicalMember";
import { AcademicCapIcon, CheckBadgeIcon, ShareIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";

const TechnicalTeam = () => {

  const { userInfo } = useSelector((state) => state.auth);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    "/api/creativemember/gettechnicalmember",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;


  return (
    <div className="mb-10">
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.post.map((item,index) => (
            <>
                 <div
              className="pb-3 container mx-auto bg-white h-80 shadow-xl rounded-xl"
              key={index}
            >
              <div className="flex justify-center  rounded-t-2xl">
                <img
                  src={item.image}
                  alt="loading"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                  className="h-32 w-32 m-3 ring-2 ring-amber-300 bg-amber-300 object-cover rounded-full"
                />
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center space-x-2">
                  <p className="text-xl pt-4 text-center font-semibold text-black">
                    {item.NAME}
                  </p>
                  <Tooltip title={"verified"}>
                    <CheckBadgeIcon className="h-6 w-6 mt-4 text-fuchsia-400" />
                  </Tooltip>
                </div>
                <div className="bg-orange-400 mt-8  text-center">
                  <p className="text-base text-white">{item.POST}</p>
                </div>
              </div>
              <div className="flex justify-around pt-5">
                <div>
                  <ShareIcon className="h-6 w-6 text-red-500 cursor-pointer" />
                </div>
                <div>
                  {userInfo ? (
                    <UpTechnicalMember item={item} mutate={mutate} />
                  ) : (
                    <div className="flex justify-center space-x-2">
                      <AcademicCapIcon className="h-6 w-6 cursor-pointer text-teal-500" />
                      <p>{item.YEAR} Years</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            </>
          ))}
        </div>
    </div>
  );
};

export default TechnicalTeam;
