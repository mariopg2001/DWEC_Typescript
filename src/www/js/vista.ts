export class Vista{
	public div: any;

	constructor(div: any){
		this.div = div
		
	}


	mostrar(ver: any){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
}