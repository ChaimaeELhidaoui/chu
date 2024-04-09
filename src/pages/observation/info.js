import React, { useState , useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
//project import 
import {useAddObservationMutation} from 'services/ObservationApi';
import {add} from 'store/slices/observationSlice';
import { dispatch } from 'store';
import { useNavigate } from 'react-router';
import {
    Box,
    FormControlLabel,
    Radio,
    RadioGroup,
    Select,
    MenuItem,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
    
} from '@mui/material';
//third party 
import * as Yup from 'yup';
import { Formik } from 'formik';
// project import
import AnimateButton from 'components/@extended/AnimateButton';

const Info =({ values, handleChange, handleBlur, errors, touched, patient})=>{
    //const location = useLocation();
    //const state = location.state || {};
    //const patient = state;
    
    const [addObservationMutation,{isSuccess,isLoading,isError,error , data}] = useAddObservationMutation();
   
    const navigateInfo = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(add(data))
            navigateInfo('/', { state: data });
        }
    }, [isSuccess, data])

  

 
    return(
        <>
         
                        <Grid container spacing={1} >
                        <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="iP">IP*</InputLabel>
                                    <OutlinedInput
                                        id="iP"
                                        type="iP"
                                        value={patient["iP"]}
                                        name="iP"
                                        onBlur={handleBlur}
                                        //onChange={handleChange}
                                        placeholder="IP"
                                        fullWidth
                                        disabled
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="nom">Nom*</InputLabel>
                                    <OutlinedInput
                                        id="nom"
                                        type="nom"
                                        value={patient["nom"]}
                                        name="nom"
                                        onBlur={handleBlur}
                                        //onChange={handleChange}
                                        placeholder="nom"
                                        fullWidth
                                        disabled
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="prenom-patient">Prénom*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        
                                        id="prenom-patient"
                                        type="prenom"
                                        value={patient["prenom"]}
                                        name="prenom"
                                        onBlur={handleBlur}
                                        //onChange={handleChange}
                                        placeholder="Prénom"
                                        inputProps={{}}
                                        disabled
                                    />
                                    
                                </Stack>
                            </Grid>
                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dateNaissance">Date de Naissance*</InputLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD/MM/YYYY"
                                    
                                        id="dateNaissance"
                                        
                                        value={dayjs(patient["dateDeNaiss"])}
                                        name="dateNaissance"
                                        disableFuture
                                        onBlur={handleBlur}
                                        /*onChange={(newValue) => {
                                            console.log(newValue.format("DD/MM/YYYY"));
                                            
                                            handleChange('dateDeNaiss')(newValue.toISOString());
                                        }}*/
                                        placeholder="dateNaissance"
                                        inputProps={{}} 
                                        disabled
                                        />
                                    </LocalizationProvider>
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="adresse">Adresse*</InputLabel>
                                    <OutlinedInput
                                        id="adresse"
                                        type="adresse"
                                        value={values.adresse}
                                        name="adresse"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Adresse"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="agemere">Age de Mere*</InputLabel>
                                    <OutlinedInput
                                        id="agemere"
                                        type="agemere"
                                        value={values.ageMere}
                                        name="agemere"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="age de Mere"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="agepere">Age de Pere*</InputLabel>
                                    <OutlinedInput
                                        id="agepere"
                                        type="agepere"
                                        value={values.agepere}
                                        name="agepere"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="age de Pere"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="parite">Parite*</InputLabel>
                                    <OutlinedInput
                                        id="parite"
                                        type="number"
                                        value={values.parite}
                                        name="parite"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Parite"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="grossesse">Grossesse*</InputLabel>
                                    <OutlinedInput
                                        id="grossesse"
                                        type="grossesse"
                                        value={values.grossesse}
                                        name="grossesse"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Grossesse"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="nombreFratrie">Nombre de Fratrie*</InputLabel>
                                    <OutlinedInput
                                        id="nombreFratrie"
                                        type="number"
                                        value={values.nombreFratrie}
                                        name="nombreFratrie"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Grossesse"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            </Grid>
                            

       
                   
        </>
    )
    }
    export default Info;