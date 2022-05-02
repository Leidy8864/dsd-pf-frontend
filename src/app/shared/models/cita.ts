export class Cita {
    id: number;
    id_usuario: number;
    id_sucursal: number;
    id_especialidad: number;
    id_especialista: number;
    id_horario: number;
    fecha: string;
    condicion: string;
    sucursal: string;
    especialidad: string;
    especialista: string;
    horario: string;

    constructor() {
        var today = new Date();

        this.id = 0;
        this.id_usuario = 0;
        this.id_sucursal = 0;
        this.id_especialidad = 0;
        this.id_especialista = 0;
        this.id_horario = 0;
        this.fecha = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
        console.log(today);
        console.log(this.fecha);
        this.condicion = '';
        this.sucursal = '';
        this.especialidad = '';
        this.especialista = '';
        this.horario = '';
    }
}