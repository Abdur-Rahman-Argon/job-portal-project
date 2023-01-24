import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import MessageItems from "./MessageItems";
import MessageField from "./MessageField";
import { useGetMessageQuery } from "../../features/message/messageApi";

const CreateMessage = (data) => {
  const { conversationId } = useParams();
  const scrollRef = useRef();

  const {
    isLoading,
    data: myMessage,
    isError,
    error,
  } = useGetMessageQuery(conversationId, { pollingInterval: 10 });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [myMessage]);

  if (isLoading) {
    return;
  }

  // const interval = setInterval(refetch(), 100);

  // clearInterval(interval);

  return (
    <div className="  h-screen  w-full">
      {/* Message Show */}
      <div className="h-screen pb-20 overflow-y-scroll mt-3 px-5">
        {myMessage?.map((message) => (
          <div ref={scrollRef}>
            <MessageItems key={message._id} message={message}></MessageItems>
          </div>
        ))}
      </div>

      <div className=" w-9/12 bg-white fixed bottom-0 ">
        <MessageField conversationId={conversationId} />
      </div>
    </div>
  );
};

export default CreateMessage;
