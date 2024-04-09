import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import Tableau from './tableau';
import Conclusion from './conclusion';
import TextArea from './textAreas';

import { Formik } from 'formik';
import { useNavigate } from 'react-router';

import { useAddCompteRenduMutation } from 'services/CompteRenduApi';
import { add } from 'store/slices/compteRenduSlice';
import { dispatch } from 'store';

const steps = ['Champs à remplir', 'Tableau', 'Conclusion'];

const voDV =
    '-  Septum interauriculaire intact, cavités non dilatées,\n' +
    '-  Retours cave et pulmonaire normaux, TVI,\n' +
    '-	Sinus coronaire non dilatée, pression de remplissage normale\n';

const sacDV =
    "-  Situs solitus,lévocardie,arc aortique à gauche,Veine cave supérieure droite dans l'OD \n" +
    '-  Bonne concordance auriculo ventriculaire et ventriculo-artérielle\n';

const favvDV =
    '-  Bonne fonction diastolique et systolique du VG qui est non dilaté ni hypertrophie,\n' +
    '-  Septum IV intact rond, cinétique globale et segmentaire respectée,\n' +
    '-  Valve mitrale fine sans fuite, pas de prolapsus mitral.\n' +
    "-  VD non dilaté de bonne fonction, fuite tricuspide minime, pas d'HTAP\n";

const vaissDV =
    "-  Pas de lésion sur la voie droite ou gauche, Valves pulmonaires d'aspect normal.\n" +
    '-  Canal artériel fermé, Pas de coarctation décelable, Valves aortiques tricuspides normales.\n';

const autreDV = "-  Pas d'épanchement péricardique.\n" + '- Coronaires proximales normale.\n';

const Observation = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [submitValues, setSubmitValues] = useState({});
    const location = useLocation();
    const state = location.state || {};
    const pat = state.state1;

    const [addCompteRenduMutation, { isSuccess, isLoading, isError, error, data }] = useAddCompteRenduMutation();

    const navigateInfo = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(add(data));

            const states = {
                patient: state["state1"],
                formData: {
                    date: state["state2"]["date"],
                    observation:state["state2"]["observation"],
                    observationId: state["state2"]["observationId"],
                    cr:data,
                    crId:data["@id"]
                }
            }
            
            navigateInfo('/patientInfo', { state: states });
             
            {/*const combinedState = {
                state1: data,
                state2: state.state1,
                state3: state.state2
              };
            navigateInfo('/compteRendueViewer', { state: combinedState });*/}
        }
    }, [isSuccess, data]);

    const Submission = async () => {
        if (activeStep === steps.length - 1) {
            console.log(submitValues);

            await addCompteRenduMutation({ body: submitValues });
        } else {
            // Next
            handleNext();
        }
    };

    const handleNext = () => {
        // Next
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
                    patient: pat['@id'],

                    situsAlignementConnexion: sacDV,
                    veinesOreillettes: voDV,
                    fonctionAVVentricules: favvDV,
                    vaisseaux: vaissDV,
                    autres: autreDV,
                    vDdiastole: 0,
                    vDsystole: '',
                    sEPTUMdiastole: 0,
                    sEPTUMsystole: 0,
                    vGdiastole: 0,
                    vGsystole: 0,
                    pPdiastole: 0,
                    pPsystole: 0,
                    tRI: 0,
                    fE: 0,
                    eA: 0,
                    fR: 0,
                    aPAnneau: 0,
                    tAP: 0,
                    aPD: 0,
                    aPG: 0,
                    aorteAnneau: 0,
                    racine: 0,
                    aOASC: 0,
                    crosse: 0,
                    conclusion: '',
                    submit: null
                }}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
                    setSubmitValues(values);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        {activeStep === 0 && (
                            <div>
                                <TextArea
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors}
                                    touched={touched}
                                />
                            </div>
                        )}
                        {activeStep === 1 && (
                            <div>
                                <Tableau
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors}
                                    touched={touched}
                                />
                            </div>
                        )}
                        {activeStep === 2 && (
                            <div>
                                <Conclusion
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors}
                                    touched={touched}
                                />
                            </div>
                        )}

                        <div>
                            {activeStep === 0 ? <Button disabled>Back</Button> : <Button onClick={handleBack}>Back</Button>}
                            <Button type="submit" variant="contained" color="primary" onClick={Submission}>
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
