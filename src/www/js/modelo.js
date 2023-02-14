/**
	@file Contiene el modelo de la aplicación
	@author Mario Pérez <mperezgarcia.guadalupe@alumnado.fundacionloyola.es>
	@license GPL-3.0-or-later
**/
import {Idb} from './idb.js'

/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(controlador){
		
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
		this.controlador = controlador
		this.idb = new Idb()
		
		
	}
	/**
	 * Registra un objeto para informarle de los cambios en el Modelo
	 * @param {Function} Función de callback que será llamada cuando cambien los datos
	 **/
	
	/**
	 * Ejecuta todos los callback registrados.
	 **/
	avisar(){
	    for(let callback of this.callbacks)
	    callback()
	}
	insertar(objeto, callback){
		this.idb.insertar(objeto, callback)
	}
	listar(callback){
		this.idb.listar(callback)
	}
	buscar(callback){
		this.idb.buscar(callback)
	}
	
	

	
	

}
