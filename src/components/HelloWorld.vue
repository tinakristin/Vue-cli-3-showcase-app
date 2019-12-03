<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <button @click="exportDocx" class="btn">
      <i class="far fa-file-word"></i>
      Generate .docx file
    </button>
    <hr/>
    <adresse-test></adresse-test>

  </div>
</template>

<script>
// import AdresseTest from './AdresseTest';

import {
  Document, Paragraph, Packer, TextRun, Header, Footer,
} from 'docx';
import { saveAs } from 'file-saver';
import AdresseTest from './AdresseTest';

export default {
  name: 'HelloWorld',
  components: { AdresseTest },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    state: {
      name: 'San Luis Potosi',
    },
  }),
  methods: {
    exportDocx() {
      // Create a new Document an save it in a variable
      const doc = new Document();
      doc.addSection({
        headers: {
          default: new Header({
            children: [new Paragraph('Header text')],
          }),
        },
        footers: {
          default: new Footer({
            children: [new Paragraph('Footer text')],
          }),
        },
        children: [new Paragraph('Hello World')],
      });
      // Add paragraph in the document <- funker ikke! må legge til via section, vist under, trolig
      // doc.addParagraph(new Paragraph(`Detailed Report for ${this.state.name}`));

      // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
      // This simple example will only contain one section
      doc.addSection({
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun('Hello World'),
              new TextRun({
                text: 'Foo Bar',
                bold: true,
              }),
              new TextRun({
                text: '\tGithub is the best',
                bold: true,
              }),
            ],
          }),
        ],
      });

      // To export into a .docx file
      // const packer = new Packer();

      // Used to export the file into a .docx file
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'detailed_report.docx');
      });

      /* packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'detailed_report.docx');

        // using sweet alert for notification
        console.log({
          type: 'success',
          title: 'Document created!',
        });
      }); */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

</style>
