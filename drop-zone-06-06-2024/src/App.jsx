// import { useState } from "react";
import DropZone from "./components/DropZone";
import "./App.css";

function App() {
  

  return (
    <>
      <section className="min-h-[100vh]  overflow-y-auto flex justify-center items-center">
        <div className="h-[424px] w-[424px] rounded-[24px] bg-gradient-to-r from-indigo-200 to-yellow-100 border-[1px] border-black flex justify-around items-center flex-col pl-8 pr-8">
          <h1 className=" font-Poppins font-medium text-2xl text-black ">
            Upload your case studies
          </h1>
          <DropZone className="p-4  flex-col text-center h-[300px] w-[333px] font-Montserrat font-[500]  text-black border-[1px] border-gray-600 flex justify-around items-center cursor-pointer bg-gradient-to-r from-gray-100 to-gray-300  rounded-[24px] " />
        </div>
      </section>
    </>
  );
}

export default App;
