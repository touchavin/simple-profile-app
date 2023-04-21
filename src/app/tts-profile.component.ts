import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
selector: 'tts-profile',
template:`
<h1>{{name}} {{emoji}}</h1>
<button (click)="count()">+</button>
`
})

export class ProfileComponent {

@Input()
emoji = "⏰"
name = 'tts'


@Output()
counter = new EventEmitter<number>();

count():void{
  this.counter.emit(1);
  console.log('click count')
}

}



