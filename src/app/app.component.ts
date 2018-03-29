import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  title = 'Mult-Search';
  total = 999;
  data: Observable<Array<any>>;

  constructor(private service: SearchService) {
    this.data = service.getResult();
    console.log("AppComponent.data:" + this.data);
  }
 }
