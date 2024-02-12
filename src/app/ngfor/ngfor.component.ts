import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {

  postArray: Array<string> =['post 1','post 2','post 3','post 4', 'post 5'];

}
