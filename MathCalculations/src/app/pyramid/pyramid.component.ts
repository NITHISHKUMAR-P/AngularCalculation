import { Component } from "@angular/core";

@Component({
    selector:"Pyramid-Volume",
    templateUrl:"./pyramid.component.html"
})
export class PyramidComponent{
    height:number;
    length:number;
    width:number;
    volume: number;
    constructor(){
        this.height = 5
        this.length = 10
        this.width = 15
        this.volume = ((this.height * this.length * this.width)/3)
    }
    onCalculateVolume(){
        this.volume = (this.height * this.length * this.width)/3
    }
}