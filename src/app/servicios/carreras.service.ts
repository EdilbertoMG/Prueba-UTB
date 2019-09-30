import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  private carreras:Carreras [] = [
    {
      nombre: "Doctorado en Ingeniería",
      descripcion: "La Universidad de Cartagena y la Universidad Tecnológica de Bolívar, ambas con acreditación institucional de alta calidad y con domicilio en la Ciudad de Cartagena, presentan el programa de Doctorado en Ingeniería, el cual hace parte de los planes de desarrollo de ambas universidades con el propósito de formar investigadores con capacidad de realizar y orientar en forma autónoma procesos académicos e investigativos que contribuyan al fortalecimiento de los indicadores de la ciencia, la tecnología y la innovación en la región Caribe y del país.",
      img: "assets/img/doctorado.jpg",
    },
    {
      nombre: "Maestría en Ingeniería de Producción",
      descripcion: "La Maestría en Ingeniería de Producción tiene su concepción en la necesidad del enfoque Interdisciplinar, para poder ofrecer y desarrollar soluciones efectivas acordes a las necesidades y el nivel de complejidad de las problemáticas que enfrentan los sistemas de producción contemporáneos de forma holística.",
      img: "assets/img/ingprod.jpg",
    },
    {
      nombre: "Maestría en Gestión de la Innovación",
      descripcion: "La Maestría tiene como objetivo principal la formación avanzada en herramientas y metodologías modernas de análisis de gestión de innovación para aplicarlas en la formulación de políticas, y en la planeación y ejecución de proyectos de investigación y desarrollo.",
      img: "assets/img/maestriaengestion.jpg",
    },
    {
      nombre: "Maestría en Gerencia de Proyectos",
      descripcion: "Los principios y propósitos diferenciadores que orientan la formación del Magíster en Gerencia de Proyectos de la Universidad Tecnológica de Bolívar, se conciben en formar profesionales de alta calidad, éticos, competentes, capaces de insertarse en los procesos de desarrollo científico y tecnológico del país y del mundo globalizado; investigadores capaces de generar y circular el conocimiento conjugando lo universal y sus mediaciones locales; comprometidos con el desarrollo sociocultural del país y de su región.",
      img: "assets/img/MaestríaenGerenciadeProyectos.jpg",
    },
    {
      nombre: "Especialización en Gerencia de Proyectos",
      descripcion: "La Universidad Tecnológica de Bolívar ha desarrollado un  posgrado de Especialización en  Gerencia de Proyectos, focalizando la formación de profesionales altamente competitivos en el área, para el desarrollo de la ciudad de Cartagena, la región  Caribe y Colombia.",
      img: "assets/img/gerenciasparadirectivosdocentes.jpg",
    },
    {
      nombre: "Especialización en Automatización y Control de Procesos Industriales",
      descripcion: "La Universidad Tecnológica de Bolívar ha desarrollado un  posgrado de Especialización en Automatización y Control de Procesos Industriales, focalizando la formación de profesionales altamente competitivos en el área, para el desarrollo de la ciudad de Cartagena, la región  Caribe y Colombia.",
      img: "assets/img/EspecializaciónenAutomatizacion.jpg",
    }
  ];


  constructor() { 
    console.log("servicio listo");
    
  }

  getCarreras():Carreras[]{
    return this.carreras;
   }
}


export interface Carreras{
  nombre:string;
  descripcion:string;
  img:string;
}