import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {

  constructor(
    public dialogError: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogModel) {
  }

  close(): void {
    this.dialogError.close();
  }

}

export class ErrorDialogModel {
  imgSrc: string;
  error: string;
  textButton: string;

  constructor() {
    this.imgSrc = '';
    this.error = '';
    this.textButton = '';
  }
}
