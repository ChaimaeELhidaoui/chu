import {useEffect, useState,} from 'react';
import {useLocation, useNavigate, useParams } from 'react-router-dom';
import {Box, Typography, Button, Grid,FormGroup,FormControlLabel,Checkbox,FormHelperText} from '@mui/material';
import {Person} from '@mui/icons-material';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import {CheckCircleFilled } from '@ant-design/icons';
import { useAddConsultationMutation } from 'services/consultationApi';
import { add } from 'store/slices/consultationSlice';
import { dispatch } from 'store';
import { getPatientConsultations } from 'services/functions';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Stack,
  } from '@mui/material';
  import * as Yup from 'yup';
import { Formik } from 'formik';

//table imports

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//
import { useDispatch, useSelector } from 'react-redux';
import { fetchConsultations } from 'store/slices/consultationSlice';

const PatientInfo = () =>{

    const [addConsultationMutation,{isSuccess,isLoading,isError,error , data}] = useAddConsultationMutation();
    

    const [patient, setPatient] = useState(null);
    const [formdata, setFormdata] = useState(null);
    const [addNewOne, setAddNewOne] = useState(true);
    const [patientConsultations, setPatientConsultations] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {};

    // consultations : 
    // const consultations = useSelector((state) => state.consultation);
    //const dispatchCons = useDispatch();
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    // consultations use Effect
    useEffect( () => {
      let infos = null;
      const getData =  ()=> {
         dispatch(fetchConsultations()).then((data)=> {
          if(data){
              infos = data;
              setItems(infos["payload"]["hydra:member"]);
              setTotalItems(infos["payload"]["hydra:totalItems"]);
              setDataLoaded(true);
          }
         })
      }
       getData();
    }, []);

    // add consultation useEffect
    useEffect(() => {
      if (isSuccess) {
          dispatch(add(data));
          console.log(data);
          const states = {
              patient:state["patient"],
              formData: null,
          }
          showToast();
          //setFormdata(null);
          navigate('/patientInfo', { state: states });
      }
  }, [isSuccess, data]);

    

    useEffect(() => {
      
      if(items){
        console.log(items);
      }
      if(totalItems){
        console.log(totalItems);
      }
      if(patient){
        setPatientConsultations(getPatientConsultations(items,patient["@id"]));
      }
      
      
    }, [patient,dataLoaded, items, totalItems]);

    useEffect(()=> {

      if (state["patient"]) {
        setPatient(state["patient"]);
      }
      if(state["formData"]){
        addRow();
        setFormdata({
          date: state["formData"]["date"],
          observation:state["formData"]["observation"],
          observationId:state["formData"]["observationId"],
          cr:state["formData"]["cr"],
          crId:state["formData"]["crId"]
        });
      }
      if(!state["formData"]){
        setFormdata({
          date: '',
          observation:'',
          observationId: '',
          cr:'',
          crId:''
        });
      }
    }, [state]);

    ///////
    useEffect(() => {
      console.log(formdata);
    }, [formdata]);
    
    //// 
    useEffect(()=> {
      console.log(patientConsultations);
    }, [patientConsultations]);


    // toast useEffect
    useEffect(() => {
        showToast();
    }, []);

console.log(state)


    const getConsultDate = (dateDeConsultation) => {
        const date = new Date(dateDeConsultation);
        const outputDateString = date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
         return outputDateString;
      };
      
     // add row 
    
     const [rows, setRows] = useState([]);
    
      const addRow = () => {
        const newRow = {
          id: rows.length + 1,
          name: 'New Row',
          description: 'Description of new row',
        };
    
        setRows([...rows, newRow]);
        setAddNewOne(false);
      };
    
     //delete row 
      const deleteRow = (index) => {
        const updatedRows = rows.filter((row, i) => i !== index);
        setRows(updatedRows);
      };

    // Function to display the toast notification
    const showToast = () => {
        toast.success('Consultation Ajouté', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
        });
    };
     // Function to navigate to the modifier un patient form
     const handleModifyPatient = () => {
      navigate('/patientmodif', { state: patient });
    };

    return(
        <div>
            {
                patient ?(
                   <div>
                    <Grid container direction="column" spacing={10}> 
                      <Grid item>
                        <Typography variant="h2" align="center">
                                        Les Informations Du Patient
                         </Typography>
                      </Grid>
                      <Grid item >
                       <Box
                         sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          bgcolor: '#e8e8e8',
                          p: 2,
                          borderRadius: 4,
                          width:"70%",
                         }}
                          >
                          <Person sx={{ fontSize: 180 }} />
                          <div style={{margin:"15px",}}> 
                          <Grid item style={{ color: '#32cd32',display:'flex',alignItems:"center",margin:"20px" }}>
                            <Typography variant="h2" >
                              Patient Ajouté 
                            </Typography>
                              <CheckCircleFilled style={{fontSize:"30px",margin:"8px"}}/>
                          </Grid>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                              <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>IP : </Typography>
                            </div>
                            <div>
                              <Typography variant="body1">{patient.iP}</Typography>
                            </div>
                         </div>
                         <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                              <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Nom :  </Typography>
                            </div>
                            <div>
                              <Typography variant="body1">{patient.nom}</Typography>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                              <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Prénom : </Typography>
                            </div>
                            <div>
                              <Typography variant="body1">{patient.prenom}</Typography>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                              <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Diagnostic : </Typography>
                            </div>
                            <div>
                              <Typography variant="body1">{patient.categorie}</Typography>
                            </div>
                          </div>
                          <Grid item>
                            <Button variant="contained" onClick={handleModifyPatient} sx={{ marginTop: '10px',float:'center',width:"350px" }}>
                              Modifier
                            </Button>
                          </Grid>
                        </div>
                          </Box>
                          </Grid>
                      
                     </Grid>

                    <Grid sx={{width:1000}}>
                      {addNewOne? 
                            <AddCircleIcon onClick={addRow} style={{color:"#1a8dff",float:"right",fontSize:"50px",margin:"10px"}}/>
                            : <AddCircleIcon style={{color:"#81888f",float:"right",fontSize:"50px",margin:"10px"}}/>}
                       
                       <TableContainer component={Paper} >
                       <Formik
                                
                                initialValues={{
                                    patient:state["patient"]["@id"],
                                    dateDeConsultation: dayjs(formdata["date"]),
                                    observation:formdata["observationId"],
                                    compteRendu:formdata["crId"],
                                    descision:[],
                                    
                                    submit: null
                                }}
                            validationSchema={Yup.object().shape({
                            dateDeConsultation: Yup.date().required('champ requis')
    
                    
                          })}
                           onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            values.dateDeConsultation = dayjs(values.dateDeConsultation).toDate().toISOString();
                            console.log(values);
                           
                            await addConsultationMutation({ body: values });
                              try {
                                  
                                  setStatus({ success: false });
                                  setSubmitting(false);
                                  
                              } catch (err) {
                                  console.error(err);
                                  setStatus({ success: false });
                                  setErrors({ submit: err.message });
                                  setSubmitting(false);
                              }
                  
                            }}
                        >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                          <form noValidate onSubmit={handleSubmit}>
                        <Table sx={{minWidth: 450 }} aria-label="simple table">
                        <TableHead>

                          <TableRow>
                            <TableCell>Date de consultation</TableCell>
                            <TableCell align="right">Observation</TableCell>
                            <TableCell align="right">Compte Rendu</TableCell>
                            <TableCell align="right">Décision</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>

                        </TableHead>
                        

                        <TableBody>

                        {patientConsultations ? 
                        patientConsultations.map((item)=> (
                          <TableRow
                            
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                             <TableCell component="th" scope="row"> {getConsultDate(item.dateDeConsultation)}</TableCell>
                             <TableCell align="right"> <Button onClick={() => { 
                                const combinedState = {
                                  state1: formdata["observation"],
                                  state2: state["patient"],
                                  state3: formdata,
                                  state4: item.observation
                                }
                                navigate('/observationViewer', { state: combinedState });
                              }}>Observation</Button></TableCell>
                             <TableCell align="right"  onClick={() => {
                                const combinedState = {
                                  state1: formdata["cr"],
                                  state2: state["patient"],
                                  state3: formdata,
                                  state4: {
                                    cr:item.compteRendu,
                                    observation: item.observation
                                  }
                                }
                                navigate('/compteRendueViewer', { state: combinedState });
                              }}><Button>compte rendu</Button></TableCell>
                             <TableCell align="right">
                                {/*  descision */}
                                {item["descision"].join(', ')}
                              </TableCell>
                              <TableCell align="right">  
                                <DeleteIcon style={{color:"#ff0000",fontSize:"30px"}}/>
                              </TableCell>
                        </TableRow>
                        ))
                        
                          : console.log(patientConsultations)}
                          
                          

                          {rows.map((row, index) => (
                          
                        
                           <TableRow key={row.id}>
                            
                             <TableCell>
                             <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD/MM/YYYY"
                                    error={Boolean(touched.dateDeConsultation && errors.dateDeConsultation)}
                                        id="dateDeConsultation"
                                        
                                        value={values.dateDeConsultation}
                                        name={`dateDeConsultation`}
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {

                                          setFormdata({
                                            date: newValue,
                                            observation: formdata["observation"],
                                            observationId: formdata["observationId"],
                                            cr: formdata["cr"],
                                            crId: formdata["crId"]
                                          });

                                          handleChange('dateDeConsultation')(newValue.toISOString());
                                        }}
                                        placeholder="date De Consultation"
                                        inputProps={{}} />
                                    </LocalizationProvider>
                                    {touched.dateDeConsultation && errors.dateDeConsultation && (
                                        <FormHelperText error id="helper-text-dateDeConsultation-patient">
                                            {errors.dateDeConsultation}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                             </TableCell>
                             <TableCell align="right"><Button onClick={() => {
                                                                          const states = {
                                                                            state1: state["patient"],
                                                                            state2: formdata
                                                                          }
                                                                          
                                                                            if(formdata["observation"] != ''){
                                                                              const combinedState = {
                                                                              state1: formdata["observation"],
                                                                              state2: state["patient"],
                                                                              state3: formdata,
                                                                              state4: null
                                                                            }
                                                                            
                                                                              navigate('/observationViewer', { state: combinedState });
                                                                            }
                                                                            else{
                                                                              
                                                                                navigate('/observation', { state: states });
                                                                            }
                                                                          
                                                                          }}>observation</Button></TableCell>
                              <TableCell align="right"  onClick={() => {
                                                                          const states = {
                                                                            state1: state["patient"],
                                                                            state2: formdata
                                                                          }
                                                                          
                                                                            if(formdata["cr"] != ''){
                                                                              const combinedState = {
                                                                              state1: formdata["cr"],
                                                                              state2: state["patient"],
                                                                              state3: formdata,
                                                                              state4: null
                                                                            }
                                                                            
                                                                              navigate('/compteRendueViewer', { state: combinedState });
                                                                            }
                                                                            else{
                                                                              
                                                                              navigate('/cr', { state: states });
                                                                            }

                                                                          
                                                                        }}><Button>compte rendu</Button></TableCell>
                             <TableCell align="right">
                              <Grid item xs={12}  style={{float:"right"}}>
                                 <Stack spacing={1}>
                                  <FormGroup>
                                    <FormControlLabel
                                              control={
                                              <Checkbox
                                                  name="descision"
                                                  checked={values.descision.includes('chirurgie')}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value="chirurgie"
                                              />
                                              }
                                              label="chirurgie"
                                          />
                                          <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        name="descision"
                                                        checked={values.descision.includes('abs')}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value="abs"
                                                    />
                                                    }
                                                    label="abs"
                                                />
                                                 <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="descision"
                                                            checked={values.descision.includes('servience')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="servience"
                                                        />
                                                        }
                                                        label="servience"
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            name="descision"
                                                            checked={values.descision.includes('catheterisme')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="catheterisme"
                                                        />
                                                        }
                                                        label="cathétérisme"
                                                    />
                                  </FormGroup>
                                  {touched.descision && errors.descision && (
                                        <FormHelperText error id="helper-text-decision">
                                            {errors.descision}
                                        </FormHelperText>
                                    )}
                                 </Stack>
                              </Grid>
                             </TableCell>
                             <TableCell align="right">
                                      <Button type="submit" color="primary" variant="contained" >
                                        <DoneIcon style={{color:"primary",fontSize:"30px"}}/>
                                      </Button>
                                    </TableCell>
                           </TableRow>
                           
                      
                          ))}

                       
                          </TableBody>

                        </Table>
                        </form>
                        )}
                        </Formik>
                       </TableContainer>
                    </Grid>

                     {/* <h1>informations du patient</h1>
                    <p>IP : {patient.iP} </p>
                    <p>Nom :{patient.nom} </p>
                    <p>Prenom :{patient.prenom} </p> */}
                   </div>
                ):<p>loading user</p>
            }
        </div>
    );

};
export default PatientInfo;