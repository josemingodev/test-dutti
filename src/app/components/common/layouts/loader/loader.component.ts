import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public mode: string;
  public value: number;
  public isLoading: Subject<boolean>;
  constructor(private loaderService: LoaderService) {
    this.mode = 'indeterminate';
    this.value = 50;
    this.isLoading = this.loaderService.loading;

  }

  ngOnInit() {
  }

}
