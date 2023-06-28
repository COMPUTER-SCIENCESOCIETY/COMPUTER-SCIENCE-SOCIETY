import React from "react";
import UpSportMember from "../UpdateTeam/UpSportMember";
import { useSelector } from "react-redux";
import useSWR from "swr";

const SPORTSMEMBER = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    "/api/creativemember/getsportmember",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;



  return (
    <div className="mb-10">
        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.post.map((item,index) => (
            <>
              <div className="flex items-start ring-1 ring-amber-300 rounded-lg hover:bg-amber-300" key={index}>
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
                    {userInfo ? <UpSportMember item={item} mutate={mutate}/> : ""}
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
  );
};

export default SPORTSMEMBER;
