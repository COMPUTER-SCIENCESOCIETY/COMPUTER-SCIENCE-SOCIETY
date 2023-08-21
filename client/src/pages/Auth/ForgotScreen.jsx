import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail, isEmpty } from "../../helper/validate";
import { usePasswordresetMutation } from "../../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredential, setCredentials } from "../../slices/authSlices";



const ForgotScreen = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordreset, { isLoading }] = usePasswordresetMutation();

  // const { userInfo } = useSelector((state) => state.auth);



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await passwordreset({ email }).unwrap();
      dispatch(setCredential({ ...res }));
      navigate('/reset-password')
    } catch (error) {
      console.log(error?.data?.message || error);
    }
  };

  // const navigate = useNavigate()
  // const [data, setData] = React.useState(initialState)
  // const { email } = data


  // const handleChange = (e) => {
  //     setData({ ...data,[e.target.name]: e.target.value });
  // }

  // const forgotpassword = async (e) => {
  //     e.preventDefault()
  //     //check field
  //     if (isEmpty(email))
  //         return alert("Please Fill in all fields")
  //     if (!isEmail(email))
  //     return alert("Please Enter a Valid Email Address")
  //     try {
  //         await axios.post("/api/users/forgotpassword", {
  //             email
  //         })
  //         navigate('/reset-password')
         
  //         alert("Email sent")

  //     } catch (error) {
  //         alert(error.response.data.message)
  //     }
  // }

  return (
    <div>
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
