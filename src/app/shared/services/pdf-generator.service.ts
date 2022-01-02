import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {CornellNote, PdfTemplate} from '../models/cornell-note';
import {TranslateService} from '@ngx-translate/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  keywordsHeader!: string;
  notesHeader!: string;
  summaryHeader!: string;

  constructor(private translate: TranslateService) {
    translate.stream('form.keywords').subscribe((keywordsHeader) => this.keywordsHeader = keywordsHeader);
    translate.stream('form.notes').subscribe((notesHeader) => this.notesHeader = notesHeader);
    translate.stream('form.summary').subscribe((summaryHeader) => this.summaryHeader = summaryHeader);
  }

  private datePipe = new DatePipe('en-US');

  generatePDF(option: number, title: string, keywords: string, notes: string, summary: string): void {
    const cornellNote = new CornellNote();
    let documentDefinition: PdfTemplate;
    const currentLanguage = this.translate.currentLang;

    const sectionTitles = [];
    sectionTitles.push(this.keywordsHeader);
    sectionTitles.push(this.notesHeader);
    sectionTitles.push(this.summaryHeader);

    documentDefinition = cornellNote.generatePdf(title, keywords, notes, summary, currentLanguage, sectionTitles);
    const dateString = this.datePipe.transform(new Date(), 'yyyyMMdd');

    switch (option) {
      case 1: {
        let conotesBrandingString = '-conotes-';
        if (title === '' || title === null) {
          conotesBrandingString = '-conotes';
        }
        // @ts-ignore
        pdfMake.createPdf(documentDefinition).download(dateString + conotesBrandingString + title);
        break;
      }
      case 2: {
        // @ts-ignore
        pdfMake.createPdf(documentDefinition).open();
        break;
      }
      default: {
        // @ts-ignore
        pdfMake.createPdf(documentDefinition).open();
        break;
      }
    }
  }
}
