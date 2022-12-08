import { Component, OnInit, Input } from '@angular/core';
import { IcarrouselPoems } from './icarrousel-poems.metadata';

@Component({
  selector: 'app-carrousel-poems',
  templateUrl: './carrousel-poems.component.html',
  styleUrls: ['./carrousel-poems.component.scss']
})
export class CarrouselPoemsComponent implements OnInit {
  height=100;
  @Input() items:IcarrouselPoems[]=[];
  public finalHeight:string|number=0;
  currentPosition=0;
  lenItems=this.items.length;
  constructor() { 
    this.finalHeight=`${this.height}%`;
  }

  ngOnInit(): void {
    this.items.map((i,index)=>{
      i.marginLeft=0;
    })
  }
  ngOnChanges(){
    this.items.map((i,index)=>{
      i.marginLeft=0;
    })
    this.currentPosition=0
  }
  setNext(){
    let finalPercentage=0;
    let nextPosition=this.currentPosition + 1;
    if(nextPosition<=this.items.length-1){
      finalPercentage=-100*nextPosition;
    }else{
      nextPosition=0;
    }
    
    let item=this.items.find(i=>i.id===this.items[0]["id"]);
    if(item!=undefined){
      item.marginLeft=finalPercentage;
    }
    this.currentPosition=nextPosition;
  }

  setBack(){
    let finalPercentage=0;
    let backPosition=this.currentPosition - 1;
    if(backPosition>=0){
      finalPercentage=-100*backPosition;
    }else{
      backPosition=this.items.length-1;
      finalPercentage=-100*backPosition;
    }
    let item=this.items.find(i=>i.id===this.items[0]["id"]);
    if(item!=undefined){
      item.marginLeft=finalPercentage
    }
    this.currentPosition=backPosition;
  }
}
