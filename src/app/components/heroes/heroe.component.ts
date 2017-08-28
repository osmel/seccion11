import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';  
import {Router, ActivatedRoute} from '@angular/router'; 
//Router : para usar "navigate"   -> esto es para usar la ruta   
//ActivatedRoute : para obtener url
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

  nuevo:boolean = false;	
  id:string;
  constructor( private _heroesService: HeroesService, 
  			private ruta:Router,
  			private obtenerRuta:ActivatedRoute

  			) { 

  			//obtener la ruta
	      this.obtenerRuta.params.subscribe(parametro => {
	        	console.log(parametro); //esto va a regresar un objeto con todos los parametros en este caso id:0
	        							//tener presente que los parametros q regresan son los q declaramos en el router y
	        							// con los mismos nombres que usamos en el router
	        	//puedo verlo así console.log(parametro.id); pero la forma adecuada es:
	        	console.log("mia  ",parametro['id']); //es mas seguro
	        	this.id= parametro['id'];

	        	//obteniendo la data
	        	  if (this.id!="nuevo") { 
	  		    		  	this._heroesService.getHeroe(this.id)
						  	.subscribe(data=>{
						  			this.heroe = data;
						  				//this.ruta.navigate(['/heroe',data.name])  //para cambiar la ruta con el id o name que devuelve
						  			},
						  			 error=> console.log(error)

						  	)


	        	  }	

	      })


  }

  ngOnInit() {
  }

  guardar(){  //aqui haremos una diferencia por el url, si vamos a crear nueva data, o vamos actualizar
	
	  	console.log(this.heroe);

	  		    if (this.id=="nuevo") { //insertar o crear
	  		    		  	this._heroesService.nuevoHeroe(this.heroe)
						  	.subscribe(data=>{
						  				this.ruta.navigate(['/heroe',data.name])  //para cambiar la ruta con el id o name que devuelve
						  			},
						  			 error=> console.log(error)

						  	)
	        	} else { //actualizar
	  		    		  	this._heroesService.actualizarHeroe(this.heroe,this.id)
						  	.subscribe(data=>{
						  				//this.ruta.navigate(['/heroe',data.name])  //para cambiar la ruta con el id o name que devuelve
						  			},
						  			 error=> console.log(error)

						  	)
	        	}

  }

  agregarNuevoHeroe(forma: NgForm){
  	  //cambiar la url a nuevo
  	  this.ruta.navigate(['/heroe','nuevo']);  
  	  //limpiar los campos
  	  forma.reset({
  	  	 casa:"Marvel"
  	  });


  }




}
