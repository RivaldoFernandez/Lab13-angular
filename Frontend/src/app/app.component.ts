import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Comparte Tus Recuerdos: Galería de Fotos';
  items: any[] = [];
  currentItem: any = {};
  searchTerm: string = '';
  notification: { message: string, type: 'success' | 'danger' } | null = null;
  itemToDelete: string | null = null;
  showModal: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe((items) => {
        this.items = items;
      }, (error: HttpErrorResponse) => {
        console.error("Error al obtener los elementos", error);
        this.showNotification('Error al obtener los elementos: ' + (error.message || 'Error desconocido'), 'danger');
      });
  }

  getItemById(id: string): void {
    this.itemService.getItemById(id)
      .subscribe((item) => {
        this.currentItem = item;
      }, (error: HttpErrorResponse) => {
        console.error("Error al obtener el elemento", error);
        this.showNotification('Error al obtener el elemento: ' + (error.message || 'Error desconocido'), 'danger');
      });
  }

  createItem(item: any): void {
    console.log("Datos a enviar:", item);
    this.itemService.createItem(item)
      .subscribe(() => {
        this.getItems();
        this.currentItem = {};
        this.showNotification('Elemento creado correctamente', 'success');
      }, (error: HttpErrorResponse) => {
        console.error("Error al crear el elemento", error);
        this.showNotification('Error al crear el elemento: ' + (error.message || 'Error desconocido'), 'danger');
      });
  }

  updateItem(id: string, item: any): void {
    this.itemService.updateItem(id, item)
      .subscribe(() => {
        this.getItems();
        this.currentItem = {};
        this.showNotification('Elemento actualizado correctamente', 'success');
      }, (error: HttpErrorResponse) => {
        console.error("Error al actualizar el elemento", error);
        this.showNotification('Error al actualizar el elemento: ' + (error.message || 'Error desconocido'), 'danger');
      });
  }

  deleteItem(id: string): void {
    this.itemToDelete = id;
    this.showModal = true;
  }

  confirmDelete(): void {
    if (this.itemToDelete) {
      this.itemService.deleteItem(this.itemToDelete)
        .subscribe(() => {
          this.getItems();
          this.itemToDelete = null;
          this.showModal = false;
          this.showNotification('Elemento eliminado correctamente', 'success');
        }, (error: HttpErrorResponse) => {
          console.error("Error al eliminar el elemento", error);
          this.showNotification('Error al eliminar el elemento: ' + (error.message || 'Error desconocido'), 'danger');
        });
    }
  }

  cancelDelete(): void {
    this.itemToDelete = null;
    this.showModal = false;
  }

  editItem(item: any): void {
    this.currentItem = { ...item }; // Crear una copia del item
  }
  
  

  showNotification(message: string, type: 'success' | 'danger'): void {
    this.notification = { message, type };
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }

  get filteredItems(): any[] {
    return this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
