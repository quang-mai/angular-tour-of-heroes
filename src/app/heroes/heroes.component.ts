import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  private getHeroes(): void {
   this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroesSync();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesCompnent: Selected hero id = ${hero.id}`);
    this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
