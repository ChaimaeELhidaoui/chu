import { PDFViewer , PDFDownloadLink} from '@react-pdf/renderer';
import CompteRendueDoc from './CompteRendue';
import { Grid, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { dispatch } from 'store';
import { fetchObservation } from 'store/slices/observationSlice';
import { fetchCompteRendu } from 'store/slices/compteRenduSlice';

const CompteRendueViewer = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {};

    const [obs, setObservation] = useState(null);
    const [cr, setCr] = useState(null);

    useEffect(() => {
        console.log(state);
        if(state.state4){
            const getObservationData =  ()=> {
                dispatch(fetchObservation(state.state4["observation"])).then((data)=> {
                if(data){
                    console.log(data);
                    setObservation(data["payload"]);
                    
                }
                })
            }
            const getCompteRenduData =  ()=> {
                dispatch(fetchCompteRendu(state.state4["cr"])).then((data)=> {
                if(data){
                    console.log(data);
                    setCr(data["payload"]);
                    
                }
                })
            }
            getObservationData();
            getCompteRenduData();
        }
        if(!state.state4){
            setObservation(state["state3"]["observation"]);
            setCr(state.state1);
        }
    }, [state]);

    return (
        <Grid container spacing={1} >

            <Grid item xs={12}>
                {(cr && obs) ?
                <PDFViewer width="100%" height="500px">
                    <CompteRendueDoc cr={cr} patient={state.state2} observ = {obs}/>
                </PDFViewer>
                : console.log('no result')}
            </Grid>
            <Grid item xs={12} spacing={8}>
            {(cr && obs) ?
                <PDFDownloadLink document={<CompteRendueDoc cr={cr} patient={state.state2} observ = {obs}/>} fileName='compteRendueFile'>
                    {({loading}) => (loading? <Button
                                                    size="large"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Actualiser
                                                </Button> : <Button
                                                    size="large"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick= {() => {
                                                        let states={}
                                                        if(!state.state4){
                                                         states = {
                                                            patient: state["state2"],
                                                            formData: {
                                                                date: (state["state3"]!='')? state["state3"]["date"]:'',
                                                                observation:obs,
                                                                observationId: (state["state3"]!='')? state["state3"]["observationId"]:'',
                                                                cr:cr,
                                                                crId:cr["@id"]
                                                            }
                                                        }
                                                    }
                                                    else{
                                                         states = {
                                                            patient: state["state2"],
                                                            formData: null
                                                        }
                                                    }
                                                        setTimeout(() => {
                                                            navigate('/patientInfo', { state: states });
                                                          }, 2000);
                                                         
                                                    }}
                                                >
                                                    Telechercher
                                                </Button>)}
                </PDFDownloadLink>
                : console.log("no result 2")}
            </Grid>
        </Grid>
    )
}

export default CompteRendueViewer;