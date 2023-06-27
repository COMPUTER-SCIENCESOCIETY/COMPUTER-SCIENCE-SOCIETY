import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EventModel({ mutate }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [inpval, setinpval] = useState({
    title: "",
    date: "",
    formopendate: "",
    month: "",
    timefrom: "",
    timeend: "",
    image: "",
    googleform: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setinpval((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const {
      title,
      date,
      formopendate,
      month,
      image,
      googleform,
      timefrom,
      timeend,
    } = inpval;

    const res = await fetch("/api/eventpage/createevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        formopendate,
        month,
        image,
        googleform,
        timefrom,
        timeend,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 402 || !data) {
      alert("error");
      console.log("error");
    } else {
      mutate();
      setIsOpen(false);
      toast.success(`${inpval.title}`, {
        icon: "👌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  //Show Month Name in Select Html Tags
  const [Data, setData] = useState([]);

  const getInfo = async () => {
    const infos = await fetch(
      "https://mocki.io/v1/a86a3986-269c-48a6-ad0f-bb436e4c22cc"
    );
    const res = await infos.json();
    setData(res);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <Toaster />
      <div className="mt-10">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md lg:max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Event
                  </Dialog.Title>
                  <div className="mt-2">
                    <div>
                      <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Title
                        </span>
                        <input
                          type="text"
                          onChange={setdata}
                          value={inpval.title}
                          name="title"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="Enter your Tilte"
                        />
                      </label>
                    </div>
                    <div className="grid grid-cols-2">
                      <div>
                        <label className="block mt-4">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Event Date
                          </span>
                          <input
                            type="date"
                            onChange={setdata}
                            value={inpval.date}
                            name="date"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your Tilte"
                          />
                        </label>
                      </div>
                      <div>
                        <label className="block mt-4 ml-5">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Form End Date
                          </span>
                          <input
                            type="date"
                            onChange={setdata}
                            value={inpval.formopendate}
                            name="formopendate"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your Tilte"
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block mt-4">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Month
                        </span>
                        <select
                          onChange={setdata}
                          value={inpval.month}
                          name="month"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        >
                          {Data.map((months) => (
                            <>
                              <option value={months.name}>{months.name}</option>
                            </>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <label className="block mt-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Time From
                        </span>
                        <input
                          type="datetime-local"
                          onChange={setdata}
                          value={inpval.timefrom}
                          name="timefrom"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="ml-5">
                      <label className="block mt-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Time End
                        </span>
                        <input
                          type="datetime-local"
                          onChange={setdata}
                          value={inpval.timeend}
                          name="timeend"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>

                    <div>
                      <div>
                        <label className="block mt-5">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Image
                          </span>
                          <input
                            type="text"
                            onChange={setdata}
                            value={inpval.image}
                            placeholder="https://image.com"
                            name="image"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="ml-5">
                      <label className="block mt-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Google Form Links
                        </span>
                        <input
                          type="text"
                          onChange={setdata}
                          value={inpval.googleform}
                          name="googleform"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={addinpdata}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
