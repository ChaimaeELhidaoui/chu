import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
    compteRendu: null,
    data: null
};
export const fetchCompteRendu = createAsyncThunk('compteRendu/fetchCompteRendu', async (id) => {
    const response = await fetch(`https://localhost:4430${id}`, {
        method: 'GET',
        cache: 'no-cache', // Disable caching
      });
      const data = await response.json();
      console.log(data);
      return data;
});
export const compteRenduSlice = createSlice({
    name: 'compteRendu',
    initialState,
    reducers: {
        add: (state, action) => {
            state.compteRendu = action.payload.compteRendu;
        },
        getById:(state, action) => {
            state.compteRendu = action.payload.patient;
          }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompteRendu.pending,(state) => {
            state.loading = true
        } );
        builder.addCase(fetchCompteRendu.fulfilled, (state, action) => {
            state.loading = false
            state.compteRendu = action.payload
            state.error = ''
        })
        builder.addCase(fetchCompteRendu.rejected, (state, action) => {
            state.loading = false
            state.compteRendu = null
            state.error = action.error.massage
        });
    }
});

export const { add, getById } = compteRenduSlice.actions;

export const selectCompteRenduAndToken = (state) => ({
    compteRendu: state.compteRendu.compteRendu,
    data: state.data
});

export default compteRenduSlice.reducer;
