import { useEffect, useState } from 'react';
import { dispatch } from 'store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router';
// material-ui
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

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useAddPatientMutation } from 'services/addPatientApi';
import { add } from 'store/slices/patientSlice';

//import functions to get categories and illnesses
import { getCategories, getIllnessesByCategory } from '../../services/functions';

// ============================|| AddPatient ||============================ //
const AddPatient = () => {
    const navigate = useNavigate();
    const [addPatientMutation, { isSuccess, isLoading, isError, error, data }] = useAddPatientMutation();

    // get category names :
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Call the service function to get the array of items
        const categories = getCategories();
        setCategories(categories);
    }, []);

    useEffect(() => {
        if (isSuccess) {
            dispatch(add(data));
            const states = {
                patient:data,
                formData: null,
            }
            navigateInfo('/patientInfo', { state: states });
        }
    }, [isSuccess, data]);

    // navigate to patient Information
    const navigateInfo = useNavigate();

    return (
        <>
            <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Box
                    sx={{
                        height: 80,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', color: '#004999' }}>
                        Ajouter Un Patient
                    </Typography>
                </Box>
                <Formik
                    initialValues={{
                        iP: '',
                        prenom: '',
                        nom: '',
                        sex: '',
                        dateDeNaiss: '',
                        tele: '',
                        province: 'Oujda-Angad',
                        dateDeConsultation: '',
                        categorie: '',
                        maladie: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        iP: Yup.string().max(255).required('champ requis'),
                        prenom: Yup.string().max(255).required('champ requis'),
                        nom: Yup.string().max(255).required('champ requis'),
                        sex: Yup.string().max(255).required('champ requis'),
                        dateDeNaiss: Yup.date().required('champ requis'),
                        tele: Yup.number().required('champ requis'),
                        dateDeConsultation: Yup.date().required('champ requis')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        await addPatientMutation({ body: values });
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
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="iP-patient">IP *</InputLabel>
                                        <OutlinedInput
                                            id="iP-patient"
                                            type="iP"
                                            value={values.iP}
                                            name="iP"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="iP"
                                            fullWidth
                                            error={Boolean(touched.iP && errors.iP)}
                                        />
                                        {touched.iP && errors.iP && (
                                            <FormHelperText error id="helper-text-iP-patient">
                                                {errors.iP}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="prenom-patient">Prénom*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.prenom && errors.prenom)}
                                            id="prenom-patient"
                                            type="prenom"
                                            value={values.prenom}
                                            name="prenom"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Prénom"
                                            inputProps={{}}
                                        />
                                        {touched.prenom && errors.prenom && (
                                            <FormHelperText error id="helper-text-prenom-patient">
                                                {errors.prenom}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="nom-patient">Nom*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.nom && errors.nom)}
                                            id="nom-patient"
                                            type="nom"
                                            value={values.nom}
                                            name="nom"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Nom"
                                            inputProps={{}}
                                        />
                                        {touched.nom && errors.nom && (
                                            <FormHelperText error id="helper-text-nom-patient">
                                                {errors.nom}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="dateDeNaiss-patient">Date de Naissance1*</InputLabel>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                format="DD/MM/YYYY"
                                                error={Boolean(touched.dateDeNaiss && errors.dateDeNaiss)}
                                                id="dateDeNaiss-patient"
                                                value={values.dateDeNaiss}
                                                name="dateDeNaiss"
                                                disableFuture
                                                onBlur={handleBlur}
                                                onChange={(newValue) => {
                                                    const year = newValue.$d.getFullYear();
                                                    const month = String(newValue.$d.getMonth() + 1).padStart(2, '0');
                                                    const day = String(newValue.$d.getDate()).padStart(2, '0');
                                                    const formattedDate = `${year}-${month}-${day}`;

                                                    console.log(formattedDate);
                                                    handleChange('dateDeNaiss')(formattedDate);
                                                }}
                                                placeholder="dateDeNaiss"
                                                inputProps={{}}
                                            />
                                        </LocalizationProvider>
                                        {touched.dateDeNaiss && errors.dateDeNaiss && (
                                            <FormHelperText error id="helper-text-dateDeNaiss-patient">
                                                {errors.dateDeNaiss}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="sex-patient">sex*</InputLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="sex"
                                            value={values.sex}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            inputProps={{}}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Féminin" />
                                            <FormControlLabel value="male" control={<Radio />} label="Masculin" />
                                        </RadioGroup>
                                        {touched.sex && errors.sex && (
                                            <FormHelperText error id="helper-text-sex-patient">
                                                {errors.sex}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="tele-patient">tél*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.tele && errors.tele)}
                                            id="tele-patient"
                                            type="tele"
                                            value={values.tele}
                                            name="tele"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="tél"
                                            inputProps={{}}
                                        />
                                        {touched.tele && errors.tele && (
                                            <FormHelperText error id="helper-text-tele-patient">
                                                {errors.tele}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="province-patient">Province*</InputLabel>
                                        <Select
                                            labelId="province"
                                            name="province"
                                            id="province"
                                            value={values.province}
                                            label="province"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Berkane'}>Berkane</MenuItem>
                                            <MenuItem value={'Driouch'}>Driouch</MenuItem>
                                            <MenuItem value={'Figuig'}>Figuig</MenuItem>
                                            <MenuItem value={'Guercif'}>Guercif</MenuItem>
                                            <MenuItem value={'Jerada'}>Jerada</MenuItem>
                                            <MenuItem value={'Nador'}>Nador</MenuItem>
                                            <MenuItem value={'Oujda-Angad'}>Oujda-Angad</MenuItem>
                                            <MenuItem value={'Taourirt'}>Taourirt</MenuItem>
                                        </Select>
                                        {touched.province && errors.province && (
                                            <FormHelperText error id="helper-text-province-patient">
                                                {errors.province}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="dateDeConsultation-patient">Date de Consultation*</InputLabel>
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

                                                    console.log(formattedDate);
                                                    handleChange('dateDeConsultation')(formattedDate);
                                                }}
                                                placeholder="date De Consultation"
                                                inputProps={{}}
                                            />
                                        </LocalizationProvider>
                                        {touched.dateDeConsultation && errors.dateDeConsultation && (
                                            <FormHelperText error id="helper-text-dateDeConsultation-patient">
                                                {errors.dateDeConsultation}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="categorie-patient">catégorie*</InputLabel>
                                        <Select
                                            labelId="categorie"
                                            name="categorie"
                                            id="categorie"
                                            value={values.categorie}
                                            label="categorie"
                                            onChange={handleChange}
                                        >
                                            {categories.map((category) => (
                                                <MenuItem key={category.id} value={category.name}>
                                                    {category.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {touched.categorie && errors.categorie && (
                                            <FormHelperText error id="helper-text-categorie-patient">
                                                {errors.categorie}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="maladie-patient">maladie*</InputLabel>
                                        <Select
                                            labelId="maladie"
                                            name="maladie"
                                            id="maladie"
                                            value={values.maladie}
                                            label="maladie"
                                            onChange={handleChange}
                                        >
                                            {getIllnessesByCategory(values.categorie).map((maladie, index) => (
                                                <MenuItem key={index} value={maladie}>
                                                    {maladie}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {touched.maladie && errors.maladie && (
                                            <FormHelperText error id="helper-text-maladie-patient">
                                                {errors.maladie}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12} spacing={8}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Enregistrer
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default AddPatient;
