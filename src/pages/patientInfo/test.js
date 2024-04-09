import { useEffect,useState} from 'react';
import { useLocation, useNavigate ,useParams} from 'react-router-dom';
import { Box, Typography, Button, Grid ,FormGroup,FormControlLabel,Checkbox} from '@mui/material';
import { Person } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPatientQuery } from 'services/getPatientByIdApi';
import {CheckCircleFilled } from '@ant-design/icons';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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



const PatientInfo = () => {
  // const [patient, setPatient] = useState(null);
  // const {iP} = useParams();
  // const {mydata} = useGetPatientQuery(iP);
  const location = useLocation();
    const state = location.state || {};
    const patient = state;
   const navigate = useNavigate();
  

 
  
 
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
  };

 //delete row 
  const deleteRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };


  // Function to display the toast notification
  const showToast = () => {
    toast.success('Patient Ajouté', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  };

  // useEffect(() => {
  //     if (mydata && mydata.length ) {
        
  //       setPatient(mydata[0])
  //     }
  //   }, [mydata]);
  
  useEffect(() => {
    showToast();
  }, []);

  // Function to navigate to the modifier un patient form
  const handleModifyPatient = () => {
    navigate('/patientmodif', { state: patient }); 
  };

  return (
   
    
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
                  <Typography variant="body1">{patient['iP']}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Nom :  </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient['nom']}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Prénom : </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient['prenom']}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6" style={{fontSize:"20px",margin:"5px",fontWeight: 'bold'}}>Diagnostic : </Typography>
                </div>
                <div>
                  <Typography variant="body1">{patient['categorie']}</Typography>
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
        <AddCircleIcon onClick={addRow} style={{color:"#1a8dff",float:"right",fontSize:"50px",margin:"10px"}}/>
      <TableContainer component={Paper} >
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
        
          
           <Formik
                 
                initialValues={{
                    
                    dateDeConsultation: '',
                    decision:'',
                    
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    dateDeConsultation: Yup.date().required('champ requis')
    
                    
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    
                    // await addPatientMutation({body: values});
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
                 <TableBody>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
                {getConsultDate(patient["dateDeConsultation"] )}
              </TableCell>
              <TableCell align="right">
                <Button
                onClick={() => {
                  navigate('/observation');
                
                
              }}
                >Observation</Button></TableCell>
              <TableCell align="right"  onClick={() => {
                  navigate('/cr');
                
                
              }}><Button>compte rendu</Button></TableCell>
              <TableCell align="right">
                 <Grid item xs={12}  style={{float:"right"}}>
                                    <Stack spacing={1}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                name="decision"
                                                checked={values.decision.includes('chirurgie')}
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
                                                        name="decision"
                                                        checked={values.decision.includes('abs')}
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
                                                            name="decision"
                                                            checked={values.decision.includes('servience')}
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
                                                            name="decision"
                                                            checked={values.decision.includes('cathétérisme')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="cathétérisme"
                                                        />
                                                        }
                                                        label="cathétérisme"
                                                    />
                                        </FormGroup>
                                    {touched.decision&& errors.decision && (
                                        <FormHelperText error id="helper-text-decision">
                                            {errors.decision}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid> 
                </TableCell>
                
            </TableRow>
            
           
           {rows.map((row, index) => (
            
                      <TableRow key={row.id}>
                <TableCell>
                  <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD/MM/YYYY"
                                    error={Boolean(touched.dateDeConsultation && errors.dateDeConsultation)}
                                        id="dateDeConsultation-patient"
                                        
                                        value={values.dateDeConsultation}
                                        name="dateDeConsultation"
                                        onBlur={handleBlur}
                                        onChange={(newValue) => {
                                            
                                            const year = newValue.$d.getFullYear();
                                            const month = String(newValue.$d.getMonth() + 1).padStart(2, '0');
                                            const day = String(newValue.$d.getDate()).padStart(2, '0');
                                            const formattedDate = `${year}-${month}-${day}`;

                                            console.log(formattedDate)
                                            handleChange('dateDeConsultation')(formattedDate);
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
                <TableCell align="right">
                  <Button
                onClick={() => {
                  navigate('/observation');
                
                
              }}
                >
                    observation
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button >
                    Compte rendu
                  </Button>
                </TableCell>
                <TableCell align="right">
                                   <Grid item xs={12}  style={{float:"right"}}>
                                    <Stack spacing={1}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                name="decision"
                                                checked={values.decision.includes('chirurgie')}
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
                                                        name="decision"
                                                        checked={values.decision.includes('abs')}
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
                                                            name="decision"
                                                            checked={values.decision.includes('servience')}
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
                                                            name="decision"
                                                            checked={values.decision.includes('cathétérisme')}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value="cathétérisme"
                                                        />
                                                        }
                                                        label="cathétérisme"
                                                    />
                                        </FormGroup>
                                    {touched.decision&& errors.decision && (
                                        <FormHelperText error id="helper-text-decision">
                                            {errors.decision}
                                        </FormHelperText>
                                    )}
                                    </Stack>
                                    </Grid> 
                </TableCell>
                <TableCell align="right">
                <DeleteIcon style={{color:"#ff0000",fontSize:"30px"}} onClick={() => deleteRow(index)}/>
                </TableCell>
                </TableRow>
          ))}
               
              </TableBody> )}
               </Formik>
              
            
             
        
      </Table>
    </TableContainer>
    </Grid>
    </div>
   
  
  );
  
};

export default PatientInfo;