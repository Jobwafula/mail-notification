import React from "react";
import { Link } from "react-router-dom";

export default function Sidecontent() {
  return (
    <div className="m-2  lg:m-0 bg-purple-900 border lg:border-none  lg:h-[26rem] text-white p-2 lg:p-7">
      <div className="border lg:w-[10%]">
        <div>
          {" "}
          <h1 className="">Lets Talk </h1>
          <span className="font-bold lg:text-[3rem]">Tech</span>
        </div>
      </div>
      <div>
        <Link to='contact'><p className="text-sky-300 underline">Subscribe To The Event</p></Link>
        
      </div>

      <div>
        <h1 className=" text-[2rem] lg:text-[3rem]">Introducing Javascript </h1>
        <h1 className="text-[2rem]  lg:text-[3rem]">Javascript Frameworks &</h1>
        <h1 className=" text-[2rem]  lg:text-[3rem]">Libraries</h1>
        <span>By</span>
        <h2>Wafula Job.</h2>
      </div>
    </div>
  );
}
