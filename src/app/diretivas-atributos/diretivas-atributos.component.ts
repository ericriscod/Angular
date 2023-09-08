import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit{

  protected isActive:boolean = false;
  protected display:string="inline";
  public nome:string ="";
  public lista:Array<{nome:string}> = []

  ngOnInit(): void {
    setInterval(()=>{
      this.isActive?this.isActive=false:this.isActive=true;
      this.display == "inline"?this.display="block":this.display="inline";
    },2000)
  }
  public enviar(){
    if(this.nome !="")this.lista.push({nome:this.nome});
    
    this.nome=""
  }

}
