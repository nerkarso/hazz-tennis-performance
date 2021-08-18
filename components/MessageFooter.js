import React from "react";

function MessageFooter() {
  return (
    <div className="flex flex-grow-0 p-4 mt-2 h-15">
      <input
        placeholder="Enter message then press enter"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1/ focus:ring-primary-500 focus:border-primary-500 "
        cols="50"
      ></input>
    </div>
  );
}

export default MessageFooter;
