import { baseApi } from "../../api/baseApi";

const historyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSalesHistory: builder.query({
      query: () => ({
        url: "/sales-history",
        method: "GET",
      }),
    }),
  }),
});


export const {useGetSalesHistoryQuery} = historyApi