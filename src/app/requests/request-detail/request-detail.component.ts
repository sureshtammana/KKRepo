import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { RequestsService } from "../requests.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class RequestDetailComponent implements OnInit {

  requests = [
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
  user: any;
  id: any = this.route.snapshot.queryParamMap.get('id');
  request: any;

  rejectedFood = false;
  hideButtons = false;
  acceptedFood = false;
  acceptedText = '';

  constructor(private route: ActivatedRoute, private router: Router, private requestsService: RequestsService) { }

  async ngOnInit(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('user')!);



    const result: any = await this.requestsService.getRequestById(this.id);

    console.log(result);
    this.request = result;


    let { rejectedIds, acceptedId } = result;
    this.rejectedFood = (rejectedIds.indexOf(this.user['_id']) > -1);


    if (this.rejectedFood) {
      this.hideButtons = this.rejectedFood
    } else if (acceptedId && acceptedId != "") {
      this.hideButtons = true;
      this.acceptedFood = true;


      if (acceptedId == this.user['_id']) {
        this.acceptedText = 'Request is Accepted By You'
      } else {
        this.acceptedText = 'Food is accepted by some other user'
      }


    } else {
      console.log("AS");

      if(this.user?.role == "NGO"){
        this.acceptedFood = true;
        this.acceptedText = "Food Yet to accept by some restaurant"
      }
    
      this.hideButtons = false
    }


  }

  async onDonateFood() {
    const result: any = await this.requestsService.patchRequestById(this.id, { active: false });
    if (result) {
      alert('Accepted!');
    }
    this.router.navigate(['/home'])
  }


  async onRejectRequest() {

    let data = {
      "rejectId": this.user['_id']
    }
    const result: any = await this.requestsService.rejectRequest(this.id, data);
    if (result) {
      alert('Rejected Successfully!');
    }
    this.router.navigate(['/home'])
  }

  async onAcceptRequest() {
	
	console.log("Accept");
	
    let data = {
      "acceptedId": this.user['_id']
    }
    const result: any = await this.requestsService.acceptRequest(this.id, data);
    if (result) {
      alert('Food Request is accepted!');
    }
    this.router.navigate(['/home'])
  }

  changeDateFormat(date){
    let moment2 = moment(date).format('YYYY-MM-DD hh:mm');
   return moment2;
  }

}
