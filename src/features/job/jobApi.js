import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: "/create-job",
        method: "POST",
        body: data,
      }),
    }),
    getJob: builder.query({
      query: () => ({
        url: "/jobs",
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
  }),
});

export const { useCreateJobMutation, useGetJobQuery, useGetJobByIdQuery } =
  jobApi;
