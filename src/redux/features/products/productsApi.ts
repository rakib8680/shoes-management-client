import { baseApi } from "../../api/baseApi";


const productsAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
          query: () => ({
            url: "/products/all-shoes",
            method: "GET",
          }),
          providesTags: ["products"],
        }),
        addProduct: builder.mutation({
          query: (productInfo) => ({
            url: "/products/add-shoes",
            method: "POST",
            body: productInfo,
          }),
          invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
          query: (id) => ({
            url: `/products/delete-shoe/${id}`,
            method: "DELETE",
          }),
          invalidatesTags: ["products"],
        }),
        
      }),
})



export const {useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsAPi