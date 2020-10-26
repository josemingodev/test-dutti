import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public mode: string;
  public value: number;
  public isLoading: Subject<boolean>;
  constructor() {
    this.mode = 'indeterminate';
    this.value = 50;
  }

  ngOnInit() {
  }

}
