import React, { useState } from "react";
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
    Typography,
    TextField
    
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Motif = ({ values, handleChange, handleBlur, errors, touched}) => {
  

  return (
    <>
    
                            <TextField
                                name="motifHospConsul"
                                label="Motif d'Hospitalisation/Consultation"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                value={values.motifHospConsul}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                
                                
            />
                               
                    
               </>
  )
               }
  export default Motif;
                    