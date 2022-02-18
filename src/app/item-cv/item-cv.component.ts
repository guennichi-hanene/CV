import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cv } from '../model/cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() cv: Cv | null = null;

  @Output() selectedcv = new EventEmitter<Cv>();



  constructor() { }

  ngOnInit(): void {
  }
  selectcv() {

    if (this.cv) {
      this.selectedcv.emit(this.cv);
    }



  }

}
