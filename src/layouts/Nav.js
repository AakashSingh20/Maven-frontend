import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sparkles, LogOut, Aperture } from "lucide-react";
import { Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const Nav = () => {
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between px-10 py-4 border-b-2 ">
        <div className="flex">
          <div className="text-xl font-bold logo">
            <Link to="/home">
              {/* <Aperture size={32} /> */}
              <span className="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-blue-800">
                MAVEN
              </span>
            </Link>
          </div>
          <ul className="flex items-center ml-20 space-x-16 text-l ">
            <li>
              <Link to="/home">
                <Text strong>Home</Text>
              </Link>
            </li>
            <li>
              <Link to="/request">
                <Text strong>Request</Text>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <Text strong>Profile</Text>
              </Link>
            </li>
            <li>
              <Link to="/premium">
                <div className="flex items-center justify-between w-24 px-2 py-1 text-white bg-blue-500 rounded-md text-primary">
                  <Sparkles size={16} />
                  <Text className="text-white" strong>
                    Premium
                  </Text>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <div
            className="flex items-center justify-center w-12 h-8 hover:cursor-pointer"
            onClick={logouthandler}
          >
            <LogoutOutlined className="text-3xl font-bold" />
          </div>
        </div>
      </div>
    </>
  );
};
