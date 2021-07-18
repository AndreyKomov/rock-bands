import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rock-bands';
  band$!: Observable<any>;

  constructor (private contentfulServ: ContentfulService) {}

  ngOnInit() {
    this.contentfulServ.logContent('6UIoRcXAJgGAU76Kk33sWw');
    this.band$ = this.contentfulServ.getContent('7HLuFz17zrbOujJ0cfzTeZ')
  }
}
