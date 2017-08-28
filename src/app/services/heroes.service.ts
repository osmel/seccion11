import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { heroeInterfaz } from '../interfaces/heroe.interface';
import 'rxjs/Rx'; //para que pueda ussar el map

@Injectable()
export class HeroesService {

	//url de firebase  para escribir(POST) o para mostrar todos los heroes
	heroesURL: string = 'https://heroesapp-c4398.firebaseio.com/heroes.json';    //heroes.json este es quien define q la tabla se llamará {heroes}
	//parA servicio Actualizar(put) y obtener datos(get)
	heroeURL: string = 'https://heroesapp-c4398.firebaseio.com/heroes/';  
  constructor(private _http:Http) { 

  }

  nuevoHeroe(heroe:heroeInterfaz){  //servicio POST para escribir en la data

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




	actualizarHeroe(heroe:heroeInterfaz, key$:string){  //servicio PUT para actualizar en la data
		  	 let body =  JSON.stringify(heroe);
		  	 let headers =  new Headers({
		  	 	'Content-Type':'application/json'
		  	 });

		  	 //para hacer la actualización necesitamos estar en el nodo, del registro que queremos actualizar
		  	 //Por tanto la url debe estar exactamente, en lo que se va a cambiar

		  	 let urlActualizar =`${this.heroeURL}/${key$}.json`; 

		 	 return this._http.put( urlActualizar,body,{headers}) //headers:headers
		  	 			 .map(res=>{
		  	 			 	console.log(res.json());
		  	 			 	return res.json();
		  	 			 });
  	}




	getHeroe( key$:string){  //servicio PUT para actualizar en la data
		  	 let urlobtener =`${this.heroeURL}/${key$}.json`; 
		 	 return this._http.get(urlobtener)
		  	 			 .map(res=>{
		  	 			 	console.log(res.json());
		  	 			 	return res.json();
		  	 			 });
  	}


	getTodosLosHeroes( ){  //servicio PUT para actualizar en la data
		  	 
		 	 return this._http.get(this.heroesURL)
		  	 			 .map(res=>{
		  	 			 	console.log(res.json());
		  	 			 	return res.json();
		  	 			 });
  	}

  	eliminarHeroe( key$:string){  //servicio PUT para actualizar en la data
		  	 let urleliminar =`${this.heroeURL}/${key$}.json`; 
		 	 return this._http.delete(urleliminar)
		  	 			 .map(res=>{
		  	 			 	console.log(res.json());
		  	 			 	return res.json();
		  	 			 });
  	}


}


/*

https://firebase.google.com/docs/reference/rest/database/#section-post
https://v4-alpha.getbootstrap.com/content/tables/
https://angular.io/tutorial/toh-pt6




https://www.youtube.com/watch?v=oiuyNo2AYaA&feature=push-lsb&attr_tag=gvdnrgiotfKnmhWo-6
https://github.com/EduardoIbarra/ng4-login-fb-google/commits/master

*/
