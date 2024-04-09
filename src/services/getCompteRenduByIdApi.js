import { createApi } from '@reduxjs/toolkit/query/react';
import { addCompteRenduBaseQuery } from './functions';

export const getCompteRenduByIdApi = createApi({
    reducerPath: 'getCompteRenduByIdApi',
    baseQuery: addCompteRenduBaseQuery(),
    endpoints: (builder) => ({
        getCompteRendu: builder.query({
            query: (id) => ({
                url: `/api/compte_rendus/${id}`,
                method: 'GET',
            })
        }),
    }),
});

export const { useGetCompteRenduQuery } = getCompteRenduByIdApi;