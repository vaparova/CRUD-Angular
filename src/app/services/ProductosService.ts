import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Producto } from '../models/producto';
import { Categorias } from '../models/categorias';





@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private categoria = new Categorias();


  constructor(private afs: AngularFireDatabase) {
  }

  getProductosArr(cat:number){
  return this.getProductosBD(cat);
  }


  private setCategoriaBD(categoria:number){
    const cat = 'productos/' + this.categoria.getCategoria(categoria);
    return cat;
  }


  // M E T O D O S   F I R E B A S E

  private getProductosBD(cat: number) {
    return this.afs.list<Producto>(this.setCategoriaBD(cat)).valueChanges();
  }

  insertProductoBD(cat:number, prod: Producto){
    return this.afs.list<Producto>(this.setCategoriaBD(cat)).push(prod);
  }

  // M E T O D O S    I N I C I A L I Z A D O R E S   D E   D A T O S

  // private setBd(cat: number) {
  //   console.log(this.setCategoriaBD(cat));
  //   return this.afs.object(this.setCategoriaBD(cat)).set(this.prodto);
  // }

  // private getProductosCat(cat: number){
  //   const arrProductos = this.setProductosArr(cat);
  //   const a: any[] = [];
  //   arrProductos.forEach( prod =>{
  //     const maq = new Producto(prod.nombre, prod.categoria, prod.precio, prod.descripcion, prod.imagen);
  //     a.push(maq);
  //     this.prodto = a;
  //   });
  //   return this.setBd(cat);
  // }

  // setProductosArr(cat: number) {
  //   switch(cat){
  //     case 0:
  //       const skincare = new Skincare();
  //       return skincare.getSkincare();
  //     case 1:
  //       const maquillaje = new Maquillaje();
  //       return maquillaje.getMaquillaje();
  //     case 2:
  //       const fragancias = new Fragancias();
  //       return fragancias.getFragancias();
  //     default:
  //       const def = new Skincare();
  //       return def.getSkincare();
  //   }
  // }

}
