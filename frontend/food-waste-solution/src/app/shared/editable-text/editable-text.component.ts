import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {
  @Input() canActivate = true; // Whether or not edit mode can be toggled on
  @Input() canDeactivate = true; // Whether or not edit mode can be toggled off
  @Input() editing = true;
  @Input() placeholder: string;
  @Input() controlName: string;
  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control.get(this.controlName) as FormControl;
  }

  ngOnInit() {
  }

  onTextClick() {
    if (this.canActivate) {
      this.editing = true;
    }
  }

  onInputBlur() {
    if (this.canDeactivate) {
      this.editing = false;
    }
  }
}
