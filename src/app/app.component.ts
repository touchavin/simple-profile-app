import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PEAxODDS coming soon.. ⏰ touchavin';
  count = 0;

  onClick(v: number): void {
    // this.count++;
    this.count += v;
  }
}
