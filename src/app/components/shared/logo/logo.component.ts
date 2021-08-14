import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {


  @Input() imgSrc: string = "../../assets/icons/post_icon_01.png"; 
  @Input() background: string = "black";

  constructor() { }

  ngOnInit(): void {
  }

}
