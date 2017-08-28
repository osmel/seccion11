export interface heroeInterfaz{
	 nombre:string;
	 bio:string;
	 casa:string;
	 key$?:string;  //aqui usamos ? para especificar que este campo es opcional, y que no de error cuando lo especifiquemos
}