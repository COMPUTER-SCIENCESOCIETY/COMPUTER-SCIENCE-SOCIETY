import React, { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import ReactReadMoreReadLess from "react-read-more-read-less";

const TableEvent = () => {
  const [data, setData] = React.useState([]);

  const getEvents = async () => {
    const res = await axios.get("/api/eventpage/getallevent");
    setData(res.data.events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <>
      <div className="mt-6 flex flex-col pb-14">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-500 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-900">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Sno.
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      End Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((person, index) => (
                    <tr key={person.title}>
                      <td className="whitespace-nowrap px-12 text-left text-sm font-medium">
                        <div className="text-sm text-gray-900 ">
                          {index + 1}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-900 ">
                          <img
                            src={person.image}
                            alt="loading"
                            className="w-32 h-32 rounded-xl"
                          />
                        </div>
                      </td>
                      <td className="px-12 py-4">
                        <div className="text-sm text-gray-900 ">
                          <ReactReadMoreReadLess
                            charLimit={40}
                            readMoreText={" Read more"}
                            readLessText={"Read less"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                          {person.title}
                          </ReactReadMoreReadLess>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {currentDate === person.date ? (
                          <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            Done
                          </span>
                        ) : currentDate <= person.formopendate ? (
                          <span className="inline-flex rounded-full bg-lime-100 px-2 text-xs font-semibold leading-5 text-lime-800">
                            Apply
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-amber-100 px-2 text-xs font-semibold leading-5 text-amber-800">
                            OVER
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                        <a href="#" className="text-gray-700">
                          {person.date}
                        </a>
                      </td>

                      <td className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                        <a href="#" className="text-gray-700">
                          {format(person.timeend)}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableEvent;
