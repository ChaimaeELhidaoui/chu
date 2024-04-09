import React, { useState } from 'react';
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

import * as Yup from 'yup';
import { Formik } from 'formik';




const Exemen =({ values, handleChange, handleBlur, errors, touched}) =>{
    

    return(
        <>
        
                        <Grid container spacing={1} >
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="eCG">ECG*</InputLabel>
                                    <OutlinedInput
                                        
                                        type="eCG"
                                        value={values.eCG}
                                        name="eCG"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="ECG"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12} >
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="radioThoracique">Radio Thoracique*</InputLabel>
                                    <OutlinedInput
                                        
                                        type="radioThoracique"
                                        value={values.radioThoracique}
                                        name="radioThoracique"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Radio Thoracique"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="echographieCardiaque">Echographie Cardiaque*</InputLabel>
                                    <OutlinedInput
                                        
                                        type="echographieCardiaque"
                                        value={values.echographieCardiaque}
                                        name="echographieCardiaque"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Echographie Cardiaque"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1} >
                                    <InputLabel htmlFor="cAT">CAT*</InputLabel>
                                    <OutlinedInput
                                       
                                        type="cAT"
                                        value={values.cAT}
                                        name="cAT"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="CAT"
                                        fullWidth
                                        
                                    />
                                    
                                </Stack>
                            </Grid>

                            </Grid>
                            
                           
        </>
    )
}

export default Exemen;