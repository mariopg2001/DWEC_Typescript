/**
	@file Contiene el modelo de la vista de inicio
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

import { Vista } from './vista.js'

/**
	Implementa una vista de inicio.
**/
export class Vistaadmin extends Vista {
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador) {
		super(div)
		
		this.controlador = controlador

		this.btnlistar = document.getElementsByTagName('li')[3]
		this.divindex = document.getElementsByClassName('contenedor')[0]
		this.btnbuscar= document.getElementById('buscar')

		this.btnlistar.onclick = this.listar.bind(this)
		this.btnbuscar.onclick=this.buscar.bind(this)

		
		this.listar()

	}


	buscar(){
		this.controlador.buscar()
	}
	cargarBusqueda(campeones){
		this.opcion1= document.getElementById('mago')
		this.opcion2= document.getElementById('asesino')
		this.opcion3= document.getElementById('tanque')
		this.opcion4= document.getElementById('Gerrero')
		console.log('Cargado')
		let opcion11= this.opcion1.value
		console.log(opcion11)

		this.divindex.textContent = ''
		// console.log(this.divindex)
		campeones.forEach(element => {
			
		
			//crear tarjetas


			//contenedor de la tarjeta
			this.divtarjeta=document.createElement("div")
			this.divtarjeta.classList.add("contenedorimagen")
			this.divindex.appendChild(this.divtarjeta)

			//imagen
			this.imagen=document.createElement('img')
			this.imagen.classList.add("champ")
			this.imagen.src= element.imagen
			this.divtarjeta.appendChild(this.imagen)


			//contenedor de los iconos
			this.divicono=document.createElement('div')
			this.divicono.classList.add( 'contenedoricono')
			this.divtarjeta.appendChild(this.divicono)

			//icono modificar
			this.spanedit=document.createElement('span')
			this.spanedit.classList.add('icono')
			this.spanedit.setAttribute("id", "mod")
			this.divicono.appendChild(this.spanedit)
			this.iconoedit=document.createElement('i')
			this.iconoedit.classList.add('fa-solid')
			this.iconoedit.classList.add('fa-pen')
			this.spanedit.appendChild(this.iconoedit)

			//icono eliminar
			this.spanborrar=document.createElement('span')
			this.spanborrar.classList.add('icono')
			this.divicono.appendChild(this.spanborrar)
			this.iconoborrar=document.createElement('i')
			this.iconoborrar.classList.add('fa-sharp')
			this.iconoborrar.classList.add('fa-solid')
			this.iconoborrar.classList.add('fa-trash')
			this.spanborrar.appendChild(this.iconoborrar)

			//icono lupa
			this.spanlupa=document.createElement('span')
			this.spanlupa.classList.add('icono')
			this.divicono.appendChild(this.spanlupa)
			this.iconolupa=document.createElement('i')
			this.iconolupa.classList.add('fa-sharp')
			this.iconolupa.classList.add('fa-solid')
			this.iconolupa.classList.add('fa-magnifying-glass')
			this.spanlupa.appendChild(this.iconolupa)




		
		});

	}

	listar() {
		this.controlador.listar()
	}
	cargarlista(campeones) {
		this.divindex.textContent = ''
		// console.log(this.divindex)
		campeones.forEach(element => {

			//crear tarjetas


			//contenedor de la tarjeta
			this.divtarjeta=document.createElement("div")
			this.divtarjeta.classList.add("contenedorimagen")
			this.divindex.appendChild(this.divtarjeta)

			//imagen
			this.imagen=document.createElement('img')
			this.imagen.classList.add("champ")
			this.imagen.src= element.imagen
			this.divtarjeta.appendChild(this.imagen)


			//contenedor de los iconos
			this.divicono=document.createElement('div')
			this.divicono.classList.add( 'contenedoricono')
			this.divtarjeta.appendChild(this.divicono)

			//icono modificar
			this.spanedit=document.createElement('span')
			this.spanedit.classList.add('icono')
			this.spanedit.setAttribute("id", "mod")
			this.divicono.appendChild(this.spanedit)
			this.iconoedit=document.createElement('i')
			this.iconoedit.classList.add('fa-solid')
			this.iconoedit.classList.add('fa-pen')
			this.spanedit.appendChild(this.iconoedit)

			//icono eliminar
			this.spanborrar=document.createElement('span')
			this.spanborrar.classList.add('icono')
			this.divicono.appendChild(this.spanborrar)
			this.iconoborrar=document.createElement('i')
			this.iconoborrar.classList.add('fa-sharp')
			this.iconoborrar.classList.add('fa-solid')
			this.iconoborrar.classList.add('fa-trash')
			this.spanborrar.appendChild(this.iconoborrar)

			//icono lupa
			this.spanlupa=document.createElement('span')
			this.spanlupa.classList.add('icono')
			this.divicono.appendChild(this.spanlupa)
			this.iconolupa=document.createElement('i')
			this.iconolupa.classList.add('fa-sharp')
			this.iconolupa.classList.add('fa-solid')
			this.iconolupa.classList.add('fa-magnifying-glass')
			this.spanlupa.appendChild(this.iconolupa)




		
		});
		/*


		Otra forma de hacerlo

				while (this.divindex.firstChild)
				this.divindex.firstChild.remove()
				  	
		   
				   for(let campeon of campeones){
					   this.divimagen=document.createElement("div")
					   this.divimagen.classList.add("contenedorimagen")
					   this.divindex.appendChild(this.divimagen)
					   this.imagen=document.createElement('img')
					   this.imagen.classList.add("champ")
					   this.imagen.src= campeon['imagen']
					   this.divimagen.appendChild(this.imagen)
					   this.divicono=document.createElement('div')
					   this.divicono.classList.add( 'contenedoricono')
					   this.divimagen.appendChild(this.divicono)
					   this.spanedit=document.createElement('span')
					   this.spanedit.classList.add('icono')
					   this.spanedit.setAttribute("id", "mod")
					   this.divicono.appendChild(this.spanedit)
		
					   this.iconoedit=document.createElement('i')
					   this.iconoedit.classList.add('fa-solid')
					   this.iconoedit.classList.add('fa-pen')
					   this.spanedit.appendChild(this.iconoedit)
		
					   this.spanborrar=document.createElement('span')
					   this.spanborrar.classList.add('icono')
					   this.divicono.appendChild(this.spanborrar)
					   this.iconoborrar=document.createElement('i')
					   this.iconoborrar.classList.add('fa-sharp')
					   this.iconoborrar.classList.add('fa-solid')
					   this.iconoborrar.classList.add('fa-trash')
					   this.spanborrar.appendChild(this.iconoborrar)
		
					   this.spanlupa=document.createElement('span')
					   this.spanlupa.classList.add('icono')
					   this.divicono.appendChild(this.spanlupa)
					   this.iconolupa=document.createElement('i')
					   this.iconolupa.classList.add('fa-sharp')
					   this.iconolupa.classList.add('fa-solid')
					   this.iconolupa.classList.add('fa-magnifying-glass')
					   this.spanlupa.appendChild(this.iconolupa)
					   
				   }
				   
			   }
		
			   */
	}

}
