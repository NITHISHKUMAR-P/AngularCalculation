import { Component } from "@angular/core";

@Component({
    selector:"Triangle-Area",
    templateUrl:"./triangle.component.html"
})
export class TriangleComponent{
    base: number;
    height: number;
    area: number;
    constructor(){
        this.base = 10
        this.height = 10
        this.area = (this.base*this.height)/2
    }
    onCalculateArea(){
        this.area = (this.base*this.height)/2
    }
}
