import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Card, cards } from '../../common/sidebar';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  cards: Card[] = cards;

  ngOnInit() {
  }

}
