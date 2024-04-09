import { createApi } from '@reduxjs/toolkit/query/react';
import { getAllConsultationsBaseQuery } from './functions';


export const getConsultationsApi = createApi({
    reducerPath: 'getConsultationsApi',
    baseQuery: getAllConsultationsBaseQuery(),
    endpoints: (builder) => ({
        getConsultations: builder.query({
            query: () => ({
                url: '/api/consultations',
                method: 'GET',
            })
        }),
    }),
});

export const { useGetConsultationsQuery } = getConsultationsApi;
/*endpoint getConsultations est defini en utilisant la methode query() du builder , cela
signifie que cet endpoint effectue une requte de type GET */