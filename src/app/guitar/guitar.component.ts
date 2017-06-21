import { Component, OnInit } from '@angular/core';
import { GuitarService } from '../services/guitar.service'

export class guitarBrand
{
  guitarBrandId: string;
  name: string;
}

export class guitarModelBrand
{
  brandName: string;
  guitarBrandId: string;
  guitarModelId: string;
  modelName: string;
  modelPrice: string;
}

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})

export class GuitarComponent implements OnInit {
  guitarBrands: guitarBrand[];
  guitarModelBrands: guitarModelBrand[];
  brand: string;
  name: string;
  price: string;

  constructor(private _guitar: GuitarService) { 

    this._guitar.getGuitarBrands()
    .subscribe(
      data => { 
        this.guitarBrands = data; 
      },
      error => alert(error),
      () => console.log("getGuitarBrands complete")
    );

    this._guitar.getAllGuitarModels()
    .subscribe(
      data => { 
        this.guitarModelBrands = data; 
      },
      error => alert(error),
      () => console.log("getAllGuitarModels complete")
    );

  }

 addGuitarModel(name, price, brand) {
    this._guitar.addGuitarModel(name, price, brand)
    .subscribe(
      data => JSON.stringify(data),
      error => alert(error),
      () => console.log("addGuitarModel complete")
    );

    //Reinitialize
    this.brand = '0';
    this.name = ''
    this.price = '';

  }

  ngOnInit() {
    this.brand = '0';
  }

}
