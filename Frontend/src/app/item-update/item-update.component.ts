import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent {
  @Input() item: any; // Recibe el objeto a editar
  @Output() update = new EventEmitter<any>(); // Emitir el objeto actualizado

  // Nuevo estado del modal
  isModalOpen = false;

  // Método para abrir el modal
  openModal() {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.update.emit(this.item); // Emitir el item actualizado
    this.closeModal(); // Cerrar el modal después de guardar
  }
}
