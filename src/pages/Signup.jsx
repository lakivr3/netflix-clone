import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/ce6dcfc2-aeb1-4909-813f-bd59cc96d7f4/RS-hr-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 "
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassowrd(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="btn-color py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p className="cursor-pointer">Need help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-500">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
