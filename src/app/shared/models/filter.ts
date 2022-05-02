export class Filter {
    fecha: string | null;
    id_sucursal: number;
    id_especialidad: number;
    page: number;
    numItems: number;
    constructor() {
        this.fecha = '';
        this.id_sucursal = 0;
        this.id_especialidad = 0;
        this.page = 0;
        this.numItems = 0;
    }
}