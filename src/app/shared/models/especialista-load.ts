import { Especialidad } from "./especialidad";
import { Especialista } from "./especialista";
import { Sucursal } from "./sucursal";

export class EspecialistaLoad {
    especialista: Especialista;
    sucursales: Sucursal[];
    especialidades: Especialidad[];
    constructor() {
        this.especialista = new Especialista;
        this.sucursales = [];
        this.especialidades = [];
    }

}