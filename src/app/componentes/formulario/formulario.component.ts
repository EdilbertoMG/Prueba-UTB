import { Component, OnInit } from '@angular/core';
import { CarrerasService, Carreras} from '../../servicios/carreras.service'; //importacion del servicio
import { FormControl, FormGroup, Validators } from '@angular/forms'; //impotancion del FormControl,Gropup y las validaciones

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //arreglo que recibira la data
  carreras:Carreras [] = [];

  //validacion de correo electronico
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //clase para crear un FormGroup juntos a sus FormControl
  createFormGroup(){
      return  new FormGroup({
        name: new FormControl('' , [Validators.required, Validators.minLength(5)]),
        apellidos: new FormControl('' , [Validators.required, Validators.minLength(5)]),
        email: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
        numero: new FormControl('' , [Validators.required, Validators.minLength(7)]),
        carrera: new FormControl('' , [Validators.required,])
      });
  }
  //nombre del FormGrouo que le asociamos en el html
  contacForm: FormGroup;

  //importamos el servicio al constructos
  constructor(private _carrerasService:CarrerasService ) { 
    //creando el FormGroup dentro del constructor
    this.contacForm = this.createFormGroup();
  }

  ngOnInit() {
    //enviado la data al frontend
    this.carreras = this._carrerasService.getCarreras();
  }
  //resetear el formulario cuando se envia 
  onResetForm(){
    this.contacForm.reset();
  }
  //clase para guardar lo que viene en el formulario
  onSaveForm(){
    //condicionales para el formulario al momonto de ser valido hacer lo que esta en el if
    if(this.contacForm.valid){

      console.log('Formulario enviado.');
      this.onResetForm();

    }else{
      //se imprime en consola cuando no se envia el formulario
      console.log('Formulario no enviado');

    }
  }
  //gets para traer lo que tengas las variables del formulario y poder hacer la validacion con Angular
  get name() {return this.contacForm.get('name');}
  get apellidos() {return this.contacForm.get('apellidos');}
  get email() {return this.contacForm.get('email');}
  get numero() {return this.contacForm.get('numero');}
  get carrera() {return this.contacForm.get('carrera');}

}
