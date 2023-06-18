import React, { useState } from "react";
import Lottie from "lottie-react";
import space from "../../assets/space-ride.json";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css'

const ContactForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [message, setmessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName,lastName,email,phoneNumber,message);
    if (!firstName || !lastName || !email ||!phoneNumber ||!message) {
      toast.error(`Please A Fill Details`)
    }
    else{
      const data = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        PhoneNumber: phoneNumber,
        Message: message,
      };
      axios
        .post(
          "https://sheet.best/api/sheets/a7f7081b-7842-4f3d-8e88-b386db5cce34",
          data
        )
        .then((response) => {
          setFirstName("");
          setlastName("");
          setemail("");
          setSalary("");
          setphoneNumber("")
          setmessage("")
        });
        toast.success(`Added Your Message ${data.FirstName} - ${data.LastName} `)
    }
    
  };
  return (
    <div>
      <div>
      <Toaster/>
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
            <form>
              <div className="grid grid-cols-1 mx-3 gap-2 lg:grid-cols-2 pt-20">
                <div>
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      First Name
                    </span>
                    <input
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Enter your First Name"
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
                      onChange={(e) => setlastName(e.target.value)}
                      value={lastName}
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Enter your Last Name"
                    />
                  </label>
                </div>
              </div>
              <div>
                <label className="block pt-8 mx-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter your Email Address"
                  />
                </label>
              </div>
              <div>
                <label className="block pt-8 mx-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Phone Number
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setphoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter your Phone Number"
                  />
                </label>
              </div>
              <div>
                <label className="block pt-8 mx-3">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Message
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setmessage(e.target.value)}
                    value={message}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter your Message 😍😒😘"
                  />
                </label>
              </div>
              <div className="flex justify-center pt-10">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white w-96 h-14 rounded-full vibrate-1"
                >
                  Submit
                </button>
              </div>
            </form>
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
