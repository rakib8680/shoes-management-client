import { baseApi } from "../../api/baseApi";


const productsAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
          query: () => ({
            url: "/products/all-shoes",
            method: "GET",
          }),
        }),
      }),
})



export const {useGetAllProductsQuery} = productsAPi