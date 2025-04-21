import { baseApi } from "../../api/baseApi";

const productsAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        brand,
        color,
        model,
        style,
        sort,
        size,
        minPrice,
        maxPrice,
      }) => {
        const params = new URLSearchParams();
        if (brand) {
          params.append("brand", brand);
        }
        if (color) {
          params.append("color", color);
        }
        if (model) {
          params.append("model", model);
        }
        if (style) {
          params.append("style", style);
        }
        if (sort) {
          params.append("sort", sort);
        }
        if (size) {
          params.append("size", size);
        }
        if (minPrice) {
          params.append("minPrice", minPrice);
        }
        if (maxPrice) {
          params.append("maxPrice", maxPrice);
        }

        return { url: `/products/all-shoes?${params}`, method: "GET" };
      },
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
    deleteMultipleProducts: builder.mutation({
      query: (payload) => ({
        url: `/products/delete-shoes`,
        method: "DELETE",
        body: payload,
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
        url: `/products/sell-shoes/${payload.id}`,
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
  useDeleteMultipleProductsMutation,
  useGetSingleProductQuery,
  useSellProductMutation,
} = productsAPi;
