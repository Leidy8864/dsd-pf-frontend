import { Horario } from "./horario";

export class Especialista {
    id: number;
    nombres: string;
    apellidos: string;
    dni: string;
    id_especialidad: number;
    id_sucursal: number;
    estado: boolean;
    sucursal: {
        id: number;
        nombre: string;
        direccion: string;
    };
    especialidad: {
        id: number;
        nombre: string;
        descripcion: string;
    };
    horarios: Horario[];
    constructor() {
        this.id = 0;
        this.nombres = '';
        this.apellidos = '';
        this.dni = '';
        this.id_especialidad = 0;
        this.id_sucursal = 0;
        this.estado = true;
        this.sucursal = {
            id : 0,
            nombre : '',
            direccion : '',
        };
        this.especialidad = {
            id : 0,
            nombre : '',
            descripcion : '',
        };
        this.horarios = [];
    }
}