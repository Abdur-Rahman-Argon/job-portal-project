import apiSlice from "../api/apiSlice";

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createConversion: builder.mutation({
      query: (data) => ({
        url: "/create-conversation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Conversation"],
    }),

    //getConversion
    getConversion: builder.query({
      query: (id) => ({
        url: `/get-conversation/${id}`,
      }),
      providesTags: ["Conversation"],
    }),

    //createMessage
    createMessage: builder.mutation({
      query: (data) => ({
        url: "/create-message",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Messages"],
    }),

    //getMessage
    getMessage: builder.query({
      query: (id) => ({
        url: `/get-messages/${id}`,
      }),
      providesTags: ["Messages"],
    }),
  }),
});

export const {
  useCreateConversionMutation,
  useGetConversionQuery,
  useCreateMessageMutation,
  useGetMessageQuery,
} = messageApi;
