import { Horario } from "./horario";

export class Especialista {
    id: number;
    nombres: string;
    apellidos: string;
    dni: string;
    id_especialidad: number;
    id_sucursal: number;
    estado: boolean;
    especialidad: string;
    sucursal: string;
    horarios: Horario[];
    constructor() {
        this.id = 0;
        this.nombres = '';
        this.apellidos = '';
        this.dni = '';
        this.id_especialidad = 0;
        this.id_sucursal = 0;
        this.estado = true;
        this.especialidad = '';
        this.sucursal = '';
        this.horarios = [];
    }
}