import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-auto w-75">
      <form action="">
          <div className="m-3 p-2 bg-amber-300 text-black container ">
            <label htmlFor="name" className="font-bold">Name: </label>
            <input type="text" name="name" id="name" className="text-black bg-white ml-3" />
          </div>
          <div className="m-3 p-2 bg-amber-300 text-black container ">
            <label htmlFor="add" className="font-bold">Address: </label>
            <input type="text" name="add" id="add" className="text-black bg-white ml-3" />
          </div>
       <div>
       <button className="bg-red-500 border-amber-800 rounded-2xl mt-3 p-1">Submit </button>
       </div>
      </form>
    </div>
  );
}
