import { log } from 'util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "msgm";
  isHighlight = true;

  constructor() { }

  ngOnInit() {

  }

  switchHighlight(){
    this.isHighlight = !this.isHighlight;
  }

  changeTitle(evt: MouseEvent) {
    this.title == "msgm.guru" ? this.title = "msgm" : this.title = "msgm.guru";
    console.log(evt)
  }

}
