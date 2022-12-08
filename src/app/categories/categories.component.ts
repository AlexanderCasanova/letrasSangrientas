import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { IcarrouselPoems } from './../carrousel-poems/icarrousel-poems.metadata';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  typePoem:string;
  items:IcarrouselPoems[]=[];
  constructor(private router:Router, private dataService:DataService) {
    this.typePoem="Todos";
   }

  ngOnInit(): void {
    this.items=this.dataService.getData();
  }

  mostrarValor(e:any){
    this.typePoem=e.target.value;
    this.router.navigate(["/categories"],{queryParams:{filter:this.typePoem}}).then((r)=>{
      this.items=this.dataService.getData();
    });
  }
}
