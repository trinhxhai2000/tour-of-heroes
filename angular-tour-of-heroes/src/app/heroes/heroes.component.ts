import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service"
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]  = [];
  constructor(
    private heroServide: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  //retrive data from service
  getHeroes(): void{
    //The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    this.heroServide.getHeroes().subscribe( heroes => this.heroes = heroes );
  }
}
