import React from "react";
import { fetchData } from "../helpers";
import { Outlet, useLoaderData } from "react-router-dom";
import wave from "../assets/wave.svg";
import NavBar from "../Components/NavBar";

// loader
export function mainLoader() {
  const username = fetchData("username");
  return { username };
}
const Main = () => {
  const { username } = useLoaderData();
  return (
    <div className="layout">
      <NavBar username={username} />
      <main className="">
        <Outlet />
      </main>

      
        <img
          src={wave}
          alt=".."
          className="block "
          style={{ width: "100vw" }}
        />
      
    </div>
  );
};

export default Main;
