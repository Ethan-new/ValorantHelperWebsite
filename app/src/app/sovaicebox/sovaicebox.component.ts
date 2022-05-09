import { Component, OnInit } from '@angular/core';
import dataList from './info.json'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-sovaicebox',
  templateUrl: './sovaicebox.component.html',
  styleUrls: ['./sovaicebox.component.css']
})
export class SovaiceboxComponent implements OnInit {

  public allData:{agent:string, map:string, data:[{desc:string , link:string, title:string, cleanLink:SafeResourceUrl}]}[] = dataList;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.allData[0].data.forEach(ele => {
      ele.cleanLink =this.sanitizer.bypassSecurityTrustResourceUrl(ele.link);
    }) 

    console.log(this.allData[0].data);
  }

}
