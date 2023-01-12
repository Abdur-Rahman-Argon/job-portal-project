import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCreateMessageMutation } from "../../features/message/messageApi";

const MessageField = ({ conversationId }) => {
  const { _id, email, role, firstName, lastName } = useSelector(
    (state) => state.auth.user
  );

  const [createMessage, { isLoading, isError, isSuccess, error }] =
    useCreateMessageMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const messageData = {
      conversionId: conversationId,
      senderId: _id,
      senderInfo: { userId: _id, userName: firstName + lastName, email },
      textMessage: data.messageData,
      sendTime: new Date(),
    };
    createMessage(messageData);
    reset();
  };

  return (
    <div className=" mt-2 mb-5 mx-2 py-2 border-2 border-green-100 shadow-2xl rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center text-center justify-around">
          {/*  */}
          <div className=" w-10/12">
            <input
              name="messageData"
              id="messageData"
              placeholder="Write Your Message"
              {...register("messageData", { required: true })}
              class={` text-gray-700 text-lg  focus:outline-none w-full `}
            />
          </div>

          {/*  */}
          <div className=" ">
            <button type="submit" className="cursor-pointer">
              <i class="fa-regular fa-paper-plane text-gray-500 text-xl sm:text-3xl"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageField;
