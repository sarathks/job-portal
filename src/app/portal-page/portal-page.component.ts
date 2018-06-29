import { Component, OnInit } from '@angular/core';

import {AjaxService} from '../ajax.service';

declare var $:any; // we can use $ for jQuery anywhere in this file


@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.css']
})
export class PortalPageComponent implements OnInit {

  public candidateData:any = [];

  constructor(private ajaxCall:AjaxService) { }

  ngOnInit() {

  	this.ajaxCall.getDetails()
  	.subscribe(
  		(data)=>{
        this.candidateData = Object.values(data);
        console.log(this.candidateData)
  		},
  		(error)=>{
  			console.log(error);
  		}
  		);

  }

}
