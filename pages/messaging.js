import ChatBubbleLeft from "@/components/ChatBubbleLeft";
import ChatBubbleRight from "@/components/ChatBubbleRight";
import MasterListItem from "@/components/MasterListItem";
import MessageFooter from "@/components/MessageFooter";
import MessageHeader from "@/components/MessageHeader";
import SideBar from "@/components/SideBar";
import React from "react";

function messaging() {
  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <SideBar />
      <div className="flex flex-col flex-shrink-0 border-r w-96">
        <header className="flex items-center flex-grow-0 flex-shrink-0 h-16 px-4">
          <h2 className="text-2xl font-bold text-base-800 dark:text-base-200">
            Messages
          </h2>
        </header>
        <div className="pb-4 overflow-y-auto">
          {Array.from(Array(15)).map((item, i) => (
            <MasterListItem key={item} index={i} feedback={false} />
          ))}
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col h-full bg-base-100">
          <MessageHeader feedback={false} />
          <div className="flex-1 px-4 overflow-y-auto">
            {Array.from(Array(20)).map((item, i) => (
              <>
                <ChatBubbleLeft />
                <ChatBubbleRight />
              </>
            ))}
          </div>
          <MessageFooter />
        </div>
      </div>
    </div>
  );
}

export default messaging;
