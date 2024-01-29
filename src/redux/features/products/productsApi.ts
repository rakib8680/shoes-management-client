import { baseApi } from "../../api/baseApi";


const productsAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
          query: () => ({
            url: "/products/all-shoes",
            method: "GET",
          }),
        }),
        addProduct: builder.mutation({
          query: (productInfo) => ({
            url: "/products/add-shoes",
            method: "POST",
            body: productInfo,
          }),
        }),
      }),
})



export const {useGetAllProductsQuery, useAddProductMutation } = productsAPi