import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Skincare } from '../models/skincare';
import { catchError } from 'rxjs';
import { Producto } from '../models/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  prodto: Producto[] = [];


  constructor(private afs: AngularFireDatabase) {
  }

  getProductosBD() {
    return new Promise((resolve, reject)=>{
      const conexion = this.afs.object('productos/').snapshotChanges();
        conexion.pipe(
          catchError((err): any => {
            reject(new Error ('esto es un error' + err ));
          })
        ).subscribe( (data: any) =>{
          console.log(data.payload.val());
          if(data.payload.exists()){
            resolve(this.prodto = data.payload.val());
          }else{
            reject(new Error('Error en BD!!'));
          }
        }
      );
    });
  }

  setBd() {
    return this.afs.object('productos/').set(this.prodto);
  }

  setProductos() {
    const skincare = new Skincare();
    const a: any[] = [];
    skincare.getSkincare().forEach( prod =>{
      const skin = new Producto(prod.nombre, prod.categoria, prod.precio, prod.descripcion, prod.imagen)
      a.push(skin);
    });
    this.prodto = a;
    return this.prodto;
  }

  getProductosArr(){
    return this.prodto;
  }
}
