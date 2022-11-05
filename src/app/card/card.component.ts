import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() loveIts: number = 0;
  @Input() created_at: Date = new Date();
  @Input() author: string = '';
  @Input() imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
