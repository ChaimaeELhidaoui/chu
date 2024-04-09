import { createApi } from '@reduxjs/toolkit/query/react';
import {addConsultationApiBaseQuery} from './functions';

export const addConsultationApi = createApi({
    reducerPath :'consultationApi',
    baseQuery : addConsultationApiBaseQuery(),
    endpoints :(builder) =>({
        addConsultation : builder.mutation({
            query :({body}) =>({
                url :'/api/consultations',
                method :'POST',
                body,
            })
        }),
    }),
});

export const {useAddConsultationMutation} = addConsultationApi;