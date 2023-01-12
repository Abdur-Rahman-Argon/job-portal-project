import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_DEV_URL }),
  tagTypes: ["Jobs", "Job", "EmployJob", "Messages", "Conversation"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
