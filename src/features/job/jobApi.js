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

    //job by id
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["Job"],
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
        url: `/ask-question`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),

    //create Question answer
    createQueAnswer: builder.mutation({
      query: (data) => ({
        url: `/que-answer`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
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
  useCreateQueAnswerMutation,
} = jobApi;
