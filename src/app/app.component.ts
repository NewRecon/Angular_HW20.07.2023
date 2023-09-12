import { Component } from '@angular/core';
import { Box } from './box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  counter:number = 0;
  blocks: Box[] = [

  ]

  up(){
    this.counter++;
    this.blocks.push(new Box(`rgb(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`))
  }

  down(){
    this.counter--;
    this.blocks.pop();
  }

  down1(box:Box){
    this.counter--;
    this.blocks.splice(this.blocks.indexOf(box),1);
  }
}
