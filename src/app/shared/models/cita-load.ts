import { Especialidad } from "./especialidad";
import { Sucursal } from "./sucursal";

export class CitaLoad {
    sucursales: Sucursal[];
    especialidades: Especialidad[];
    constructor() {
        this.sucursales = [];
        this.especialidades = [];
    }
}