import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6Lesson';
  lessonInfoLink = "https://github.com/firathamarat/Angular6";




  deneme(){
    return "bu bir deneme mesajıdır!";
  }
}
