import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent<T> implements OnInit {


  @Input() title!: string;
  @Input() items!: IPost[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
