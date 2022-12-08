import { Injectable } from '@angular/core';
import { IcarrouselPoems } from './carrousel-poems/icarrousel-poems.metadata';
import { dataPoems } from './carrousel-poems/carrousel.mocks';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items:IcarrouselPoems[]=dataPoems;
  constructor(private route:ActivatedRoute) { }

  getData(){
    if(this.route.snapshot.queryParams['filter']=='Todos' || this.route.snapshot.queryParams['filter']==undefined){
      return [...this.items].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 16);
    }else{
      return [...this.items].filter(item=>item.category==this.route.snapshot.queryParams['filter']).sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 16);
    }
  }
}
