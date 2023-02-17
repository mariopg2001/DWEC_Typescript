
import { Vista } from './vista.js'
import { Controlador } from './app.js'

export class Vistaadmin extends Vista {
    public controlador: Controlador
    public btnlistar: HTMLLIElement;
    public divindex: Element;
    public btnbuscar: any ;
    public opcion1: any ;
    public opcion2: any ;
    public opcion3: any ;
    public opcion4: any ;
    public divtarjeta: any;
    public imagen: any;
    public divicono: any;
    public spanedit: any;
    public iconoedit: any;
    public spanborrar: any;
    public iconoborrar: any;
    public spanlupa: any;
    public iconolupa: any;

	constructor(div: HTMLElement, controlador: Controlador) {
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
	cargarBusqueda(campeones: any[]){
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
	cargarlista(campeones: any[]) {
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
}
