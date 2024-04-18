import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import URL from "../utils/API_URL"; 

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const loginhandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
    }
    axios
      .post(`${URL}/auth/login`, { email, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("Token", JSON.stringify(res.data.token));
          navigate("/home");
        } else {
          alert("Invalid credentials");
        }
      });
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <div className=" w-[100%] flex justify-center">
          <div className="p-6 mt-3 border-black rounded-xl">
            <Card shadow={false}>
              <Typography variant="h4" color="blue-gray" className="text-transparent text-4xl bg-gradient-to-r bg-clip-text from-blue-400 to-blue-800">
                Log In
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to login.
              </Typography>
              <form
                className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
              >
                <div className="flex flex-col gap-6 mb-1">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <Button className="mt-6 text-white bg-blue-500 rounded hover:bg-blue-600" fullWidth onClick={loginhandler}>
                  log in
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 space-x-2 font-normal text-center"
                >
                  <a>Don't have an account?</a>
                  <NavLink to={`/signup`} className="font-medium text-gray-900">
                    Sign Up
                  </NavLink>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
