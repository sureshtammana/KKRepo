import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DonationsService } from '../donations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate-list',
  templateUrl: './donate-list.component.html',
  styleUrls: ['./donate-list.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class DonateListComponent implements OnInit {

  donations: any = [
    {
      "food_type": "Veg",
      "quantity": "5",
      "food_available_date": "Today",
      "transport_details": "Test",
      "_id": 4
    },
    {
      "food_type": "Non veg",
      "quantity": "10",
      "food_available_date": "Tomorrow",
      "transport_details": "Bike",
      "_id": 5
    },
    {
      "food_type": "Idli",
      "quantity": "2",
      "food_available_date": "Tomorrow",
      "transport_details": "Bus",
      "_id": 6
    }
  ];

  displayedColumns: string[] = ['action','postedName', 'food_type', 'quantity', 'mobile_number','date','transport_details'];

  constructor(private donationsService: DonationsService,private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.donations = await this.donationsService.getDonateFood();

    console.log(this.donations);
    
  }

  viewDonation(donation: any) {
    let route = 'donations/detail';
    this.router.navigate([route], { queryParams: { id: donation._id } });
  }

  changeDateFormat(date){
    let moment2 = moment(date).format('YYYY-MM-DD hh:mm');
   return moment2;
  }

}
