import * as React from 'react';

import { Box, Typography, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AnimateButton from 'components/@extended/AnimateButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from 'store/slices/patientSlice';

import { useNavigate } from 'react-router';
import { getPatientByIp, getDerniereConsultationPatient } from 'services/functions';


const VISIBLE_FIELDS = ['date', 'IP', 'Nom/prenom', 'N°TELE', 'Age', 'Date De Naissance', 'Maladie','Decision'];
const frenchFilterOptions = {
    contains: 'Contient',
    equals: 'Égal à',
    startsWith: 'Commence par',
    endsWith: 'Se termine par'
    // Add more options as needed
};

const getFilterOperators = () => ({
    stringOperators: [
        { label: frenchFilterOptions.contains, value: 'contains' },
        { label: frenchFilterOptions.equals, value: 'equals' },
        { label: frenchFilterOptions.startsWith, value: 'startsWith' },
        { label: frenchFilterOptions.endsWith, value: 'endsWith' }
    ]
    // Add more operators for other data types
});

export default function QuickFilteringGrid() {
    // Colored Row

    const patient = useSelector((state) => state.patient.patients);
    const dispatch = useDispatch();
    const navigateInfo = useNavigate();

   //consultation
  
   

    const [totalItems, setTotalItems] = useState(0);
    const [items, setItems] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [clicked, setClicked] = useState();
    const [clickedItem, setClickedItem] = useState();
    const [patientLastConsultation, setPatientLastConsultation] = useState([]);
 
     useEffect(() => {
      
      if(items){
        console.log(items);
      }
      if(totalItems){
        console.log(totalItems);
      }
      if(patient){
        setPatientLastConsultation(getDerniereConsultationPatient(items,patient["@id"]));
      }
      
      
    }, [patient,dataLoaded, items, totalItems]);

    useEffect(() => {
        dispatch(fetchPatients());

        if (patient) {
            setItems(patient['hydra:member']);
            setTotalItems(patient['hydra:totalItems']);
            setDataLoaded(true);
        }
    }, []);
    
    

    const generateData = () => {
        const data = [];
        const rowLength = totalItems;

        for (let i = 0; i < rowLength; i++) {
            const rowData = {
                id: i + 1,
                date: getConsultDate(i),
                IP: items[i].iP,
                'Nom/prenom': `${items[i].nom} ${items[i].prenom}`,
                'N°TELE': items[i].tele,
                Age: getAge(i),
                'Date De Naissance': getBirthDate(i),
                Maladie: items[i].maladie,
                //  Decision:items[i].patientLastConsultation['descision'],
              
                /* style: {
                    backgroundColor: items[i].maladie === selectedOption ? '#a3e6b2' : '#ffb2b2' // Update this line
                } */
            };
            data.push(rowData);
           
           
        }
        
        return [...data].reverse();
    };

    const getConsultDate = (i) => {
        const inputDateString = items[i].dateDeConsultation;
        const date = new Date(inputDateString);
        const outputDateString = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        return outputDateString;
    };

    const getAge = (i) => {
        const dateNaiss = items[i].dateDeNaiss;
        const date = new Date(dateNaiss);
        const now = new Date();
        if (now.getFullYear() - date.getFullYear() == 0) {
            if (now.getMonth() - date.getMonth() == 0) {
                return `${now.getDate() - date.getDate()} jours`;
            } else {
                return `${now.getMonth() - date.getMonth()} mois`;
            }
        } else {
            return `${now.getFullYear() - date.getFullYear()} an`;
        }
    };

    const getBirthDate = (i) => {
        const inputDateString = items[i].dateDeNaiss;
        const date = new Date(inputDateString);
        const outputDateString = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        return outputDateString;
    };

    const columns = React.useMemo(
        () => [
            ...VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 150,
                sortable: !(field === 'N°TELE' || field === 'Maladie' || field === 'Date' || field === 'Date De Naissance')
            })),
            {
                field: 'voirPlus',
                sortable: false,
                headerName: 'Voir Plus',
                width: 150,
                renderCell: (params) => (
                    <AnimateButton>
                        <Button
                            //href="patient"

                            type="link"
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                                if (patient) {
                                    const pat = getPatientByIp(patient['hydra:member'], params.row.IP);
                                    navigateInfo('/patientInfo', { state: pat });
                                }
                                
                            }}
                        >
                            voir Plus
                        </Button>
                    </AnimateButton>
                )
            }
        ],
        []
    );

    const data = React.useMemo(() => generateData(), [dataLoaded]);

    return (
        <>
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
                    Liste Des Patients
                </Typography>
            </Box>

            <Box sx={{ height: 800, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    disableDensitySelector
                    components={{
                        Toolbar: GridToolbar
                    }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        }
                    }}
                    // To make properties in french
                    localeText={{
                        // Root
                        noRowsLabel: 'Pas de résultats',
                        noResultsOverlayLabel: 'Aucun résultat.',

                        // Quick filter toolbar field
                        toolbarQuickFilterPlaceholder: 'Rechercher…',
                        toolbarQuickFilterLabel: 'Recherche',

                        toolbarExport: 'Exporter',
                        toolbarExportLabel: 'Exporter',
                        toolbarExportCSV: 'Télécharger en CSV',
                        toolbarExportPrint: 'Imprimer',

                        filterOperatorContains: 'contient',
                        filterOperatorEquals: 'est égal à',
                        filterOperatorStartsWith: 'commence par',
                        filterOperatorEndsWith: 'se termine par',
                        filterOperatorIs: 'est',
                        filterOperatorNot: "n'est pas",
                        filterOperatorAfter: 'postérieur',
                        filterOperatorOnOrAfter: 'égal ou postérieur',
                        filterOperatorBefore: 'antérieur',
                        filterOperatorOnOrBefore: 'égal ou antérieur',
                        filterOperatorIsEmpty: 'est vide',
                        filterOperatorIsNotEmpty: "n'est pas vide",
                        filterOperatorIsAnyOf: 'fait partie de',

                        // Column menu text
                        columnMenuLabel: 'Menu',
                        columnMenuShowColumns: 'Afficher les colonnes',
                        columnMenuManageColumns: 'Gérer les colonnes',
                        columnMenuFilter: 'Filtrer',
                        columnMenuHideColumn: 'Cacher',
                        columnMenuUnsort: 'Annuler le tri',
                        columnMenuSortAsc: 'Tri ascendant',
                        columnMenuSortDesc: 'Tri descendant',

                        // Columns panel text
                        columnsPanelTextFieldLabel: 'Chercher une colonne',
                        columnsPanelTextFieldPlaceholder: 'Titre de la colonne',
                        columnsPanelDragIconLabel: 'Réorganiser la colonne',
                        columnsPanelShowAllButton: 'Tout afficher',
                        columnsPanelHideAllButton: 'Tout cacher'
                    }}
                />
            </Box>
        </>
    );
}