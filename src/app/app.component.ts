import { Component } from '@angular/core';
import  Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alertNormal(){
    alert("Alerta normal");
  }
  alertInfo(){
    Swal.fire('Alerta com Sweet');
  }
  alertDelete(){
    Swal.fire({
      title:'Confirmar a exclusão?',
      icon:'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Foi sem querer',
    }).then(result =>{
        if(result.value){
          Swal.fire('Excluido com sucesso!!!','arquivo apagado','success');
        }
        else{
          Swal.fire('Erro ao excluir!!!');
        }
    })
  }
  alertInput(){
    Swal.fire({
      title: 'Informe seu E-mail:',
      input:'email',
      showCancelButton:true,
      confirmButtonText:'Enviar'
    }).then(result => {
      Swal.fire(result.value + ' Enviado com sucesso!!!')
    })
  }
}
