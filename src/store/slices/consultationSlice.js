import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
    consultation: null,
    consultations:[],
    data: null
};

export const fetchConsultations = createAsyncThunk('consultation/fetchConsultations', async () => {
    const response = await fetch('https://localhost:4430/api/consultations', {
        method: 'GET',
        cache: 'no-cache', // Disable caching
      });
      const data = await response.json();
      console.log(data);
      return data;
});

export const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        add: (state, action) => {
            state.consultation = action.payload.consultation;
        },
        getAll: (state, action) => {
            state.consultations = action.payload;
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchConsultations.pending,(state) => {
            state.loading = true
        } );
        builder.addCase(fetchConsultations.fulfilled, (state, action) => {
            state.loading = false
            state.consultations = action.payload
            state.error = ''
        })
        builder.addCase(fetchConsultations.rejected, (state, action) => {
            state.loading = false
            state.consultations = []
            state.error = action.error.massage
        });
    }
});

export const { add, getAll} = consultationSlice.actions;

export const selectConsultationAndToken = (state) => ({
    consultation: state.consultation.consultation,
    data: state.data
});

export default consultationSlice.reducer;
