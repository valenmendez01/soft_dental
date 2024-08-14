import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
    flexGrow: 1, // Permite que este elemento ocupe el espacio disponible sin empujar
    marginTop: 5,
    paddingTop: 5,
    marginLeft: 10,
    fontWeight: "bold",
  },
  foot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 3,
  },
  abajo: {
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
    borderTop: 1,
  },
});

const PDF = () => {
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.title}>
          <Text style={styles.text}>Betiana Morante</Text>
          <Text style={styles.text}>ODONTÓLOGA</Text>
          <Text style={styles.text}>Matricula Prov.:</Text>
        </View>
        <View style={styles.subtitle}>
          <Text>Paciente:</Text>
          <Text>Sexo:</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>DNI:</Text>
          <Text style={styles.text}>Cobertura:</Text>
        </View>
        <View style={styles.rp}>
          <Text style={styles.rptext}>Rp/</Text>
        </View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Text>
        <Text style={styles.dx}>
          Diagnóstico:
        </Text>
        <View style={styles.foot}>
          <Text>Fecha:</Text>
          <Text style={[ {borderTop: 1, paddingTop: 3} ]}>-   Firma y sello   -</Text>
        </View>
        <View style={styles.abajo}>
          <Text style={styles.text}>Odontóloga</Text>
          <Text style={styles.text}>Betiana Morante</Text>
          <Text style={styles.text}>Dirección</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;




