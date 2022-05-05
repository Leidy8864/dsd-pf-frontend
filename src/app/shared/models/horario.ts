export class Horario {
    id: number;
    id_especialista: number;
    inicio: string;
    fin: string;
    fecha: string;
    estado: boolean;
    constructor() {
        this.id = 0;
        this.id_especialista = 0;
        this.inicio = '00:00';
        this.fin = '00:00';
        this.fecha = '';
        this.estado = true;

    }
}