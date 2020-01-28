import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pscasestudy';
  public characters: any = {};
  public sort = false;
  public filterData: any = {};
  constructor(private api: ApiService) { }

  getAllCharacters() {
    this.api.getCharacters().subscribe(response => {
      console.log(response);
      this.characters = response;
    })
  }

  sortCharacters(value: string) {
    if (value) this.sort = JSON.parse(value);
  }

  ngOnInit() {
    this.getAllCharacters();
  }
}
