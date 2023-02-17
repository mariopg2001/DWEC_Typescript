import { Controlador } from './app.js'
export class VistaNav{
    public controlador: Controlador
    nav: HTMLElement
    liadmin: HTMLLIElement
    lianadir: HTMLLIElement
    mod: any
    limod: HTMLLIElement
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
	constructor(controlador: Controlador, nav: HTMLElement){
		this.controlador = controlador
		this.nav = nav
		this.liadmin = this.nav.getElementsByTagName('li')[0]
        this.lianadir = this.nav.getElementsByTagName('li')[1]
		// this.anadir= document.getElementById('anadir')
		this.mod=document.getElementById('mod')

        this.limod = this.nav.getElementsByTagName('li')[2]

		this.mod.onclick=this.pulsarmod.bind(this)
		// this.anadir.onclick=this.pulsaranadir.bind(this)

		this.liadmin.onclick = this.pulsaradmin.bind(this)
		this.lianadir.onclick = this.pulsaranadir.bind(this)
		this.limod.onclick = this.pulsarmod.bind(this)
	}
	/**
		Atención a la pulsación sobre el enlace de Inicio
	**/
	pulsaradmin(){
		this.controlador.pulsarNavadmin()
	}
	/**
		Atención a la pulsación sobre el enlace de CRUD
	**/
	pulsaranadir(){
		this.controlador.pulsarNavanadir()
	}
	/**
		Atención a la pulsación sobre el enlace de Juego
	**/
	pulsarmod(){
		this.controlador.pulsarNavmod()
	}
}
