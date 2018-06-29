import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input() profile:any;
  @Output() clickedOnProfile = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedTheProfileTab=()=>{
  	this.clickedOnProfile.emit(this.profile);
  }

}
