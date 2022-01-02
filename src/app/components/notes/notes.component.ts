import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  title: string | undefined = '';
  keywords: string | undefined = '';
  notes: string | undefined = '';
  summary: string | undefined = '';
  selectedInputField: string | undefined = '';

  inputFieldPosition: number | undefined;
  value: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedInputField(selectedInputField: string): void {
    this.selectedInputField = selectedInputField;
  }

  generatePdf(option: number): void {
    let title: string = '';
    let keywords: string = '';
    let notes: string = '';
    let conclusion: string = '';

    // this.pdfGenerator.generatePDF(option, title, keywords, notes, conclusion);
  }

}
