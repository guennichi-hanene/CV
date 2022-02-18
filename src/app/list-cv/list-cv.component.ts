import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
 @Input() cvs: Cv[] = [];
 @Output() selectedcv = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  selectcv(selectedcv: Cv) {

    
      this.selectedcv.emit(selectedcv);
}   
}
