import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {DeportivasService} from './deportivas.service';
import {Model} from "./modelApi.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataDepor:Model;
  datasDepor:Model;
  list:any=[]; // employeelist: ProductoRegistrado[];
  list2:any=[];
  constructor(
    private service: DeportivasService
    // private employeeService: ProductoRegistradoService
  ) {}

  ngOnInit() {
   var i=0;
    this.service.get().subscribe(data=>{
this.service.get().forEach(datas=>{
 
  this.datasDepor=datas;
  i=this.datasDepor.data.length;
// console.log(i)
for (let index = 0; index < i-1; index++) {
  //console.log(this.datasDepor.data[index].sites[index].odds)
  this.list.push(index)

}

})
  //this.list.push(this.dataDepor.data[index].teams)
  // this.list=this.datasDepor.data[index].teams;
// console.log(this.list)

     
  //     this.dataDepor=data;

  //     console.log(this.dataDepor)
  //     console.log(this.dataDepor.data.home_team)
    })
    // x.snapshotChanges().subscribe((item) => {
    //   this.employeelist = [];
    //   item.forEach((element) => {
    //     const y = element.payload.toJSON();
    //     y["$key"] = element.key;
    //     this.employeelist.push(y as ProductoRegistrado);
    //     console.log(y);
    //   });
  }
  
  // onItemClick(emp: ProductoRegistrado) {
  //   console.log(emp);
  //   this.employeeService.selectedDespacho = Object.assign({}, emp);
  // }
}
