import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post-content',
  templateUrl: './single-post-content.component.html',
  styleUrls: ['./single-post-content.component.css']
})
export class SinglePostContentComponent implements OnInit {

  @Input() text:string = "Post content";

  constructor() { }

  ngOnInit(): void {
  }

}
