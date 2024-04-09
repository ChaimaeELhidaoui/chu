import React , {useState, useEffect} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      backgroundColor:"white",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    table: { 
      display: "table", 
      width: "90%", 
        
    }, 
    tableRow: { 
      marginTop: 40,
      marginBottom: 20, 
      flexDirection: "row",
      height:"80px"
    }, 
    infoRow: {
      flexDirection: "row",
      height:"auto",
    },
    valuesRow : {
      flexDirection: "row",
      height:"auto",
    },
    tableCol: { 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1,
      textAlign:"center",
      paddingRight:20,
      paddingLeft:20
    }, 
    infoCol: {
      flex:1,
      
      paddingRight:20,
      paddingLeft:20,
      fontSize: 15
    },
    valuesCol : {
      fontSize: 13,
      width: "20%",
      borderStyle: "solid", 
      borderWidth: 1,
      paddingRight:20,
      paddingLeft:20,
    },
    lastCol: {
      display: "table", 
      width:"80%",
      
    },
    mesureCol : {
      fontSize: 13,
      width:"40%",
      borderStyle: "solid", 
      borderWidth: 1,
      paddingRight:5,
      paddingLeft:5,
    },
    sousMesureCol : {
      fontSize: 13,
      width:"20%",
      borderStyle: "solid", 
      borderWidth: 1,
      paddingRight:5,
      paddingLeft:5,
    },
    tableCell: { 
      margin: "auto", 
      textAlign:"center",
      fontSize: 10,
      fontWeight:"bold"
    },
    topTable: {
      display: "table",
      width:"90%",
      height:"200px"
    },
    midlCell: {
      width:"50px"
    },
    docTitle: {
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop: -60,
      fontSize: 13,
      fontWeight: "bold",
      textDecoration:"underline",
      
    },
    titleLine: {
      textAlign:"center",
      fontStyle:"italic",
    },
    infos: {
      display:"flex",
      flexDirection:"column",
      width:"90%",
      marginTop:5,
    },
    value : {
      fontSize: 11.5,
      marginLeft: 10,
      fontWeight:"light",
      color:"#1C1C1C",
      marginBottom: 5,
    },
    infoWithValue: {
      flexDirection: "column",
      height:"auto",
    }
    
  });
  
  // Create Document Component
  const CompteRendueDoc = ({cr, patient, observ})=> {

    const [dateDeNaiss, setDateDeNaiss] = useState("");

    useEffect(() => {
        console.log(patient);
        const date = new Date(patient["dateDeNaiss"]);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        const formattedDate = `${day}-${month}-${year}`;
        setDateDeNaiss(formattedDate);

    }, [cr, patient])
    
      return (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.topTable}>
               
                <View style={styles.tableRow}> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Rayaume du Maroc</Text> 
                    <Text style={styles.tableCell}>Ministère de la Santé</Text> 
                    <Text style={styles.tableCell}>Centre Hospitalier Mohammed VI- OUJDA</Text> 
                  </View> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.midlCell}></Text> 
                  </View> 
                  <View style={styles.tableCol}> 
                    <Text style={styles.tableCell}>Rayaume du Maroc</Text> 
                    <Text style={styles.tableCell}>Ministère de la Santé</Text> 
                    <Text style={styles.tableCell}>Centre Hospitalier Mohammed VI- OUJDA</Text>
                  </View> 
              </View> 
            </View>
            <View style={styles.docTitle}>
                    <Text style={styles.titleLine}>COMPTE-RENDU D'ECHOGRAPHIE CARDIAQUE</Text> 
                    <Text style={styles.titleLine}>SERVICE DE PEDIATRIE</Text> 
                    <Text style={styles.titleLine}>HOPITAL MERE-ENFANTS CHU MOHAMED VI OUJDA</Text>
            </View>
            <View style={[styles.infos, {marginTop:10}]}>
              <View style={styles.table}>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text>- Nom et prénom: <View><Text>{`${patient["nom"]} ${patient["prenom"]}`}</Text></View></Text>
                      
                    </View>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text> Date: <View><Text>...</Text></View></Text>
                    </View>
                    
                  </View>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text>- DN: <View><Text>{dateDeNaiss}</Text></View></Text>
                    </View>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text> Poid: <View><Text>{observ["poids"]}</Text></View></Text>
                    </View>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text> TA: <View><Text>{observ["ta"]}</Text></View></Text>
                    </View>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text> FC: <View><Text>{observ["fc"]}</Text></View></Text>
                    </View>
                    
                  </View>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text>- Provenance: <View><Text>{patient["province"]}</Text></View></Text>
                    </View>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text> service: <View><Text>...</Text></View></Text>
                    </View>
                    
                  </View>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol,{fontSize:13}]}> 
                      <Text>- Motif Examen: <View><Text>{observ["motifHospConsul"]}</Text></View></Text>
                    </View>
                    
                  </View>
                  <View style={[styles.infoRow, {marginTop:10}]}>
                    <View style={[styles.infoCol, {marginBottom:5}]}>
                      <Text>- Situs ,Alignement , Conexion : </Text>
                    </View>
                  </View>
                  <View style={styles.infoRow}>
                  <View style={[styles.infoCol, styles.value]}>
                      <Text >{cr["situsAlignementConnexion"]}</Text>
                      </View>
                  </View>

                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol, {marginBottom:5}]}>
                      <Text>- Veines et Oreillettes : </Text>
                    </View>
                  </View>
                  <View style={styles.infoRow}>
                  <View style={[styles.infoCol, styles.value]}>
                      <Text >{cr["veinesOreillettes"]}.</Text>
                      </View>
                  </View>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol, {marginBottom:5}]}>
                      <Text>- Fonction AV et Ventrivules : </Text>
                    </View>
                  </View>
                  <View style={styles.infoRow}>
                  <View style={[styles.infoCol, styles.value]}>
                      <Text >{cr["fonctionAVVentricules"]}</Text>
                      </View>
                  </View>
                  
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol, {marginBottom:5}]}>
                      <Text>- Vaisseaux : </Text>
                    </View>
                  </View>
                  <View style={styles.infoRow}>
                  <View style={[styles.infoCol, styles.value]}>
                      <Text >{cr["vaisseaux"]}</Text>
                      </View>
                  </View>
                  <View style={styles.infoRow}>
                    <View style={[styles.infoCol, {marginBottom:5}]}>
                      <Text>- Autres : </Text>
                    </View>
                  </View>
                  <View style={styles.infoRow}>
                  <View style={[styles.infoCol, styles.value]}>
                      <Text >{cr["autres"]}</Text>
                      </View>
                  </View>
                  
              </View>
            </View>
            <View style={[styles.table, {marginTop:10}]}>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>Ventricules</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>Diastole</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>Systole</Text>
                    </View>
                    <View style={styles.mesureCol}>
                      <Text>Mesure ( mm)</Text>
                    </View>
                  </View>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>VD</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["vDdiastole"]}</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["vDsystole"]}</Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>AP</Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>Aorte</Text>
                    </View>
                  </View>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>SEPTUM</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["sEPTUMdiastole"]}</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["sEPTUMsystole"]}</Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>Anneau :<View><Text>{cr["aPAnneau"]}</Text></View></Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>Anneau :<View><Text>{cr["aorteAnneau"]}</Text></View></Text>
                    </View>
                  </View>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>VG</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["vGdiastole"]}</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["vGsystole"]}</Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>TAP :<View><Text>{cr["tAP"]}</Text></View></Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>RACINE :<View><Text>{cr["racine"]}</Text></View></Text>
                    </View>
                  </View>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>Paroi postérieur</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["pPdiastole"]}</Text>
                    </View>
                    <View style={styles.valuesCol}>
                      <Text>{cr["pPsystole"]}</Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>APD :<View><Text>{cr["aPD"]}</Text></View></Text>
                    </View>
                    <View style={styles.sousMesureCol}>
                      <Text>AOASC :<View><Text>{cr["aOASC"]}</Text></View></Text>
                    </View>
                  </View>
                  <View style={styles.valuesRow}>
                    <View style={styles.valuesCol}>
                      <Text>Fonction du VG</Text>
                    </View>
                    <View style={[styles.lastCol]}>
                    <View style={styles.valuesRow}>
                      <View style={[styles.valuesCol, {width:"25%"}]}>
                        <Text>TRI :<View><Text>{cr["tRI"]}</Text></View></Text>
                      </View>
                      <View style={[styles.valuesCol, {width:"25%"}]}>
                        <Text>FE :<View><Text>{cr["fE"]}</Text></View></Text>
                      </View>
                      <View style={[styles.sousMesureCol, {width:"25%"}]}>
                        <Text>APG :<View><Text>{cr["aPG"]}</Text></View></Text>
                      </View>
                      <View style={[styles.sousMesureCol, {width:"25%"}]}>
                        <Text>CROSSE :<View><Text>{cr["crosse"]}</Text></View></Text>
                      </View>
                    </View>
                    <View style={styles.valuesRow}>
                      <View style={[styles.valuesCol, {width:"25%"}]}>
                        <Text>E/A :<View><Text>{cr["eA"]}</Text></View></Text>
                      </View>
                      <View style={[styles.valuesCol, {width:"25%"}]}>
                        <Text>FR :<View><Text>{cr["fR"]}</Text></View></Text>
                      </View>
                      <View style={[styles.sousMesureCol, {width:"25%"}]}>
                        
                      </View>
                      <View style={[styles.sousMesureCol, {width:"25%"}]}>
                        
                      </View>
                    </View>
                    </View>
                    
                  </View>

            </View>
            <View style={[styles.table, {marginTop:10}]}>
                <View style={[styles.infoRow, {fontSize:20, fontWeight:"bold", textDecoration:"underline", marginTop:20,marginBottom:5, color:"black"}]}>
                  <Text>CONCLUSION :</Text>
                </View>
                <View style={[styles.infoRow, styles.value]}>
                  <Text>{cr["conclusion"]}</Text>
                </View>
            </View>
          </Page>
        </Document>
      );
    }
  export default CompteRendueDoc;
