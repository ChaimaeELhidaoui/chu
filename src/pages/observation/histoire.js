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
    Typography,
    FormGroup,
    
    Checkbox

    
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Histoire=({ values, handleChange, handleBlur, errors, touched}) =>{
    
    return(
        <>
                        <Grid container spacing={1} >

                            <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="ageAppSym">âge d’apparition des symptômes :</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="ageAppSym"
                                            type="ageAppSym"
                                            value={values.ageAppSym}
                                            name="ageAppSym"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="ageAppSym"
                                            inputProps={{}}
                                        />
                                        
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dyspnee">Dyspnée  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="dyspnee"
                                        value= {values.dyspnee}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="sueursALeffort">Sueurs à l'effort   </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="sueursALeffort"
                                        value= {values.sueursALeffort}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cyanose"> cyanose </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="cyanose"
                                        value= {values.cyanose     }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="malaise"> Malaise </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="malaise"
                                        value= {values.malaise     }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            
                            
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="diffalimentaire"> Difficulté alimentaire </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="diffalimentaire"
                                        value= {values.diffalimentaire }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="stagnationponderale"> Stagnation pondérale </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="stagnationponderale"
                                        value= {values.stagnationponderale }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="syncope"> Syncope  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="syncope"
                                        value= {values.syncope }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="palpitation"> Palpitation    </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="palpitation"
                                        value= {values.palpitation }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="signesrespiratoires"> Signes respiratoires    </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="signesrespiratoires"
                                        value= {values.signesrespiratoires }
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                          <FormControlLabel value="oui " control={<Radio />} label="Oui " />
                                        <FormControlLabel value="non " control={<Radio />} label="Non " />
                                         
                                        
                                    </RadioGroup>
                                    
                                </Stack>
                            </Grid>

                            

                            <Grid item xs={12} >
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="autres">Autres :</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="autres"
                                            type="autres"
                                            value={values.autres}
                                            name="autres"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Autres"
                                            inputProps={{}}
                                        />
                                        
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="examenclinique" style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>EXAMEN CLINIQUE :</InputLabel>
                                        <InputLabel htmlFor="general" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ General :</InputLabel>
                            

                                             <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                <InputLabel htmlFor="poids">Poids</InputLabel>
                                                 
                                                
                                                    <OutlinedInput
                                                        fullWidth
                                                        id="poids"
                                                        type="number"
                                                        value={values.poids}
                                                        name="poids"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="poids"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="taille">Taille</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="taille"
                                                        type="number"
                                                        value={values.taille}
                                                        name="taille"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="taille"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="pc">PC :</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="pc"
                                                        type="number"
                                                        value={values.pc}
                                                        name="pc"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="pc"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                            <Grid item xs={12}  >
                                                         <Stack spacing={1}>

                                                    <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                <InputLabel htmlFor="temperature">Temperature</InputLabel>
                                                 
                                                
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="tempertaure"
                                                        type="number"
                                                        value={values.temperature}
                                                        name="temperature"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="temperature"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="ta">TA</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="ta"
                                                        type="number"
                                                        value={values.ta}
                                                        name="ta"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="ta"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="fc">FC:</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="fc"
                                                        type="number"
                                                        value={values.fc}
                                                        name="fc"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="fc"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                        <InputLabel htmlFor="fr">FR:</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="fr"
                                                        type="number"
                                                        value={values.fr}
                                                        name="fr"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="fr"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="sao2">SAO2</InputLabel>
                                    <div style={{ display: 'flex' }}>
                                             <div style={{ flex: 1, marginRight: '1rem' }}>
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="alaireambiante"
                                                        type="number"
                                                        value={values.alaireambiante}
                                                        name="alaireambiante"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="A l'aire ambiante"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    <div style={{ flex: 1, marginRight: '1rem' }}>
                                                    
                                                    <OutlinedInput
                                                        fullWidth
                                                        
                                                        id="souso2"
                                                        type="number"
                                                        value={values.souso2}
                                                        name="souso2"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Sous O2"
                                                        inputProps={{}}
                                                    />
                                                    
                                                    </div>
                                                    </div>
                                                    </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="dysmorphie">Dysmorphie :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="dysmorphie"
                                        value= {values.dysmorphie}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        <FormControlLabel value="oui" control={<Radio />} label="oui " />
                                    </RadioGroup>
                                   {values.dysmorphie === "oui" ? (
                                           <OutlinedInput
                                       
                                                type="optionDysmorphie"
                                                value={values.optionDysmorphie}
                                                name="optionDysmorphie"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Trisomie21 - Trisomie18 ou Autres"
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                        
                                    
                                </Stack>
                            </Grid>
                                    <InputLabel htmlFor="general" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ Examen Cardiovasculaire :</InputLabel>
                                     <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="serologie">Signes d’insuffisance cardiaque : </InputLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                name="sInsufCard"
                                                checked={values.sInsufCard.includes('Tachycardie')}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="Tachycardie"
                                            />
                                            }
                                            label="Tachycardie"
                                        />
                                        <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        name="sInsufCard"
                                                        checked={values.sInsufCard.includes('Hépatomégalie')}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value="Hépatomégalie"
                                                    />
                                                    }
                                                    label="Hépatomégalie"
                                                />
                                                <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="sInsufCard"
                                                            checked={values.sInsufCard.includes('OMI')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="OMI"
                                                        />
                                                        }
                                                        label="OMI"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="sInsufCard"
                                                            checked={values.sInsufCard.includes('RHJ')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="RHJ"
                                                        />
                                                        }
                                                        label="RHJ"
                                                    />
                                        </FormGroup>
                                    
                                    </Stack>
                                    </Grid> 

                                    <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="poulsPeripheriquePercues">pouls_peripherique_percues :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="poulsPeripheriquePercues"
                                        value= {values.poulsPeripheriquePercues}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                       
                                        <FormControlLabel value="oui" control={<Radio />} label="oui " />
                                        <FormControlLabel value="peu" control={<Radio />} label="peu " />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                    </RadioGroup>
                                   {values.pouls_peripherique_percues === "non" ? (
                                           <OutlinedInput
                                       
                                                type="optionPPP"
                                                value={values.optionPPP}
                                                name="optionPPP"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder=""
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                        
                                    
                                </Stack>
                            </Grid>

                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="souffle">souffle : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="souffle"
                                        value= {values.souffle}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="eclatB2">Eclat de B2 : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="eclatB2"
                                        value= {values.eclatB2}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                    
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="bruitGalop">Bruit de galop: </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="bruitGalop"
                                        value= {values.bruitGalop}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    {values.bruit_galop === "non" ? (
                                           <OutlinedInput
                                       
                                                type="optionBruit"
                                                value={values.optionBruit}
                                                name="optionBruit"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Autres"
                                                fullWidth
                                        
                                    />
                                        ) : null}
                                    
                                    
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12}  >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="hippocratismeDigital">  Hippocratisme digital  : </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="hippocratismeDigital"
                                        value= {values.hippocratismeDigital}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="deformationThoracique"> Déformation thoracique :  </InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="deformationThoracique"
                                        value= {values.deformationThoracique}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="oui" control={<Radio />} label="oui" />
                                        <FormControlLabel value="non" control={<Radio />} label="non" />
                                        
                                    </RadioGroup>
                                    
                                    </Stack>
                                    </Grid>
                                    <Grid item xs={12} >
                                    <Stack spacing={1}>
                                    <InputLabel htmlFor="resteexamenclinique" style={{ color: 'green', fontSize: '15px', fontWeight: 'italic' }}> ¤ Le reste de l'examen clinique :</InputLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="resteexamenclinique"
                                        value= {values.resteexamenclinique}
                                        onBlur = {handleBlur}
                                        onChange = {handleChange}
                                        inputProps = {{}}
                                    >
                                        <FormControlLabel value="normal" control={<Radio />} label="normal" />
                                        <FormControlLabel value="pathologique" control={<Radio />} label="pathologique" />
                                        
                                    </RadioGroup>
                                    {values.resteexamenclinique === "pathologique" ? (
                                           <OutlinedInput
                                       
                                                type="optionREC"
                                                value={values.optionREC}
                                                name="optionREC"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder=""
                                                fullWidth
                                        
                                    />
                                        ) : null}

                            
                                   
                                


                                    </Stack>
                                </Grid>

                               

                                

                        </Grid>
                 </>
    ) }
export default Histoire;