import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DonationsService } from '../donations.service';

@Component({
  selector: 'app-donate-detail',
  templateUrl: './donate-detail.component.html',
  styleUrls: ['./donate-detail.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class DonateDetailComponent implements OnInit {

  donations = [
    {
      "food_type": "Veg",
      "quantity": "5",
      "food_available_date": "Today",
      "transport_details": "Test",
      "_id": 4
    }
  ];

  id: any = this.route.snapshot.queryParamMap.get('id');
  //id: any = this.route.snapshot.paramMap.get('id');
  donation: any;
  acceptedFood = false;

  constructor(private route: ActivatedRoute, private router: Router, private donationsService: DonationsService) { }

  async ngOnInit(): Promise<void> {
    const result: any = await this.donationsService.getDonateFoodById(this.id);

    console.log(result);
    
    if(result) {
      this.donation = result;
    } else {
      this.donation = this.donations.find(t => t._id == this.id);
    }

    if(this.donation.active == false){
      this.acceptedFood = true;
    } else {
      this.acceptedFood = false;
    }

    console.log(this.acceptedFood);

  }

  async onAcceptDonation() {
    const result: any = await this.donationsService.patchDonateFoodById(this.id, {active: false});
    if(result) {
      alert('Thank you for accepting Donatation!');
    }
    this.router.navigate(['/home'])
  }

  changeDateFormat(date){
    let moment2 = moment(date).format('YYYY-MM-DD hh:mm');
   return moment2;
  }  

}
