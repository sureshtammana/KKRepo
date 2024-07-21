import { Component, NgZone, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';

import { API_URL } from '../../app.constants';
import { RequestsService } from '../requests.service';
import { DonationsService } from '../../donations/donations.service'

@Component({
  selector: 'app-request-food',
  templateUrl: './request-food.component.html',
  styleUrls: ['./request-food.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class RequestFoodComponent implements OnInit {

  public imageSrc: any;
  public thumbSize: number = 80;
  public events: { eventTitle: string; eventData: any }[] = [];
  private counter: number = 0;
  private session: any;
  private id: string;
  private loadedImage: string;
  public imageLoaded: boolean = false;
  user:any

  public imagePickerConf: ImagePickerConf = {
    borderRadius: "4px",
    language: "en",
    width: "320px",
    height: "240px",
  };

  public requestFoodForm: FormGroup;

  constructor(private router: Router,private donationsService:DonationsService,  private fb: FormBuilder, private requestsService: RequestsService, private _ngZone: NgZone) 
  {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.id = "";
	this.loadedImage = "";
	this.imageLoaded = false;
    this.requestFoodForm = this.fb.group({
      food_type: ["", [Validators.required]],
      quantity_required: ["", [Validators.required]],
      food_required_date: ["", [Validators.required]],
      transport_details: ["", [Validators.required]],
      food_required_location: ["", [Validators.required]],
      food_image: [""],
      user_id: [""],
      active: true
    });

  }

  ngOnInit(): void {
    this.createRequestFoodForm();
  }

  private createRequestFoodForm() {
    this.user = JSON.parse(localStorage.getItem('user')!);
	this.loadedImage = "";
	this.imageLoaded = false;
    this.requestFoodForm = this.fb.group({
      food_type: ["", [Validators.required]],
      quantity_required: ["", [Validators.required]],
      food_required_date: ["", [Validators.required]],
      transport_details: ["", [Validators.required]],
      food_required_location: ["", [Validators.required]],
      food_image: [""],
      user_id: [""],
      active: true
    });
  }

  async onRequestFood() {
	
	if (this.imageLoaded) {
	
		let data = {
		  image : JSON.stringify({
			image: this.loadedImage,
		  })
		}

		//console.log(data);
		
		let resp:any =  await this.donationsService.uploadImage(data);
		console.log(resp);

		let {imagePath} = resp;

		this.requestFoodForm.patchValue({
		  food_image: imagePath
		})
		
		this.imageSrc = imagePath
	}
		

    let data = {
      "food_type": this.requestFoodForm.value.food_type,
      "quantity_required": this.requestFoodForm.value.quantity_required,
      "food_required_date": this.requestFoodForm.value.food_required_date,
      "transport_details": this.requestFoodForm.value.transport_details,
      "food_required_location": this.requestFoodForm.value.food_required_location,
      "food_image": this.requestFoodForm.value.food_image,
      "user_id": "",
      "postedName":this.user?.name,
      "mobile_number": this.user?.phone
    }

    const result: any = await this.requestsService.setRequest(data);
    if(result) {
      this.id = result['_id'];
      this.router.navigate(['/requests'])
    }
  }

  onDateChanged(args) {
    this.requestFoodForm.patchValue({
      food_required_date: args.value
    })
  }
  
  async onImageChanged(args){
  
  	this.imageLoaded = true;
	
    args = args.replace("data:image/jpeg;base64,","");
	
	this.loadedImage = args;

  }  

}
