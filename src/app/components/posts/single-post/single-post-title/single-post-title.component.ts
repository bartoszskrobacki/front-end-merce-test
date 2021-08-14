import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post-title',
  templateUrl: './single-post-title.component.html',
  styleUrls: ['./single-post-title.component.css']
})
export class SinglePostTitleComponent implements OnInit {

  @Input() text:string = "Post title";

  constructor() { }

  ngOnInit(): void {
  }

}
