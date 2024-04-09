import { PDFViewer , PDFDownloadLink} from '@react-pdf/renderer';
import ObservationDoc from './Observation';
import { Grid, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchObservation } from 'store/slices/observationSlice';
import { dispatch } from 'store';

const ObservationViewer = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state || {};

    const [obs, setObservation] = useState(null);

    useEffect(() => {
        console.log(state);
        if(state.state4){
            // get observation by id
                console.log(state.state4);
                const getData =  ()=> {
                dispatch(fetchObservation(state.state4)).then((data)=> {
                if(data){
                    console.log(data);
                    setObservation(data["payload"]);
                    
                }
                })
              }
            getData();
        }
        if(!state.state4){
            setObservation(state.state1);
        }
    }, [state]);

    return (
        <Grid container spacing={1} >

            <Grid item xs={12}>
                {(obs) ?
                <PDFViewer width="100%" height="500px">
                    <ObservationDoc observ={obs} patientNaissDate={state["state2"]["dateDeNaiss"]}/>
                </PDFViewer>
                : console.log('no result')}
            </Grid>
            <Grid item xs={12} spacing={8}>
                {(obs)? 
                <PDFDownloadLink document={<ObservationDoc observ={obs} patientNaissDate={state["state2"]["dateDeNaiss"]}/>} fileName='observationFile' 
                >
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
                                                        let states= {};
                                                        if(!state.state4){
                                                          states = {
                                                            patient: state["state2"],
                                                            formData: {
                                                                date: (state["state3"]!='')? state["state3"]["date"]: '',
                                                                observation:obs,
                                                                observationId: obs["@id"],
                                                                cr:(state["state3"]!='')? state["state3"]["cr"]: '',
                                                                crId:(state["state3"]!='')? state["state3"]["crId"]: ''
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
                :console.log("no result 2")}
            </Grid>
        </Grid>
    )
}

export default ObservationViewer;