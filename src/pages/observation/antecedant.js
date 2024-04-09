import React, { useState , useEffect} from 'react';
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

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

const Antecedant =({ values, handleChange, handleBlur, errors, touched})=>{
    const [selectedOption,setSelectedOption]= useState("normal");

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
   
    
    return (
        <>

                        <Grid container spacing={1} >
                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="grossesseS">Grossesse Suivie :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="grossesseS"
                                        value= {values.grossesseS}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="serologie">Sérologie faites : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="serologie"
                                        value= {values.serologie}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="deroulement">Déroulement :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="deroulement"
                                        value= {values.deroulement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="normal" control={<Radio />} label="normal" />
                                        <FormControlLabel value="pathologique" control={<Radio />} label="pathologique " />
                                    </RadioGroup>
                                   {values.deroulement === "pathologique" ? (
                                           <OutlinedInput
                                       
                                                type="optionPathologique"
                                                value={values.optionPathologique}
                                                name="optionPathologique"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Pathologique"
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                        
                                    
                                </Stack>
                            </Grid>
                                        
                       <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="agegestationnel">Age gestationnel :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="agegestationnel"
                                        value= {values.agegestationnel}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                         <FormControlLabel value="aterme " control={<Radio />} label="à terme " />
                                        <FormControlLabel value="premature" control={<Radio />} label="prématuré" />
                                        <FormControlLabel value="post terme " control={<Radio />} label="post terme" />

                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                           <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="accouchement">Accouchement </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="accouchement"
                                        value= {values.accouchement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="VB " control={<Radio />} label="VB " />
                                        <FormControlLabel value="Cesarienne " control={<Radio />} label="Césarienne " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>
                                    
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="pN">PN</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        
                                        id="pN"
                                        type="pN"
                                        value={values.pN}
                                        name="pN"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="PN"
                                        inputProps={{}}
                                        
                                    />
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="allaitement">Allaitement  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="allaitement"
                                        value= {values.allaitement}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="Sein   " control={<Radio />} label="Sein " />
                                        <FormControlLabel value="Artificiel " control={<Radio />} label="Artificiel" />
                                        <FormControlLabel value="Mixte " control={<Radio />} label="Mixte" />

                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="developpementpsychomoteur">Développement psychomoteur </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="developpementpsychomoteur"
                                        value= {values.developpementpsychomoteur}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="Normal   " control={<Radio />} label="Normal " />
                                        <FormControlLabel value="Retarde " control={<Radio />} label="Retardé" />
                                     
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="irr">Infection respiratoires à répétition </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="irr"
                                        value= {values.irr}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="Chirurgicaux">Chirurgicaux</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        
                                        id="Chirurgicaux"
                                        type="Chirurgicaux"
                                        value={values.Chirurgicaux}
                                        name="Chirurgicaux"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Chirurgicaux"
                                        inputProps={{}}
                                    />
                                    
                                </Stack>
                            </Grid>

                                <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="consanguinite">consanguinité</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="consanguinite"
                                        value= {values.consanguinite}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.consanguinite === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionConsanguinite"
                                                value={values.optionConsanguinite}
                                                name="optionConsanguinite"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Degré"
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                    
                                </Stack>
                            </Grid> 

                             

                           <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cardfamille">Cardiopathie dans la famille </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="cardfamille"
                                        value= {values.cardfamille}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="atcdmaternels">ATCD maternels </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="atcdmaternels"
                                        value= {values.atcdmaternels}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.atcdmaternels === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionAtcd"
                                                value={values.optionAtcd}
                                                name="optionAtcd"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Diabete sucré --phénylcétonurie 15 ou Autres"
                                                fullWidth
                                        
                                    />
                                        ) : null}

                                    
                                </Stack>
                            </Grid>

                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="pmedic">Prise de médicament </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="pmedic"
                                        value= {values.pmedic}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.pmedic === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionMedicament"
                                                value={values.optionMedicament}
                                                name="optionMedicament"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Anticonvulsivants -Barbiturique – Lithium ou Autres"
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                    
                                </Stack>
                            </Grid>

                        </Grid>
                  
                </>
    )
                                    }
        export default Antecedant;
                
     
        
 