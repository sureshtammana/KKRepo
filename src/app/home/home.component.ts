import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../css/bootstrap.min.css','../css/style.css','../css/animation.min.css'
  ,'../../../node_modules/font-awesome/css/font-awesome.css','../css/style.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

}
