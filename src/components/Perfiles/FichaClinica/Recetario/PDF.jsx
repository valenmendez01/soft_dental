import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
  },
  paragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function PDF() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello world</Text>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </Text>
        </View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
      </Page>
    </Document>
  );
}

export default PDF;




