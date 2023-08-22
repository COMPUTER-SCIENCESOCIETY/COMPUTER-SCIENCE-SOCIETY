import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { usePasswordresetMutation } from "../../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredential } from "../../slices/authSlices";

const ForgotScreen = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordreset, { isLoading }] = usePasswordresetMutation();


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await passwordreset({ email }).unwrap();
      dispatch(setCredential({ ...res }));
      navigate('/')
    } catch (error) {
      toast.error(`${error?.data?.message || error} ${email}`,{
        position:"bottom-center",
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div>
       <Toaster />
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/itsl.png" alt="logo" className="w-20 h-20" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Forgot Password
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={submitHandler}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotScreen;
