import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../utilities/consts.utility';

export const apiSlice = createApi({
  baseQuery: BASE_QUERY,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});

export const apiReducerPath = apiSlice.reducerPath;

export const apiMD = apiSlice.middleware;

export const apiReducer = apiSlice.reducer;
