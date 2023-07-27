import React from "react";
import useSWR from "swr";
import TeamMember from "./TeamMember";
import { useSelector } from "react-redux";
import UpdateMember from "./UpdateTeam/UpdateMember";
import MediaLens from "./MemberTeam/MediaLens";
import { LinearProgress, Tooltip } from "@mui/material";
import {
  ShareIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import hapbirt from "../../assets/happy-birthday.json";
import "./Team.css";
import MessageHead from "../Message/MessageHead";
import ShareComp from "../ShareComponent/ShareComp";

const TeamWorking = () => {
  const { userInfo } = useSelector((state) => state.auth);
  //heade of society members
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    "/api/creativemember/getheadmember",
    fetcher
  );

  let currentDate = new Date().toJSON().slice(5, 10);


  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <div className="">
          {" "}
          <LinearProgress color="success" />
        </div>
      </div>
    );

  return (
    <div className="pt-5 back">
      <section>
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mb-4 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-black">
              Information Technology Society (I T S) Team.
            </p>
            <div>
              <div className="flex justify-between space-x-2 pt-5">
                <div className="flex justify-start items-center bg-white rounded-full shadow-lg shadow-amber-400">
                  <CheckBadgeIcon className="h-6 w-6 mx-2  text-amber-400" />
                  <p className="text-xl px-2 text-center font-semibold text-black">
                    Core Team
                  </p>
                </div>
                <div className="flex justify-start items-center bg-white  rounded-full shadow-lg shadow-fuchsia-400">
                  <CheckBadgeIcon className="h-6 w-6 mx-2 text-fuchsia-400" />
                  <p className="text-xl px-2 text-center font-semibold text-black">
                    Team Member
                  </p>
                </div>
                <div className="flex justify-start items-center bg-white  rounded-full shadow-lg shadow-purple-400">
                  <CheckBadgeIcon className="h-6 w-6 mx-2 text-purple-400" />
                  <p className="text-xl px-2 text-center font-semibold text-black">
                    Lens / Media
                  </p>
                </div>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black">
              CORE TEAM
            </h2>
          </div>
          <hr />
          <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.post.map((item, index) => (
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
                        <CheckBadgeIcon className="h-6 w-6 mt-4 text-amber-400" />
                      </Tooltip>
                    </div>
                    <div className="bg-orange-400 mt-8  text-center">
                      <p className="text-base text-white">{item.POST}</p>
                    </div>
                  </div>
                  <div className="flex justify-around pt-5">
                    <div>
                      <ShareComp/>
                     
                    </div>
                    <div>
                      {userInfo ? (
                        <UpdateMember item={item} mutate={mutate} />
                      ) : (
                        <div className="flex justify-center space-x-2">
                          <AcademicCapIcon className="h-6 w-6 cursor-pointer text-teal-500" />
                          <p>{item.YEAR} Years</p>
                        </div>
                      )}
                    </div>
                    {item.dob?.slice(5, 10) === currentDate ? (
                      <div>
                        <MessageHead item={item} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  
                  <div className="-mt-80 max-w-2xl">
                    {item.dob?.slice(5, 10) === currentDate ? (
                      <>
                        <Lottie animationData={hapbirt} loop={true} />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-2 lg:px-5">
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
      <div className="mx-auto max-w-7xl px-2 lg:px-5">
        <div className="mb-4 max-w-lg">
          <h2 className="mt-2 text-3xl font-bold leading-tight text-black">
            LENS / MEDIA TEAM MEMBER
          </h2>
        </div>
        <hr />
        <div className="pb-16">
          <MediaLens />
        </div>
      </div>
    </div>
  );
};

export default TeamWorking;
