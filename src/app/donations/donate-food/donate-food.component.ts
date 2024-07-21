import { Component, NgZone, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';

import { DonationsService } from "../donations.service";


@Component({
  selector: 'app-donate-food',
  templateUrl: './donate-food.component.html',
  styleUrls: ['./donate-food.component.css','../../css/bootstrap.min.css','../../css/style.css','../../css/animation.min.css'
  ,'../../../../node_modules/font-awesome/css/font-awesome.css','../../css/style.css']
})
export class DonateFoodComponent implements OnInit {

  public imageSrc: any;
  public thumbSize: number = 80;
  public imageLoaded: boolean = false;
  //public tasks: bgHttp.Task[] = [];
  public events: { eventTitle: string; eventData: any }[] = [];
  private file: string;
  private url: string;
  private loadedImage: string;
  private counter: number = 0;
  private session: any;
  private id: string;

  public imagePickerConf: ImagePickerConf = {
    borderRadius: "4px",
    language: "en",
    width: "320px",
    height: "240px",
  };

  user:any
  public donateFoodForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private donationsService: DonationsService, private _ngZone: NgZone) 
  {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.id = "";
    this.url = "";
    this.file = "";
	this.imageLoaded = false;
	this.loadedImage = "";
    this.donateFoodForm = this.fb.group({
      food_type: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      food_available_date: ["", [Validators.required]],
      transport_details: ["", [Validators.required]],
      food_image: [""],
      user_id: [""]
    });
  }

  ngOnInit(): void {
    this.createDonateFoodForm();
  }

  private createDonateFoodForm() {
    this.user = JSON.parse(localStorage.getItem('user')!);
	this.imageLoaded = false;
	this.loadedImage = "";
    this.donateFoodForm = this.fb.group({
      food_type: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      food_available_date: ["", [Validators.required]],
      transport_details: ["", [Validators.required]],
      food_image: [""],
      user_id: [""]
    });
  }

  async onDonateFood() {
	
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

		this.donateFoodForm.patchValue({
		  food_image: imagePath
		})
		
		this.imageSrc = imagePath
	
	}
	
    let data = {
      "food_type": this.donateFoodForm.value?.food_type,
      "quantity": this.donateFoodForm.value?.quantity,
      "food_available_date": this.donateFoodForm.value?.food_available_date,
      "transport_details": this.donateFoodForm.value?.transport_details,
      "food_image": this.donateFoodForm.value?.food_image,
      "mobile_number": this.user?.phone,
      "postedName":this.user?.name,
      "user_id": ""
    }

    
    const result: any = await this.donationsService.setDonateFood(data);
	
    if(result) {
      this.id = result['_id'];
      alert('Thanks for donation!');
      this.donateFoodForm.reset();
      this.router.navigate(['/donations'])
    }
	
	this.imageLoaded = false;
	
  }  

  onDateChanged(args) {
    this.donateFoodForm.patchValue({
      food_available_date: args.value
    })
  }
  
  async onImageChanged(args){
  
	this.imageLoaded = true;
	
    args = args.replace("data:image/jpeg;base64,","");
	
	this.loadedImage = args;
		
  }


  
}
