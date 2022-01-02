import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() inputFieldPosition = 0;
  @Input() label: string = '';
  @Input() rows = 6;
  @Input() ngModel: string | null = '';
  @Input() selectedInputField: string | null = '';

  @Output() editContentEvent = new EventEmitter<any[]>();
  @Output() editSelectedInputFieldEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedInputField(value: string) {
    this.editSelectedInputFieldEvent.emit(value);
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
