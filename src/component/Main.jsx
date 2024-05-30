import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import Texteditor from "./Texteditor";
import UserForm from "./UserForm";


 const Main = () => {
//   const navigate=useNavigate();

//   const counterHandler=()=>{
//   navigate("counter");
//   }
//   const formHandler=()=>{
//     navigate("userform");
//   }
//   const textEditorHandler=()=>{
//     navigate("texteditor");
//   }



  return (
    <div
      className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800
    flex flex-col justify-center items-center h-auto w-auto pb-2"
    >
      <div className="flex flex-col md:flex-row ">
        <div ><Counter/></div>
        <div className="ml-20"><Texteditor/></div>
      </div>
      <div className="mt-5">
        <UserForm/>
      </div>
    </div>
  );
};

export default Main;
