import React from "react";

function ChatBubbleLeft() {
  return (
    <div className="flex mb-4">
      <div className="max-w-lg px-4 py-2 text-white border rounded-tl-none bg-primary-600 rounded-xl">
        <p>
          Hello, I like tennis but Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ducimus qui similique soluta at perspiciatis
          expedita adipisci ullam, cumque nobis?
        </p>
        <p className="mt-2 text-sm text-white/75">07/05/21 11:30 am</p>
      </div>
    </div>
  );
}

export default ChatBubbleLeft;
