import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const NumberofTeam = () => {
  const [Data, setData] = useState([]);
  const [counterOn,setCounterOn] = useState(false)

  const getInfo = async () => {
    const infos = await fetch("/api/creativemember/getheadmembercount");
    const res = await infos.json();
    setData(res);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          ITS Beautiful Teams
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Information Technology Society,Total Number of Members
        </p>
        <hr/>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-7">
        {Data.map((item) => (
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <img
                src={item.img}
                alt="loading"
                className="h-16 w-16 text-gray-700"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
            {
              counterOn &&  <CountUp start={0} duration={6} delay={0} end={item.count} /> 
            } +
           
            </h3>
            <div className="mt-2">
              <hr />
            </div>

            <p className="mt-4 text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default NumberofTeam;
