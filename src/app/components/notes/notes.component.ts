import {Component, OnInit} from '@angular/core';
import {PdfGeneratorService} from '../../shared/services/pdf-generator.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  title: string = '';
  keywords: string = '';
  notes: string = '';
  summary: string = '';
  selectedInputField: string = '';
  value: string | undefined;

  constructor(private pdfGenerator: PdfGeneratorService) {
  }

  ngOnInit(): void {
  }

  setSelectedInputField(selectedInputField: string): void {
    this.selectedInputField = selectedInputField;
  }

  editContent(inputFieldOptions: any[]): void {
    switch (inputFieldOptions[0]) {
      case 1: {
        this.title = inputFieldOptions[1];
        break;
      }
      case 2: {
        this.keywords = inputFieldOptions[1];
        break;
      }
      case 3: {
        this.notes = inputFieldOptions[1];
        break;
      }
      case 4: {
        this.summary = inputFieldOptions[1];
        break;
      }
      default: {
        break;
      }
    }
  }

  generatePdf(option: number): void {
    this.pdfGenerator.generatePDF(option, this.title, this.keywords, this.notes, this.summary);
  }

}
