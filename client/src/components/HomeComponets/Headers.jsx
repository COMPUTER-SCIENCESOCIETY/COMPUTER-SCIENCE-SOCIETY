import React from "react";
import logo from "../../assets/itsl.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlices";
import { useLogoutMutation } from "../../slices/userApiSlice";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { Navbar } from "flowbite-react";
import { FcCalendar, FcHome, FcLandscape } from "react-icons/fc";
import { MdEmojiPeople } from "react-icons/md";

const Headers = () => {
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

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
      <Navbar className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Navbar.Brand>
          <div className="flex justify-start items-center">
            <img src={logo} alt="loading" className="w-16 h-16" />

            <Link to="/">
              <p className=" capitalize font-bold hidden lg:flex">
                {t("title")}
              </p>
            </Link>
            <img
              src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f1ee-1f1f3.svg"
              alt="loading"
              className="w-16 h-16 mx-2"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
            className="flex justify-center items-center space-x-3  m-3"
            to="/"
          >
            <FcHome className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link
            className="flex justify-center items-center space-x-3 m-3"
            to="/events"
          >
            <FcCalendar className="h-6 w-6  cursor-pointer" />
            
          </Link>

          {/* <Link
            className="flex justify-center items-center space-x-3 m-3"
            to="/teams"
          >
            <MdEmojiPeople className="h-6 w-6 cursor-pointer text-white" />
            
          </Link> */}

          <Link
            to="/gallery"
            className="flex justify-center items-center space-x-3  m-3"
          >
            <FcLandscape className="h-6 w-6  cursor-pointer" />
          
          </Link>
          <div  className="flex bg-amber-400 rounded-full pl-4 justify-center items-center">
            {userInfo ? (
              <>
                <div className=" cursor-pointer hover:bg-red-400 rounded-lg ">
                  <p
                    onClick={logoutHandler}
                    className="font-semibold text-black text-[14px] mx-1"
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
            <LanguageSelect />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Headers;
