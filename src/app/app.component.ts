import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  msgm_Keyword = '';

  pressend(events : KeyboardEvent) {
    if (events.keyCode == 27) this.msgm_Keyword="";
    console.log(events);
  }

  showSearchWord(tWord){
    this.msgm_Keyword = tWord.value;
  }

}
