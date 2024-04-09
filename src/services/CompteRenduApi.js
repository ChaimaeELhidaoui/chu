import { createApi } from '@reduxjs/toolkit/query/react';
import { addCompteRenduBaseQuery } from './functions';

export const CompteRenduApi = createApi({
    reducerPath: 'compteRenduApi',
    baseQuery: addCompteRenduBaseQuery(),
    endpoints: (builder) => ({
        addCompteRendu: builder.mutation({
            query: ({ body }) => ({
                url: '/api/compte_rendus',
                method: 'POST',
                body
            })
        })
    })
});

export const { useAddCompteRenduMutation } = CompteRenduApi;
