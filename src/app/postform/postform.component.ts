import { Component } from '@angular/core';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent {


PostTitle:string;
PostDetails:string;
imageURL:string;
postURL:string;
addBackground:boolean;

}
