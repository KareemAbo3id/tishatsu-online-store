import { apiSlice } from './api.slice';
import { USERS_URLS } from '../utilities/consts.utility';

export const usersApiSlice = apiSlice.injectEndpoints({
  // the endpoints:
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URLS.auth,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
