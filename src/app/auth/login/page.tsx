"use client";
import { useLogin } from "@/hook/auth";
import { useState } from "react";
import { FaHandPeace } from "react-icons/fa";
import { GiTreeDoor } from "react-icons/gi";

/* eslint-disable @next/next/no-img-element */
const Login = () => {
  const [payload, setPayload] = useState({ username: "", password: "" });
  const loginMutation = useLogin();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(payload);
  };

  return (
    <div className="w-full h-screen flex items-center">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center gap-3 ">
          <GiTreeDoor size={30} className="text-green-500" />
          <div className="text-3xl">The Book Store</div>
        </div>
        <div className="pt-5">
          <span className="flex items-center gap-1 text-sm">
            Welcome back <FaHandPeace size={20} className="text-yellow-500" />,
            let&apos;s get you in for some reading
          </span>
          <form className="w-full" onSubmit={handleSubmit}>
            <fieldset className="fieldset border border-primary/30 shadow-lg p-4 rounded-lg bg-white">
              <legend className="fieldset-legend text-lg font-semibold mb-2">
                Login
              </legend>
              <div className="flex flex-col gap-3">
                <div className="form-control">
                  <input
                    type="text"
                    name="username"
                    className="input input-bordered"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <div className="flex w-full items-end justify-end pr-2 gap-1">
                    <p className="label pt-2 h-full">Forgot password ? Reset</p>
                    <a className="link link-info h-full">here</a>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  disabled={
                    payload?.username?.length === 0 ||
                    payload?.password?.length === 0
                  }
                >
                  Login
                </button>
                <div className="flex w-full items-end pr-2 gap-1">
                  <p className="label pt-2">
                    Don&apos;t have an account yet ? Register
                  </p>
                  <a className="link link-info">here</a>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <img
        src={
          "https://images.unsplash.com/photo-1531208483756-19591c7c4ab8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGxvdmVyfGVufDB8fDB8fHww"
        }
        className="object-center object-cover w-[70%] h-full"
        alt="book"
      />
    </div>
  );
};

export default Login;
