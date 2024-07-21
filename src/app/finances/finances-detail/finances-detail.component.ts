import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FinancesService } from '../finances.service';

@Component({
  selector: 'app-finances-detail',
  templateUrl: './finances-detail.component.html',
  styleUrls: ['./finances-detail.component.css']
})
export class FinancesDetailComponent implements OnInit {

  finances = [
    {
      _id: "6121200b95747d1a50838de5",
      name: "string",
      email: "string",
      phone: "string",
      organization: "string",
      amount: "1"
    }
  ];
  
  id: any = this.route.snapshot.paramMap.get('id');
  finance: any;

  constructor(private route: ActivatedRoute, private router: Router, private financesService: FinancesService) { }

  async ngOnInit(): Promise<void> {
    const result: any = await this.financesService.getFinancesById(this.id);
    if(result) {
      this.finance = result;
    } else {
      this.finance = this.finances.find(t => t._id == this.id);
    }
  }

}
