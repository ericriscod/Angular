import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  protected condition: boolean = true;
  protected conditionClick: boolean = true;
  protected list:Array<{nome:string,idade:number}> = [
    {nome: "Ericris", idade:23},
    {nome:"Luana", idade:22},
    {nome:"Bryan", idade:2},
  ];
  public nome:string="ericris";

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  protected onClick():void{
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick= true;
    }
  }

  protected onClickAddList():void{
    this.list.push({nome:"Dayvid", idade: 0.2})
  }

  protected onClickEventList(event:number){
    this.list.splice(event,1);
  }
}
