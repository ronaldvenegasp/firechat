import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    } else {
      this.chatService.agregarMensaje(this.mensaje).then(() => {
        console.log('Mensaje enviado');
        this.mensaje = '';
      }).catch((err) => {
        console.log('Error al enviar el mensaje', err);
      });
    }
  }

}
