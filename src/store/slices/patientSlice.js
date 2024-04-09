import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
    patient: null,
    data: null,
    patients:[]
};

export const fetchPatients = createAsyncThunk('patient/fetchPatients', async () => {
    const response = await fetch('https://localhost:4430/api/patients', {
        method: 'GET',
        cache: 'no-cache', // Disable caching
      });
      const data = await response.json();
      console.log(data);
      return data;
});

/* export const updatePatient = createAsyncThunk(
    "patient/updatePatient",
    async (updatedPatient) => {
      const response = await fetch('https://localhost:4430/api/patients', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
      });
      const data = await response.json();
      console.log(data);
      return data;
    }
  ); */
  

export const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        add: (state, action) => {
            state.patient = action.payload.patient;
        },
        getAll: (state, action) => {
            
            state.data = action.payload;
        },
        put: (state, action) => {
          state.patient = action.payload.patient;
        },
        getById:(state, action) => {
          state.patient = action.payload.patient;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPatients.pending,(state) => {
            state.loading = true
        } );
        builder.addCase(fetchPatients.fulfilled, (state, action) => {
            state.loading = false
            state.patients = action.payload
            state.error = ''
        })
        builder.addCase(fetchPatients.rejected, (state, action) => {
            state.loading = false
            state.patients = []
            state.error = action.error.massage
        });

        /* builder.addCase(updatePatient.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(updatePatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload;
            state.error = "";
          });
          builder.addCase(updatePatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          }); */
    }
});

export const {
    add,
    getAll,
    put,
} = patientSlice.actions;



export const selectUserAndToken = (state) => ({
    patient: state.patient.patient,
    data: state.data
});

export default patientSlice.reducer;
