import React, { useContext } from "react";
import { FormContext } from "../App";

const Message = () => {
  const { valid } = useContext(FormContext);
  return (
    <div>
      <h3 className="text-center message">
        {valid ? "Form is Complete!" : "Form is Incomplete!"}
      </h3>
    </div>
  );
};

export default Message;
