export class Idb{
	buscar(callback: any) {
		throw new Error('Method not implemented.');
	}
	public conexion: any;
	public bd: any;

	constructor(){

		const peticion = indexedDB.open('LoL', 2)
		peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
		peticion.onupgradeneeded = (evento :any) => {
			this.conexion = evento.target.result
			this.crear()
        	}
		peticion.onsuccess = (evento: any) => {this.conexion = evento.target.result}
	}
	crear(){
		const tabla = this.conexion.createObjectStore('Campeones', {autoIncrement: true})
	}
	insertar(objeto: any, callback: () => void){
		const transaccion = this.conexion.transaction(['Campeones'], 'readwrite')
		transaccion.onerror = (evento: any) => {throw 'Error al insertar'}
		const tabla = transaccion.objectStore('Campeones')
		const peticion = tabla.add(objeto)
  		peticion.onsuccess = callback
	}

	listar(callback: { (campeones: any): void; (campeones: any): void; (arg0: any): void; }){
		
		const solicitud = window.indexedDB.open('LoL')
		solicitud.onsuccess = (evento: any) =>{
			this.bd = evento.target.result;
			console.log('Base de datos cargada')
			const objectStore = this.bd.transaction('Campeones', 'readonly').objectStore('Campeones')
			const solicitud = objectStore.getAll() 
			solicitud.onsuccess = ()=> {callback(solicitud.result)}
	}
	}
}