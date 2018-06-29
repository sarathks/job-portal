import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  public newUser : any;	
  constructor(private ajaxCall: AjaxService) { }

  ngOnInit() {
    this.newUser = {"name":"","qualification":"","skill":"","phone":""}

  }

  sendData=()=>{
    this.ajaxCall.sendData(JSON.stringify(this.newUser))
    .subscribe(
      (data)=>{
        this.newUser = {};
        this.newUser.name = "";
        alert("Data has been updated");
      },
      (error)=>{
        this.newUser = {};
        alert("Some error occured");
      }
      );
  }
}
