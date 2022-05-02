export class Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    email: string;
    id_tipo_documento: number;
    nro_documento: string;
    id_tipo_usuario: number;
    contrasena: string;
    tipo_documento: string;
    tipo_usuario: string;
    constructor() {
        this.id = 0;
        this.nombres = '';
        this.apellidos = '';
        this.email = '';
        this.id_tipo_documento = 0;
        this.nro_documento = '';
        this.id_tipo_usuario = 0;
        this.contrasena = '';
        this.tipo_documento = '';
        this.tipo_usuario = '';


    }
}