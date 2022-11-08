import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  clientsList: any []= [];
  cargando: boolean;  
  error: boolean = false;
  mensaje: string = "Hay un error en la carga";


  constructor(private userService: UserService) { }



  ngOnInit(): void {
    this.cargando = true;
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        this.cargando = false;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.userService.getAdminClient().subscribe(
      data => {
        this.clientsList = data;
      },err =>{
        this.error = true;
        this.clientsList = JSON.parse(err.error).message;
       
        
      }
    )
  } 

}
