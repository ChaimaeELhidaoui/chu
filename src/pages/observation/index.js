import React, { useState , useEffect } from 'react';
import {toast , ToastContainer} from 'react-toastify';
import { useLocation } from 'react-router-dom';

import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    
} from '@mui/material';
import Info from './info';
import Antecedant from './antecedant';
import Histoire from './histoire';
import Motif from './Motif';
import Exemen from './exemen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';

import {useAddObservationMutation} from 'services/ObservationApi';
import {add} from 'store/slices/observationSlice';
import { dispatch } from 'store';

const steps = ['Inforamtions générales', 'ANTECEDANTS','MOTIF D’HOSPITALISATION/CONSULTATION' , 'HISTOIRE DE LA MALADIE ','EXAMEN COMPLEMENTAIRES  '];

const Observation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [submitValues, setSubmitValues] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {};
    const pat = state["state1"];
    
    //mutation
    const [addObservationMutation,{isSuccess,isLoading,isError,error , data}] = useAddObservationMutation();
   
    const navigateInfo = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(add(data));
            console.log(data);
            const states = {
                patient: state["state1"],
                formData: {
                    date: state["state2"]["date"],
                    observation:data,
                    observationId: data["@id"],
                    cr:state["state2"]["cr"],
                    crId:state["state2"]["crId"]
                }
            }
            
            navigateInfo('/patientInfo', { state: states });
            {/*const combinedState = {
                state1: data,
                state2: pat,
                state3: state["state2"]
              };
            navigateInfo('/observationViewer', { state: combinedState });*/}
        }
    }, [isSuccess, data])

    const Soumisssion = async () => {
        if (activeStep === steps.length - 1) {
          console.log(submitValues);
          //toast.success('Formulaire soumis avec succès !', {
            //onClose: () => {
              //navigate('/patient');
            //}
          //});
           await addObservationMutation({body: submitValues});
        } else {
          // Passer à l'étape suivante
          handleNext();
        }
    }
    
    const handleNext = () => {


        // Passer à l'étape suivante
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {


        setActiveStep(activeStep - 1);
    };

    

    return (
    <>
        <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Typography variant="h3" align="center" style={{ padding: '16px' }} gutterBottom>
                {steps[activeStep]}
            </Typography>
        
        <Formik
        initialValues={{
            patient:pat["@id"],
            adresse: '',
            agemere: '',
            grossesse: '',
            parite :0,
            agepere:'',
            nombreFratrie :0,
            grossesseS: '',
            serologie: '',
            deroulement: '',
            optionDeroulement :'',
            agegestationnel: '',
            accouchement : '',
            pN: '',
            allaitement: '',
            developpementpsychomoteur: '',
            irr :'',
            chirurgicaux :'',
            consanguinite :'',
            optionConsanguinite :'',
            cardfamille :'',
            atcdmaternels :'',
            optionAtcd :'',
            pmedic :'',
            optionMedicament:'',
            motifHospConsul:'',
            ageAppSym: '',
            dyspnee: '',
            sueursALeffort: '',
            cyanose     : '',
            malaise : '',
            diffalimentaire: '',
            stagnationponderale: '',
            syncope    : '',
            palpitation           :'',
            signesrespiratoires    :'',
            autres :'',
            poids :0,
            taille :0,
            pc :0,
            temperature           :0,
            ta:0,
            fc:0,
            fr:0,
            alaireambiante    :0,
            souso2:0,
            dysmorphie :'',
            optionDysmorphie :'',
            sInsufCard :[],
            souffle :'',
            poulsPeripheriquePercues:'',
            optionPPP :'',
            eclatB2 :'',
            bruitGalop:'',
            optionBruit :'',
            hippocratismeDigital :'',
            deformationThoracique  :'',
            resteexamenclinique :'',
            optionREC :'',
            eCG: '',
            radioThoracique: '',
            echographieCardiaque: '',
            cAT: '',
            submit: null
        }}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
            setSubmitValues(values);
            
        }}

        >
            
       
         
            
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit} >
                {activeStep === 0 && (
                    <div>
                        <Info values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched} patient={pat}/>
                         </div>
                )}
                {activeStep === 1 && (
                    <div>
                       <Antecedant values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched}/> 
                        
                    </div>
                )}
                {activeStep === 2 && (
                    <div>
                      <Motif values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched}/>
                    </div>
                )}
                {activeStep === 3 && (
                    <div>
                      <Histoire values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched}/> 
                    </div>
                )}
                {activeStep === 4 && (
                    <div>
                      <Exemen values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched}/> 
                    </div>
                )}
              <ToastContainer values={values} handleChange={handleChange} handleBlur={handleBlur} error={errors} touched={touched}/>
                <div>
                    {activeStep === 0 ? <Button disabled>Back</Button> : <Button onClick={handleBack}>Back</Button>}
                    <Button type ="submit" variant="contained" color="primary" onClick={Soumisssion}   >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </form>
            )}
            </Formik>
            </>
        
    );
};

export default Observation;