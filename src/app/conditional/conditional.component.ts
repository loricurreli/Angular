import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

  showContent:boolean = false
  counter= 0
  logs=[]
  handleShow(){
    this.showContent=!this.showContent
    if(this.showContent===true){
      this.counter++
      this.logs.push(`Log number ${this.counter}`)
    }
  }
  getColor(){
    return this.counter>=5 ? "green" : "transparent"
  }
 
  constructor() { }
  ngOnInit(): void {
  }

}
