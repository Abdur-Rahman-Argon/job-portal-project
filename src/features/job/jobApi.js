import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: "/create-job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    getJob: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["Jobs"],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),

    //applied job
    getAppliedJob: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),

    //apply
    apply: builder.mutation({
      query: (data) => ({
        url: `/apply`,
        method: "PATCH",
        body: data,
      }),
    }),

    //createAskQuestion
    createAskQuestion: builder.mutation({
      query: (data) => ({
        url: `/ask-question/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetJobQuery,
  useGetJobByIdQuery,
  useCreateAskQuestionMutation,
  useApplyMutation,
  useGetAppliedJobQuery,
} = jobApi;
