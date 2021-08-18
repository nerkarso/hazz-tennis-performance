import React from "react";

function ChatBubbleRight() {
  return (
    <div className="flex justify-end mb-4">
      <div className="max-w-lg px-4 py-2 border rounded-tr-none bg-base-200 rounded-xl">
        <p>
          Hello, I like tennis but Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ducimus qui similique soluta at perspiciatis
          expedita adipisci ullam, cumque nobis?
        </p>
        <p className="mt-2 text-sm text-right text-black/50">
          07/05/21 11:30 am
        </p>
      </div>
    </div>
  );
}

export default ChatBubbleRight;
