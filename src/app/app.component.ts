import { Component, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  productos: any;


  constructor(private afs: AngularFireDatabase){
    this.afs.object('productos/').snapshotChanges().subscribe( resp =>{
      this.productos = resp.payload.val();
      console.log(this.productos);
    });

  }
}
