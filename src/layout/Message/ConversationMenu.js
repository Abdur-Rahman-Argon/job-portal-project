import React from "react";
import { useSelector } from "react-redux";
import { useGetViewUserQuery } from "../../features/job/jobApi";

const ConversationMenu = ({ conversation }) => {
  const { _id, email, role } = useSelector((state) => state.auth.user);
  const senderId = conversation?.member.find((id) => id !== _id) || _id;

  const { isLoading, data, isError } = useGetViewUserQuery(senderId);

  return <div>Name: {data?.data?.firstName}</div>;
};

export default ConversationMenu;
