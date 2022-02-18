import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedcv:Cv[] = [];
 
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'Teacher', 'rotating_card_profile2.png', '1234', 39),
      new Cv(2, 'guennichi', 'hanene', 'Teacher', 'rotating_card_profile.png', '12345', 20),
      new Cv(2, 'daly', 'amira', 'Ingénieur', 'rotating_card_profile3.png', '123456', 22),
    ];

   
  }
selectcv(cv: Cv[]){
 this.selectedcv = cv;
}
}
