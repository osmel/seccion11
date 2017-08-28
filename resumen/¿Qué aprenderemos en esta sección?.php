¿Qué aprenderemos en esta sección?
Sección 11, clase 167
Esto es lo que veremos a continuación:

1- Uso del modulo HTTP.
2- Utilizaremos los servicios restful de Firebase
3- POST.
4- GET.
5- DELETE.
6- PUT.
7- Configuraciones en la consola de Firebase.
8- Entre otras cosas útiles.
Al final de la sección tenemos un examen teórico.


https://heroesapp-c4398.firebaseio.com/heroes.json
https://heroesapp-c4398.firebaseio.com/heroes/1.json






	Para instalar bootstrap y sus dependencia (package.json)
	 "package.json": Agregando dependencia 
	 		--save: porque necesitamos q este archivo se ponga en el paquete json ("package.json")
	 	npm install zone.js@0.8.5 --save	
		npm install bootstrap@4.0.0-alpha.6 --save
		npm install jquery --save	
		npm install tether --save	

	y luego manualmente nosotros especificamos los ficheros con los que va a trabajar las dependencias
	"angular-cli.json"
	       "styles": [
	        "styles.css",
	        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
	      ],
	      "scripts": [
	        "../node_modules/jquery/dist/jquery.slim.min.js",
	        "../node_modules/tether/dist/js/tether.min.js",
	        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
	      ],



	        ng g c  components/heroes
	        ng g c  components/heroes/heroe --flat (para que lo cree dentro de esa misma carpeta)
	      creando servicio
		  	ng g s  services/heroes

**************************

172- 


    Eduardo ibarra en vivo(min 30.15)
    	https://www.youtube.com/watch?v=oiuyNo2AYaA&feature=push-lsb&attr_tag=gvdnrgiotfKnmhWo-6
    	https://github.com/EduardoIbarra/ng4-login-fb-google

    A las 7pm	
    	https://www.youtube.com/watch?v=4pm5QaSwXWU


	https://firebase.google.com/docs/reference/rest/database/
		  Insert, update, delete y select


173- Es el ejercicio donde se convina el componenteHeroe.ts, con el Servicio(que se encarga de actualizar  desde firebase)		


173- 	Crear registro (servicio POST)
Es el ejercicio donde se convina el componenteHeroe.ts, con el Servicio(que se encarga de actualizar  desde firebase)		

174- 	Actualizar registro(servicio PUT)

175- 	Obtener data (servicio get)

176- 	Regilla Mostrando todos los heroes que hay

