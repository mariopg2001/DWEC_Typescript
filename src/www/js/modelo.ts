import{Controlador} from './app.js'
import {Idb} from './idb.js'

export class Modelo{
    
	public controlador: Controlador
	public lista:any
	public callbacks: any
	public idb: Idb

    constructor(controlador:Controlador){	
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
		this.controlador = controlador
		this.idb = new Idb()	
	}
    avisar(){
	    for(let callback of this.callbacks)
	    callback()
	}
	insertar(objeto: any, callback: () => void){
		this.idb.insertar(objeto, callback)
	}
	listar(callback: { (campeones: any): void; (campeones: any): void }){
		this.idb.listar(callback)
	}
	buscar(callback: any){
		this.idb.buscar(callback)
	}
}
