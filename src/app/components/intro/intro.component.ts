import {Component, OnInit} from '@angular/core';
import {PdfGeneratorService} from '../../shared/services/pdf-generator.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  title: string = '';
  keywords: string = '';
  notes: string = '';
  summary: string = '';

  constructor(private translate: TranslateService, private pdfGenerator: PdfGeneratorService) {
    translate.get('previewPDF.title').subscribe(title => this.title = title);
    translate.get('previewPDF.keywords').subscribe(keywords => this.keywords = keywords);
    translate.get('previewPDF.notes').subscribe(notes => this.notes = notes);
    translate.get('previewPDF.summary').subscribe(summary => this.summary = summary);
  }

  ngOnInit(): void {
  }

  scrollToElement(notes: any): void {
    notes.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  }

  generatePreviewPdf(option: number): void {
    this.pdfGenerator.generatePDF(option, this.title, this.keywords, this.notes, this.summary);
  }
}
