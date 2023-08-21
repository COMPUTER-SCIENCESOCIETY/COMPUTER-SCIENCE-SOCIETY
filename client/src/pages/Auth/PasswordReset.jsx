import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../helper/validate";
import axios from "axios";

const initialState = {
  otp: "",
  newPassword: "",
};

const PasswordReset = () => {
  // window.location.reload();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const { otp, newPassword } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetppassword = async (e) => {
    e.preventDefault();
    //check field
    if (isEmpty(otp) || isEmpty(newPassword))
      return alert("Please Fill in all fields");
    try {
      await axios.put("/api/users/restpassword", {
        otp,
        newPassword,
      });
      navigate("/auth/login");

      alert("Sucessfully Change");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/itsl.png" alt="logo" className="w-20 h-20" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Reset - Password
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    OTP{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="OTP"
                      name="otp"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    New Password{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="New Password"
                      name="newPassword"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={resetppassword}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Ready up..
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

export default PasswordReset;
