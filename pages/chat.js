
import React from "react";

//INTERNAL IMPORT 
import {Chatting,Modal} from "../Components/Chat/index";
const chat = () => {
  return (
    <div>
      <Chatting/>
      <Modal/>
      {/* SCRIPT */}
     <script type="module" src="script.js"></script>
    </div>
  );
};

export default chat;
