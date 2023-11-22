export class DomicilioEnvio{
  calle: string;
  altura: number;
  localidad: string;
  provincia: string;
  cp: number;
  observaciones: string;

  constructor(calle: string, altura: number, localidad: string, provincia: string,
              cp: number, observaciones: string){
                this.calle = calle;
                this.altura = altura;
                this.localidad = localidad;
                this.provincia = provincia;
                this.cp = cp;
                this.observaciones = observaciones
  }
}
