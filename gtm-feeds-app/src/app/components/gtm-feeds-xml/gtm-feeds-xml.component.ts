import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import * as xml2js from 'xml2js'
import { AnyForUntypedForms } from '@angular/forms';
import { NewsRss } from './news-rss';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gtm-feeds-xml',
  templateUrl: './gtm-feeds-xml.component.html',
  styleUrls: ['./gtm-feeds-xml.component.css']
})
export class GtmFeedsXmlComponent implements OnInit {

  //objs: any = {};
 /* xml: string = `
                  <inform lastUpdated="2022-12-18T05:18:43">
                      <NameInfo>
                          <Name type="NAICS" order="1" reported="0"  mnem="">Steve</Name>
                          <Name type="NAICS" order="2" reported="0" mnem="">Adil</Name>
                      </NameInfo>
                  </inform>
                `;*/

  RssData!: NewsRss;
  objs: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  GetRssFeedData(symbol: string) {

    const URL = 'http://www.siscomex.gov.br/exportacao/feed/';

    const requestOptions: Object = {
      observe: "body",
      responseType: "text",
    };


    this.http.get<any>(URL, requestOptions).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err: AnyForUntypedForms, result: NewsRss) => {
        this.RssData = result;
      });
    });
    console.log(this.RssData);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
    let symbol = params.params.q ?? 'AAPL';
    console.log(symbol);
    this.GetRssFeedData(symbol);
   });
  }

  /*ngOnInit(): void {
    this.GetRssFeedData();
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.xml, 'text/xml');
    const obj = this.ngxXml2jsonService.xmlToJson(xml);
    this.objs = obj
    console.log(this.objs, typeof(this.objs));
  }*/

}

export interface IRssData {}