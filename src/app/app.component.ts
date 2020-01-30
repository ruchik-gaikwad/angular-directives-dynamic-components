import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc';
  style = {
    // "rows": "6",
    // "columns": "12"
    "display": "grid",
    // "columnns": 12,
    "grid-template-columns": "7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8% 7.8%",
    "grid-template-rows": "16.7% 16.7% 16.7% 16.7% 16.7% 16.7%",
    "gap": '0.3rem',
    "justify-content": "space-around"
    // "grid-template-rows"
  }

  ngOnInit() {
    
  }

}
