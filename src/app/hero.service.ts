import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'app/hero';
import { MessageService } from 'app/message.service';
import { HEROES } from 'app/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
