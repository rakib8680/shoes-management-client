import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
          query: (loginInfo) => ({
            url: "/auth/login-user",
            method: "POST",
            body: loginInfo,
          }),
        }),
        register: builder.mutation({
          query: (registerInfo) => ({
            url: "/auth/register-user",
            method: "POST",
            body: registerInfo,
          }),
        }),
      }),
})


export const {useLoginMutation, useRegisterMutation} = authApi