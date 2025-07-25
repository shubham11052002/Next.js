"use client"
import { submitAction } from "@/actions/from";
import { useRef } from "react";
export default function Home() {
  let ref = useRef();

  return (
    <div className=" mx-auto w-75 bg-white p-5 mt-10 rounded">
      <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }}>
        <div className="m-3 p-2  text-black container ">
          <label htmlFor="name" className="font-bold p-3 mb-2">Name: </label>
          <input type="text" name="name" id="name" className="te  xt-black bg-white ml-3 hover:bg border border-black mt-2 hover:rounded  transition duration-600" />
        </div>
        <div className="m-3 p-2  text-black container ">
          <label htmlFor="add" className="font-bold p-3 mb-2">Address: </label>
          <input type="text" name="add" id="add" className="text-black bg-white ml-3 hover:bg border border-black mt-2 hover:rounded  transition duration-600" />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-red-400 text-black border-amber-800 rounded mt-3 p-1 px-10 hover:bg-red-600 hover:text-white transition duration-300">Submit </button>
        </div>
      </form>
    </div>
  );
}
