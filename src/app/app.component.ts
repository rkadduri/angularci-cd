import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'angular-class';
 bool:boolean = false;



   //onkeyup: any;


//userName:string | undefined;

//textValue: string | undefined;


// string interpolution data binding
/*
buttonClick(){
console.log('button click Event worked')

  }
  */



// Leanth method


//  onKeyup($event: any) {
// if($event.keyCode == 13) {
// console.log('Enter Key is preessed ');
// }
//   }

// Easy methods
/*
onKeyup() {
  console.log('Enter key is Pressed')
}*/


// old opproach
/*
onKeyup($event:any) {
  console.log($event.target.value)
}
*/



// Clean approach
/*
onKeyup(username: any) {
  console.log(username)
}
*/

// Two way data binding goes here
/*
onKeyup() {
  console.log(this.userName)
}
*/
/*
onKeyup() {
  console.log(this.textValue)
}
*/

/*

My assignment 1

modeltitle: string;
postdes: string;
urlpost:any;
linkurl:any;
value: string = 'Joe';
imageToShow: any;
*/

/*
PostTitle:string;
PostDetails:string;
imageURL:string;
postURL:string;
addBackground:boolean;
*/
}
