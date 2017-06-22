import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Headers} from "@angular/http"

@Injectable()
export class GuitarService {

  constructor(private _http: Http) { }
  getGuitarBrands() {
    return this._http.get('http://localhost:62759/api/guitar')
    .map(res => res.json());
  }

  getAllGuitarModels() {
    return this._http.get('http://localhost:62759/api/guitar/allmodels')
    .map(res => res.json());
  }

  addGuitarModel(thename, theprice, thebrand) {
    var json = JSON.stringify({name: thename, price: theprice, guitar_brand_id: thebrand});
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:62759/api/guitar/newmodel', json, { headers: header }).map(res => res.json());
  }

  deleteGuitarModel(theid) {

    var header = new Headers();
    return this._http.delete('http://localhost:62759/api/guitar/deletemodel/' + theid.toString());
  }
}
