import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-overlay-paging',
  templateUrl: './overlay-paging.component.html',
  styleUrls: ['./overlay-paging.component.css']
})
export class OverlayPagingComponent implements OnInit {

  constructor(private router:Router) { }

  currentPost: number = 1;
  numberOfPosts: number = 10;

  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
