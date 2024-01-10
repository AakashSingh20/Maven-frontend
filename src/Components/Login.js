import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const loginhandler = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (!email || !password) {
      alert("Please fill all the fields");
    }
    axios
      .post("http://localhost:4000/auth/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("Token", JSON.stringify(res.data.token));
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      });
  };

  return (
    <>
      <div className=" w-[100%] flex justify-center">
        <div className="border-2 border-black p-6  rounded-xl mt-3">
          <Card color="transparent " shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Log In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to login.
            </Typography>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              // onSubmit={loginhandler}
            >
              <div className="mb-1 flex flex-col gap-6">
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

              <Button className="mt-6" fullWidth onClick={loginhandler}>
                log in
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account
                {/* <a href="#" className="font-medium text-gray-900"></a> */}
                <NavLink to={`/signup`} className="font-medium text-gray-900">
                  Sign Up
                </NavLink>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};
