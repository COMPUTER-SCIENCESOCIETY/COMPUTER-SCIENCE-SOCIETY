import React from "react";
import logo from "../../assets/itsl.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlices";
import { useLogoutMutation } from "../../slices/userApiSlice";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";

const Headers = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const { t } = useTranslation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <nav className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="mx-4 pt-1 pb-2 flex justify-between items-center">
          <div className="flex justify-start items-center">
            <img src={logo} alt="loading" className="w-16 h-16" />
            <Link to="/">
              <p className=" capitalize font-bold">
               {t("title")}
              </p>
            </Link>
            <img
              src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f1ee-1f1f3.svg"
              alt="loading"
              className="w-16 h-16 mx-2"
            />
          </div>
          <>
            <div className="flex justify-center space-x-3">
          <LanguageSelect/>
             
       
              {userInfo ? (
                <>
                  <div className=" flex justify-start items-center mx-2">
                    <p
                      onClick={logoutHandler}
                      className="mx-1 lg:mx-5 bg-red-400 cursor-pointer w-20 text-center rounded-full font-semibold hover:bg-slate-200"
                    >
                      Logout
                    </p>
                  </div>
                </>
              ) : (
                <Link to="/auth/login">
                  <p>Login</p>
                </Link>
              )}
            </div>
          </>
        </div>
      </nav>
    </>
  );
};

export default Headers;
