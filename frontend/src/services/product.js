import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/wines" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => `/`,
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    postProduct: builder.mutation({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),
    patchProductById: builder.mutation({
      query: (id, { obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
    putProductById: builder.mutation({
      query: (id, { obj }) => ({
        url: `/${id}`,
        method: "PUT",
        body: obj,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useDeleteProductByIdMutation,
  usePostProductMutation,
  usePatchProductByIdMutation,
  usePutProductByIdMutation,
} = productApi;
