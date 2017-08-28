este es el servicio que luego se inyectara al componente

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { heroeInterfaz } from '../interfaces/heroe.interface';
import 'rxjs/Rx'; //para que pueda ussar el map

@Injectable()
export class HeroesService {

	//url de firebase (objeto heroes que esta en firebase)
	heroesURL: string = 'https://heroesapp-c4398.firebaseio.com/heroes.json';
  constructor(private _http:Http) { 

  }

  nuevoHeroe(heroe:heroeInterfaz){

  	 let body =  JSON.stringify(heroe);
  	 
  	 let headers =  new Headers({
  	 	'Content-Type':'application/json'
  	 });

  	 //retornar un "observable", pero todavia debemos suscribirnos a este observable
  	 // de lo contrario, no veremos las respuesta, para ver las respuesta de un observable hay que estar inscrito
  	 //post( urldefirebase.json, campos, {'Content-Type':'application/json'})

  	 return this._http.post( this.heroesURL,body,{headers}) //headers:headers
  	 			 .map(res=>{
  	 			 	console.log(res.json());
  	 			 	return res.json();
  	 			 });

  }

}

este es el componente

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'   
import { heroeInterfaz } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  //heroe.interface.ts
  heroe:heroeInterfaz ={
    nombre: "",
    bio: "",
    casa: "Marvel"

  }

  constructor( private _heroesService: HeroesService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
    this._heroesService.nuevoHeroe(this.heroe)
      .subscribe(data=>{

      })


  }

}


/////////////////////

Para que la ruta cambie con lo que se devuelve
  import {Router} from '@angular/router'; // esto es para usar la ruta 


.subscribe(data=>{
          this.ruta.navigate(['/heroe',data.name])  //para cambiar la ruta con el id o name que devuelve
        })

