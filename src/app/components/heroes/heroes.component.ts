import { Component, OnInit } from '@angular/core';
import { heroeInterfaz } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { KeysPipe } from '../../pipes/keys.pipe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	//heroe.interface.ts
	
	todoslosheroes:any[]=[];
	/*heroe:heroeInterfaz ={
		nombre: "",
		bio: "",
		casa: "Marvel"

	}
	*/

  constructor(private servicio: HeroesService) { 
		  	 this.servicio.getTodosLosHeroes()
		  	 .subscribe(data=>{
			  			 console.log(data);	 //al final solo imprime 1 solo objeto con muchos objetos dentro
			  			 //la mejor manera es crearnos un pipe
			  			 this.todoslosheroes = data; //y luego hago un pipe en html	

			  			 /*
			  			 //OJO--->de esta manera pierdo el id
			  			 for (let key$ in data) {
			  			 	console.log(data[key$]);
			  			 	let h = data[key$]; //pero con estas 2 lineas logro el key
			  			 	h.key = key$;
			  			 	this.todoslosheroes.push(data[key$]);
			  			 }*/

			  			 

			  			//this.heroe = data;
			  				//this.ruta.navigate(['/heroe',data.name])  //para cambiar la ruta con el id o name que devuelve
			  			 console.log(this.todoslosheroes);
			  			},
			  			 error=> console.log(error)

			  	)

  }


  eliminarHeroe(key:string) {
  			 this.servicio.eliminarHeroe(key)
		  	 .subscribe(data=>{  //cuando la data==null eso significa q se elimino
				  	 console.log(data);	 

				  	 if (data) {
				  	 	 console.error(data);
				  	 } else {
				  	 	//todo bien se elimino "data==null"
				  	 	//puro javascript pero en el pipe debo poner //pure: false
				  	 	delete this.todoslosheroes[key];  //pure: false
				  	 }

	    		  },
				  error=> console.log(error)

			  )

  	console.log('eliminado');
  }

  ngOnInit() {

  	//getTodosLosHeroes
  }

}
