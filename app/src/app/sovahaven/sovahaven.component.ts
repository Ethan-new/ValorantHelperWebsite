import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import dataList from './info.json'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-sovahaven',
  templateUrl: './sovahaven.component.html',
  styleUrls: ['./sovahaven.component.css']
})



export class SovahavenComponent implements OnInit {


  public allData:{agent:string, map:string, data:[{desc:string , link:string, title:string, cleanLink:SafeResourceUrl}]}[] = dataList;


  

  constructor(public sanitizer: DomSanitizer) {  


  }  
  ngOnInit() {  
    this.allData[0].data.forEach(ele => {
      ele.cleanLink =this.sanitizer.bypassSecurityTrustResourceUrl(ele.link);
    }) 

    console.log(this.allData[0].data);

  }  

}
