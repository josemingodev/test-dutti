import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.css']
})
export class BasicDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BasicDialogModel) {
  }

  close(): void {
    this.dialogRef.close();
  }

}

export class BasicDialogModel {
  imgSrc: string;
  info: string;
  textButton: string;
  public scrollable: boolean;

  constructor() {
    this.imgSrc = '';
    this.info = '';
    this.textButton = '';
    this.scrollable = false;
  }

}
