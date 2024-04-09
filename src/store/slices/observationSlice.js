import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const initialState = {
    observation: null,
    data: null
};

export const fetchObservation = createAsyncThunk('observation/fetchObservation', async (id) => {
    const response = await fetch(`https://localhost:4430${id}`, {
        method: 'GET',
        cache: 'no-cache', // Disable caching
      });
      const data = await response.json();
      console.log(data);
      return data;
});
export const observationSlice = createSlice({
    name: "observation",
    initialState,
    reducers: {
        add: (state, action) => {
            state.observation = action.payload.observation;
        },
        getById:(state, action) => {
            state.observation = action.payload.patient;
          }
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchObservation.pending,(state) => {
            state.loading = true
        } );
        builder.addCase(fetchObservation.fulfilled, (state, action) => {
            state.loading = false
            state.observation = action.payload
            state.error = ''
        })
        builder.addCase(fetchObservation.rejected, (state, action) => {
            state.loading = false
            state.observation = null
            state.error = action.error.massage
        });
    }
});


export const {
    add,
    getById,
} = observationSlice.actions;

export const selectObservationAndToken = (state) => ({
    observation: state.observation.observation,
    data: state.data
});

export default observationSlice.reducer;

