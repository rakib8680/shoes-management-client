import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyProduct: builder.query({
      query: (uniqueId) => {
        return {
          url: `/products/verify-product/${uniqueId}`,
          method: "GET",
        };
      },
    }),
    getAllPolishServices: builder.query({
      query: () => {
        return {
          url: "/services/polish-services",
          method: "GET",
        };
      },
      providesTags: ["services"],
    }),
    requestPolish: builder.mutation({
      query: (payload) => {
        return {
          url: "/services/request-polish",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["services"],
    }),
  }),
});

export const { useVerifyProductQuery } = serviceApi;
