import { createApi } from '@reduxjs/toolkit/query/react';
import { addObservationBaseQuery } from './functions';


export const getObservationByIdApi = createApi({
    reducerPath: 'getObservationByIdApi',
    baseQuery: addObservationBaseQuery(),
    endpoints: (builder) => ({
        getObservation: builder.query({
            query: (id) => ({
                url: `/api/observations/${id}`,
                method: 'GET',
            })
        }),
    }),
});

export const { useGetObservationQuery } = getObservationByIdApi;