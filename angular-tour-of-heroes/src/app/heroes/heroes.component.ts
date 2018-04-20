import { Component, OnInit,NgModule } from '@angular/core';
import {Hero} from "../Hero"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
hero:Hero={
  id:1,
  name:'windstorm'
};
}
