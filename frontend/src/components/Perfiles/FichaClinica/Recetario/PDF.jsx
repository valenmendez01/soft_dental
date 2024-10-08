import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: 1,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginTop: 5,
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 3,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    marginBottom: 1,
    marginTop: 1.5,
  },
  rp: {
    fontSize: 13,
    borderTop: 1,
    marginTop: 5,
    paddingTop: 5,
  },
  rptext: {
    marginTop: 5,
    paddingTop: 5,
    fontWeight: "ultrabold",
  },
  paragraph: {
    fontSize: 10,
    textAlign: "justify",
    lineHeight: 1.5,
    marginTop: 5,
    paddingTop: 10,
    marginLeft: 10,
  },
  dx: {
    fontSize: 10,
    textAlign: "justify",
    flexGrow: 1,
    marginTop: 5,
    paddingTop: 5,
    marginLeft: 10,
    fontWeight: "bold",
  },
  foot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 3,
  },
  signatureContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signatureLine: {
    width: 100,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  signatureText: {
    marginTop: 5,
  },
  signatureImage: {
    width: 100,
    height: 50,
    marginBottom: 5,
  },
  abajo: {
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
    borderTop: 1,
  },
});

const PDF = ({ formData }) => {

  const { id } = useParams();
  const [data, setData] = useState({});

  // Cargar los datos iniciales
  useEffect(() => {
    axios.get(`http://localhost:3001/pacientes/${id}/ficha/recetario`)
      .then(res => {
        setData(res.data);
        console.log("Datos cargados:", res.data);
      })
      .catch(err => console.log("Error fetching data:", err));
  }, [id]);

  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.title}>
          <View style={{ alignItems: "flex-start" }}>
            <Image 
                style={styles.signatureImage} 
                src={`http://localhost:3001/uploads/logo/${data.logo}`}
                alt="Logo"
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>{data.nombre || "Nombre del Odontólogo"}</Text>
            <Text style={styles.text}>ODONTÓLOGA</Text>
            <Text style={styles.text}>Matricula Prov.: {data.matricula || "N/A"}</Text>
          </View>
        </View>
        <View style={styles.subtitle}>
          <Text>Paciente: {data.paciente || "N/A"}</Text>
          <Text>Sexo: {data.sexo || "N/A"}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>DNI: {data.dni || "N/A"}</Text>
          <Text style={styles.text}>Cobertura: {data.cobertura || "N/A"}</Text>
        </View>
        <View style={styles.rp}>
          <Text style={styles.rptext}>Rp/</Text>
        </View>
        <Text style={styles.paragraph}>
          {formData.prescripcion || "N/A"}
        </Text>
        <Text style={styles.paragraph}>
          Diagnóstico:
        </Text>
        <Text style={styles.dx}>
        {formData.diagnostico || "N/A"}
        </Text>
        <View style={styles.foot}>
          <Text>Fecha: {formData.fecha ? formData.fecha.toString() : "No seleccionada"}</Text>
          <View style={styles.signatureContainer}>
            <Image 
              style={styles.signatureImage} 
              src={`http://localhost:3001/uploads/firma/${data.firma}`}
              alt="Firma"
            />
            <View style={styles.signatureLine} />
            <Text style={styles.signatureText}>Firma y sello</Text>
          </View>
        </View>
        <View style={styles.abajo}>
          <Text style={styles.text}>Odontóloga</Text>
          <Text style={styles.text}>{data.nombre || "N/A"}</Text>
          <Text style={styles.text}>{data.direccion || "N/A"}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;

