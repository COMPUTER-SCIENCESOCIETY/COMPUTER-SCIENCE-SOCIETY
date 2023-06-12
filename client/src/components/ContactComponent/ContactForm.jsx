import React from "react";
import Lottie from "lottie-react";
import space from "../../assets/space-ride.json";

const ContactForm = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center pt-20">
          <p className="bg-slate-300 w-64 text-center rounded-full font-semibold capitalize ring-4">
            Share your thoughts
          </p>
        </div>
        <p className="text-center pt-5 text-4xl font-semibold pb-2">
          Love to hear from you
        </p>
      </div>
      <div className=" container mx-auto">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 pt-20">
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="title"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter your Tilte"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Last Name
                  </span>
                  <input
                    type="text"
                    name="title"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter your Tilte"
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="block pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                 Email
                </span>
                <input
                  type="text"
                  name="title"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your Tilte"
                />
              </label>
            </div>
            <div>
              <label className="block pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Phone Number
                </span>
                <input
                  type="number"
                  name="title"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your Tilte"
                />
              </label>
            </div>
            <div>
              <label className="block pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Message
                </span>
                <input
                  type="text"
                  name="title"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your Tilte"
                />
              </label>
            </div>
            <div className="flex justify-center pt-10">
                <button className="bg-black text-white w-96 h-14 rounded-full">Submit</button>
            </div>
          </div>

          <div>
            <Lottie animationData={space} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
