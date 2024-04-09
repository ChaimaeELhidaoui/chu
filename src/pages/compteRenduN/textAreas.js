import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
// material-ui
import { Grid, Stack, Typography, TextField } from '@mui/material';

// ============================|| Compte Rendu- Text Area ||============================ //
const TextArea = ({ values, handleChange, handleBlur, errors, touched }) => {
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75'
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f'
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 100%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
    );

    return (
        <>
            <Grid container spacing={1} sx={{ marginBottom: '30px' }}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <Typography variant="h4" component="h2" sx={{ marginTop: '20px' }}>
                            + Situs, Alignement, Connexion :
                        </Typography>
                        <StyledTextarea
                            maxRows={15}
                            multiline
                            value={values.situsAlignementConnexion}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            aria-label="maximum height"
                            placeholder="Maximum 15 rows"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <Typography variant="h4" component="h2" sx={{ marginTop: '20px' }}>
                            + Veines et Oreillettes :
                        </Typography>
                        <StyledTextarea
                            maxRows={20}
                            multiline
                            name="veinesOreillettes"
                            value={values.veinesOreillettes}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            aria-label="maximum height"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <Typography variant="h4" component="h2" sx={{ marginTop: '20px' }}>
                            + Fonctions AV et Ventricules :
                        </Typography>
                        <StyledTextarea
                            maxRows={15}
                            name="fonctionAVVentricules"
                            value={values.fonctionAVVentricules}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            aria-label="maximum height"
                            placeholder="Maximum 15 rows"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <Typography variant="h4" component="h2" sx={{ marginTop: '20px' }}>
                            + Vaisseaux :
                        </Typography>
                        <StyledTextarea
                            maxRows={15}
                            name="vaisseaux"
                            value={values.vaisseaux}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            aria-label="maximum height"
                            placeholder="Maximum 15 rows"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <Typography variant="h4" component="h2" sx={{ marginTop: '20px' }}>
                            + Autres :
                        </Typography>
                        <StyledTextarea
                            maxRows={15}
                            name="autres"
                            value={values.autres}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            aria-label="maximum height"
                            placeholder="Maximum 15 rows"
                        />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default TextArea;
