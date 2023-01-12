import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetViewUserQuery } from "../features/job/jobApi";
import {
  useCreateConversionMutation,
  useGetConversionQuery,
} from "../features/message/messageApi";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";

const ViewProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { _id, email, role } = useSelector((state) => state.auth.user);
  const { isLoading, data, isError } = useGetViewUserQuery(userId);

  const {
    isLoading: cLoading,
    data: cData,
    isError: cError,
    error,
  } = useGetConversionQuery(_id);

  const [
    conversation,
    { isLoading: loading, isError: isCError, isSuccess, data: Cdata },
  ] = useCreateConversionMutation();

  if (
    (!isError && isLoading) ||
    (!isCError && loading) ||
    (!cError && cLoading)
  ) {
    return <Loading />;
  }

  if (!isCError && !loading && isSuccess) {
    console.log(Cdata);
    navigate(`/messages/conversation/${Cdata.insertedId}`);
  }

  const existConversion = cData?.filter((con) =>
    con.member.find((id) => id === data?.data?._id)
  );
  if (existConversion.length < 1) {
  }
  console.log("conversion", existConversion);

  const handleCreateConversion = (id) => {
    const cData = { senderId: _id, receiverId: id };
    if (existConversion.length < 1) {
      conversation(cData);
    } else {
      navigate(`/messages/conversation/${existConversion[0]._id}`);
    }
  };

  return (
    <div>
      <div className=" w-96 mx-auto my-5 border-emerald-400 text-gray-500  border-[1px] shadow-xl p-3 rounded-2xl">
        <div>
          <h1 className=" font-semibold text-xl text-gray-600">
            {data?.data?.firstName + " " + data?.data?.lastName}
          </h1>
          <h2 className=" font-medium text-base text-gray-600">
            {data?.data?.email}
          </h2>
          <p className=" text-sm my-1">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span> {"Dhaka"}, Bangladesh</span>
          </p>
        </div>
        <div className=" divider"></div>
        <div className=" flex justify-around items-center gap-2">
          <button
            onClick={() => handleCreateConversion(data.data._id)}
            class="border-2 font-medium py-[6px] rounded-lg border-emerald-500 bg-green-600 hover:bg-green-700  text-white  w-full "
          >
            <i class="fa-solid fa-paper-plane"></i> <span>Message</span>
          </button>
          <button class="border-2 font-medium py-[6px] hover:border-emerald-500  hover:bg-gray-200  text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
            <i class="fa-solid fa-plus"></i> <span> Follow</span>
          </button>
          <button class="border-2 font-medium py-[6px] hover:border-emerald-500 bg-white hover:bg-green-100  text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
            <span> See more</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
