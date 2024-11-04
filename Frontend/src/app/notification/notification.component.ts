import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string = ''; // Mensaje que se muestra en la notificación
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'success'; // Tipo de notificación
  visible: boolean = true; // Controla la visibilidad de la alerta

  closeAlert() {
    this.visible = false; // Oculta la alerta al hacer clic en el botón de cierre
  }

  // Método que indica si hay notificaciones
  get hasNotification() {
    return this.message !== ''; // Devuelve true si hay un mensaje
  }
}
