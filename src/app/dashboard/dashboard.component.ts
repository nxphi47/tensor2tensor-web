import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    {title: 'Translate', cols: 2, rows: 1},
    // { title: 'Card 2', cols: 1, rows: 1 },
    // { title: 'Card 3', cols: 1, rows: 2 },
    // { title: 'Card 4', cols: 1, rows: 1 }
  ];

}
