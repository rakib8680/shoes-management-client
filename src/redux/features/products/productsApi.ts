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
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
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
    updateProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/update-shoe/${payload.id}`,
        method: "PATCH",
        body: payload.updateInfo,
      }),
      invalidatesTags: ["products"],
    }),
    sellProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/update-shoe/${payload.id}`,
        method: "PATCH",
        body: payload.saleInfo,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
  useSellProductMutation,
} = productsAPi;
