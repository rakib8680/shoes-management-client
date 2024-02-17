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
  }),
});

export const { useVerifyProductQuery } = serviceApi;
