import { Component, OnInit } from '@angular/core';
import { CarrerasService, Carreras} from '../../servicios/carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  carreras:Carreras [] = [];

  constructor( private _carrerasService:CarrerasService) { }

  ngOnInit() {

    this.carreras = this._carrerasService.getCarreras();
    console.log(this.carreras);
  }

}
