import { DomicilioEnvio } from "./domicilioEnvio";

export class Cliente{
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  domicilioEnv: DomicilioEnvio;
  fechaAlta: Date;
  fechaBaja: Date | undefined;

  constructor(nombre: string, apellido: string, dni: number, email: string, domicilioEnv: DomicilioEnvio){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
    this.domicilioEnv = domicilioEnv;
    this.fechaAlta = new Date();
  }
}
