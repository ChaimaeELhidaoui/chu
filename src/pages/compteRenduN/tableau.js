import { useEffect, useState } from 'react';
import { dispatch } from 'store';
import { useNavigate } from 'react-router';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';

// ============================|| Compte Rendu ||============================ //
const Tableau = ({ values, handleChange, handleBlur }) => {
    return (
        <>
            <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>Verticules</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                Diastole
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                Systole
                            </TableCell>
                            <TableCell textAlign="center">Mesure (mm)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>VD</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="VD-D"
                                    style={{ width: '100px' }}
                                    id="VDD-patient"
                                    type="number"
                                    value={values.vDdiastole}
                                    name="vDdiastole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="VD-S"
                                    style={{ width: '100px' }}
                                    id="VDS-patient"
                                    type="vDsystole"
                                    value={values.vDsystole}
                                    name="vDsystole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                AP
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                Aorte
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>SEPTUM</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="SEPTUM-D"
                                    style={{ width: '100px' }}
                                    id="SEPTUMD-patient"
                                    type="number"
                                    value={values.sEPTUMdiastole}
                                    name="sEPTUMdiastole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="SEPTUM-S"
                                    style={{ width: '100px' }}
                                    id="SEPTUMS-patient"
                                    type="number"
                                    value={values.sEPTUMsystole}
                                    name="sEPTUMsystole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="Anneau"
                                    style={{ width: '100px' }}
                                    id="Anneau-patient"
                                    type="number"
                                    value={values.aPAnneau}
                                    name="aPAnneau"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="Anneau"
                                    style={{ width: '100px' }}
                                    id="AorteAnneau-patient"
                                    type="number"
                                    value={values.aorteAnneau}
                                    name="aorteAnneau"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>VG</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="VG-D"
                                    style={{ width: '100px' }}
                                    id="VGD-patient"
                                    type="number"
                                    value={values.vGdiastole}
                                    name="vGdiastole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="VG-S"
                                    style={{ width: '100px' }}
                                    id="VGS-patient"
                                    type="number"
                                    value={values.vGsystole}
                                    name="vGsystole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="TAP"
                                    style={{ width: '100px' }}
                                    id="TAP-patient"
                                    type="number"
                                    value={values.tAP}
                                    name="tAP"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="RACINE"
                                    style={{ width: '100px' }}
                                    id="RACINE-patient"
                                    type="number"
                                    value={values.racine}
                                    name="racine"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>Paroi Postérieur</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="PP-D"
                                    style={{ width: '100px' }}
                                    id="PPD-patient"
                                    type="number"
                                    value={values.pPdiastole}
                                    name="pPdiastole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="PP-S"
                                    style={{ width: '100px' }}
                                    id="PPS-patient"
                                    type="number"
                                    value={values.pPsystole}
                                    name="pPsystole"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="APD"
                                    style={{ width: '100px' }}
                                    id="APD-patient"
                                    type="number"
                                    value={values.aPD}
                                    name="aPD"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="AOASC"
                                    style={{ width: '100px' }}
                                    id="AOASC-patient"
                                    type="number"
                                    value={values.aOASC}
                                    name="aOASC"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>Fonction du VG</TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="TRI"
                                    style={{ width: '100px' }}
                                    id="TRI-patient"
                                    type="number"
                                    value={values.tRI}
                                    name="tRI"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <br />
                                <TextField
                                    label="E/A"
                                    style={{ width: '100px' }}
                                    sx={{ marginTop: '9px' }}
                                    id="EA-patient"
                                    type="number"
                                    value={values.eA}
                                    name="eA"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="FE"
                                    style={{ width: '100px' }}
                                    id="FE-patient"
                                    type="number"
                                    value={values.fE}
                                    name="fE"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <br />
                                <TextField
                                    label="FR"
                                    style={{ width: '100px' }}
                                    sx={{ marginTop: '9px' }}
                                    id="Anneau-patient"
                                    type="number"
                                    value={values.aPAnneau}
                                    name="aPAnneau"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="APG"
                                    style={{ width: '100px' }}
                                    id="APG"
                                    type="number"
                                    value={values.aPG}
                                    name="aPG"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell textAlign="center" style={{ borderRight: '1px solid rgb(211, 211, 211)' }}>
                                <TextField
                                    label="CROSSE"
                                    style={{ width: '100px' }}
                                    id="Crosse"
                                    type="number"
                                    value={values.crosse}
                                    name="crosse"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Tableau;
