import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  clientDetails: any;
  indice: String;
  cargando: boolean;  
  error: boolean = false;
  mensaje: string = "Hay un error en la carga";

  
  ngOnInit() {
     this.cargando = true;
     this.indice = this.route.snapshot.params['id'];
     this.userService.getAdminClientbyId(this.indice).subscribe(
      data => {
        this.cargando = false;

        this.clientDetails = data;
     
      },err =>{
        this.error = true;
        this.clientDetails = JSON.parse(err.error).message;
   
      }
    )
    
  } 
  }


