export interface PdfTemplate {
  pageSize: string;
  pageOrientation: string;
  pageMargins: number[];
  info: {};
  content: any[];
  styles: {};
}

export class CornellNote {

  public generatePdf(
    title: string,
    keywords: string,
    notes: string,
    summary: string,
    language: string,
    sectionTitles: string[]): PdfTemplate {

    const keywordsHeader = sectionTitles[0];
    const notesHeader = sectionTitles[1];
    const summaryHeader = sectionTitles[2];
    let documentTitle = 'conotes' + title;

    if (title === '' || title === null) {
      documentTitle = 'conotes';
    }

    const pageSize = 'A4';
    const pageOrientation = 'portrait';
    const pageMargins = [50, 50, 50, 50];
    const info = {
      title: documentTitle,
      author: 'conotes.io',
      creator: 'conotes.io',
      producer: 'conotes.io'
    };
    const content = [{
      style: 'tableExample',
      table: {
        widths: ['495'],
        body: [
          [{text: title, style: 'tableHeader'}]
        ]
      },
      layout: 'noBorders'
    },
      {
        style: 'tableExample',
        table: {
          widths: [150, 10, 320],
          heights: ['auto', 'auto', 'auto'],
          headerRows: 1,
          keepWithHeaderRows: 1,
          body: [
            [{text: keywordsHeader, style: 'tableHeader'}, {text: '', style: 'tableHeader'}, {
              text: notesHeader,
              style: 'tableHeader'
            }],
            [keywords, '', notes]
          ]
        },
        layout: 'noBorders'
      },
      {
        style: 'tableExample',
        table: {
          widths: ['495'],
          heights: ['auto', 'auto'],
          headerRows: 1,
          keepWithHeaderRows: 1,
          body: [
            [{text: summaryHeader, style: 'tableHeader'}],
            [summary]
          ]
        },
        layout: 'noBorders'
      }];
    const styles = {
      header: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 16,
        color: 'black'
      }
    };

    const pdf: PdfTemplate = {pageSize, pageOrientation, pageMargins, info, content, styles};
    return pdf;
  }
}

