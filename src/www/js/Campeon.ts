export class Campeon{
	public nombre: string;
	public descripcion: string;
	public posiciones: any;
	public fecha: any;
	public opciones: any;
	public imagen: File;

	constructor(nombre: string,descripcion: string,posiciones: any,fechac:any,imagencamp:File,opciones: any){
		this.nombre = nombre
        this.descripcion= descripcion
        this.posiciones=posiciones
        this.fecha=fechac
        this.opciones=opciones
        this.imagen=imagencamp
        
	}
}