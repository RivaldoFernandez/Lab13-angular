import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() items: any[] = [];
  @Output() edit = new EventEmitter<any>(); // Cambiado a any para emitir el objeto completo
  @Output() delete = new EventEmitter<string>();

  selectedItem: any = null;
  isEditing: boolean = false; // Indicador de modo de edición

  editItem(item: any) {
    this.edit.emit(item); // Emitir el item a editar
  }
  
  

  viewDetails(item: any) {
    this.selectedItem = item;
    this.isEditing = false; // Asegurarse de que no está en modo de edición
  }

  deleteItem(id: string) {
    this.delete.emit(id);
  }

  closeModal() {
    this.selectedItem = null;
    this.isEditing = false; // Reiniciar el estado al cerrar el modal
  }

  onSubmit() {
    // Emitir el objeto completo para que el componente padre lo maneje.
    this.edit.emit(this.selectedItem); 
    this.closeModal(); // Cerrar el modal después de guardar
  }

  cancelEdit() {
    this.isEditing = false; // Cambiar a modo de ver detalles
  }
}
