import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { RequestsService } from "../requests.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class RequestListComponent implements OnInit {

  requests: any = [
    {
      "_id": "1",
      "food_type": "string",
      "quantity_required": 2,
      "food_required_date": "string",
      "transport_details": "string",
      "food_required_location": "string",
      "user_id": 1
    }
  ];

  displayedColumns: string[] = ['action','postedName', 'food_type', 'quantity', 'mobile_number','date','location'];

  constructor(private requestsService: RequestsService,
              private datePipe : DatePipe, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.requests = await this.requestsService.getRequests();
    console.log(this.requests);
    let user = JSON.parse(localStorage.getItem('user')!);
    console.log(user);
    
  }

  viewRequest(request: any) {
    let route = 'requests/detail';
    this.router.navigate([route], { queryParams: { id: request._id } });
  }

  changeDateFormat(date){
    let moment2 = moment(date).format('YYYY-MM-DD hh:mm');
    
   return moment2;
  }  
}
