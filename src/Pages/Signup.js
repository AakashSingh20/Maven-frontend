import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const signuphandler = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (!name || !email || !password) {
      alert("Please fill all the fields");
    }
    axios
      .post("http://localhost:4000/auth/signup", { name, email, password })
      .then((res) => {
        // console.log("sucess", res.data);
        navigate("/login");
      });
  };
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className=" w-[100%] flex justify-center">
          <div className="p-6 mt-3 border-2 border-black rounded-xl">
            <Card shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
              </Typography>
              <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                <div className="flex flex-col gap-6 mb-1">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
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
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth onClick={signuphandler}>
                  sign up
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 space-x-2 font-normal text-center"
                >
                  <a>Already have an account?</a>
                  {/* <a href="#" className="font-medium text-gray-900"></a> */}
                  <NavLink to={`/login`} className="font-medium text-gray-900">
                    Log In
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
