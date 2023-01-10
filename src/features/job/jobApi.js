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
  }),
});

export const { useCreateJobMutation } = jobApi;
