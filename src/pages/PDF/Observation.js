import Recat , {useEffect, useState}from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        backgroundColor:"white",
    },
    partie: {

        display:"flex",
        flexDirection:"column",
        width:"90%",
    },
    tableRow : {
        flexDirection: "row",
        height:"auto",
        marginBottom:15,
    },
    tableCol : {
        flex:1,
        paddingRight:5,
        paddingLeft:5,
        fontSize:12
    },
    docTitle: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop: 30,
        fontSize: 13,
        fontWeight: "bold",
        textDecoration:"underline",
        
    },
    titleLine: {
        textAlign:"center",
        fontStyle:"italic",
      },

})

const ObservationDoc = ({observ, patientNaissDate})=> {
    
    const [dateDeNaiss, setDateDeNaiss] = useState("");

    useEffect(() => {

        console.log(observ);
        const date = new Date(patientNaissDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        const formattedDate = `${day}-${month}-${year}`;
        setDateDeNaiss(formattedDate);

    }, [observ, patientNaissDate])


    
      return (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.docTitle}>
                    <Text style={styles.titleLine}>Observation</Text> 
                    <Text style={styles.titleLine}>SERVICE DE PEDIATRIE</Text> 
                    <Text style={styles.titleLine}>HOPITAL MERE-ENFANTS CHU MOHAMED VI OUJDA</Text>
            </View>
            <View style={[styles.partie, {marginTop:30}]}>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, { color:"#1C1C1C"}]}>
                        <Text>- Date de naissance :<View><Text> {dateDeNaiss}</Text></View></Text>
                    </View>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>- Adresse  :<View><Text> {observ["adresse"]}</Text></View></Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, { color:"#1C1C1C"}]}>
                        <Text>- Age de la mère : {observ["agemere"]} <View style={{marginLeft:10, marginRight:10}}><Text> G :...</Text></View><View style={{marginLeft:10, marginRight:10}}><Text> P :{observ["parite"]}</Text></View></Text>
                    </View>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>Age du père  :<View><Text> {observ["agepere"]}</Text></View></Text>
                    </View>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>Nombre de fratrie  :<View><Text> {observ["nombreFratrie"]}</Text></View></Text>
                    </View>
                </View>

            </View>
            <View style={[styles.partie, {marginTop:10}]}>
                <View style={[styles.tableRow, {fontWeight:"bold", color:"black", fontWeight:20}]}>
                    <Text>II / ANTECEDANTS :</Text>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                     <Text>-Grossesse :<View><Text> {observ["grossesseS"]}</Text></View></Text> 
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Sérologie  faites :<View><Text> {observ["serologie"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Déroulement :<View><Text> {observ["deroulement"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Age gestationnel :<View><Text> {observ["agegestationnel"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Accouchement  :<View><Text> {observ["accouchement"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-PN :<View><Text> {observ["pN"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Allaitement  :<View><Text> {observ["allaitement"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Développement psychomoteur  :<View><Text> {observ["developpementpsychomoteur"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Infection respiratoires à répétition  :<View><Text> {observ["irr"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Chirurgicaux   :<View><Text> {observ["chirurgicaux"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-consanguinité    :<View><Text> {observ["consanguinite"]}</Text></View></Text>
                    </View>
                    
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Degré :<View><Text> {observ["optionConsanguinite"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Cardiopathie dans la famille    :<View><Text> {observ["cardfamille"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-ATCD maternels   :<View><Text> {observ["atcdmaternels"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Prise de médicament:<View><Text> {observ["pmedic"]}</Text></View></Text>
                    </View>
                    
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>autres <View><Text> {observ["optionMedicament"]}</Text></View></Text>
                    </View>
                </View>
            </View>
            <View style={[styles.partie, {marginTop:10}]}>
                <View style={[styles.tableRow, {fontWeight:"bold", color:"black", fontWeight:20}]}>
                    <Text>III / MOTIF D’HOSPITALISATION/CONSULTATION :</Text>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>{observ["motifHospConsul"]}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.partie, {marginTop:10}]}>
                <View style={[styles.tableRow, {fontWeight:"bold", color:"black", fontWeight:20}]}>
                    <Text>IV / HISTOIRE DE LA MALADIE :</Text>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-âge d’apparition des symptômes  :<View><Text> {observ["ageAppSym"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Dyspnée  :<View><Text> {observ["dyspnee"]}</Text></View></Text>
                    </View>
                </View>
            </View>

          </Page>
          <Page size="A4" style={styles.page}>
            <View style={[styles.partie, {marginTop:30}]}>
            
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Sueurs a l’effort :<View><Text> {observ["sueursALeffort"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-cyanose :<View><Text> {observ["cyanose"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Malaise :<View><Text> {observ["malaise"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Difficulté alimentaire :<View><Text> {observ["diffalimentaire"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Stagnation pondérale  :<View><Text> {observ["stagnationponderale"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Syncope :<View><Text> {observ["syncope"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Palpitation  :<View><Text> {observ["palpitation"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Signes respiratoires   :<View><Text> {observ["signesrespiratoires"]}</Text></View></Text>
                    </View>
                </View>
                
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>AUTRES  :<View><Text> {observ["autres"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.partie, {marginTop:10}]}>
                    <View style={[styles.tableRow, {fontWeight:"bold", color:"black", fontWeight:20}]}>
                        <Text>EXAMEN CLINIQUE :</Text>
                    </View>
                    
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text><View style={{fontWeight:"bold", fontSize:30}}><Text>.</Text></View>Général  :</Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Poids   :<View><Text> {observ["poids"]}</Text></View></Text>
                        </View>
                        
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Taille   :<View><Text> {observ["taille"]}</Text></View></Text>
                        </View>
                       
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-PC   :<View><Text> {observ["pc"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Température    :</Text>
                        </View>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-TA   :<View><Text> {observ["temperature"]}</Text></View></Text>
                        </View>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-FC   :<View><Text> {observ["ta"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-FR   :<View><Text> {observ["fr"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-SAO2 : à l’aire ambiante  :<View><Text> {observ["alaireambiante"]}</Text></View></Text>
                        </View>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-sousO2  :<View><Text> {observ["souso2"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Dysmorphie   :<View><Text> {observ["dysmorphie"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text><View><Text> {observ["optionDysmorphie"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text><View style={{fontWeight:"bold", fontSize:30}}><Text>.</Text></View>Examen cardiovasculaire  :</Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Signes d’insuffisance cardiaque   :<View><Text> {observ["sInsufCard"].join(', ')}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Pouls périphériques   :<View><Text> {observ["poulsPeripheriquePercues"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Souffle   :<View><Text> {observ["souffle"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Eclat de B2   :<View><Text> {observ["eclatB2"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Bruit de galop   :<View><Text> {observ["optionBruit"]}</Text></View></Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow]}>
                        <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                            <Text>-Hippocratisme digital   :<View><Text> {observ["hippocratismeDigital"]}</Text></View></Text>
                        </View>
                    </View>

                </View>
                
            </View>
            

          </Page>
          <Page size="A4" style={styles.page}>
            <View style={[styles.partie, {marginTop:30}]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Déformation thoracique   :<View><Text> {observ["deformationThoracique"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text><View style={{fontWeight:"bold", fontSize:30}}><Text>.</Text></View>LE reste de l’examen clinique  :<View><Text> {observ["resteexamenclinique"]}</Text></View></Text>
                    </View>
                </View>
            </View>
            <View style={[styles.partie, {marginTop:10, marginBottom:40}]}>
                <View style={[styles.tableRow, {fontWeight:"bold", color:"black", fontWeight:20}]}>
                    <Text>VI / EXAMEN COMPLEMENTAIRES :</Text>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>ECG   :<View><Text> {observ["eCG"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>Radio thoracique   :<View><Text> {observ["radioThoracique"]}</Text></View></Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>-Echographie cardiaque   :<View><Text> {observ["echographieCardiaque"]}</Text></View></Text>
                    </View>
                </View>
            </View>
            <View style={[styles.partie, {marginTop:10}]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>CAT   :</Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, {color:"#1C1C1C"}]}>
                        <Text>{observ["cAT"]}</Text>
                    </View>
                </View>
            </View>
        </Page>
          </Document>
      )
    
}

export default ObservationDoc;