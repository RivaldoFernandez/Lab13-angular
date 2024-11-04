import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() item: any = {};
  @Output() formSubmit = new EventEmitter<any>();

  alertMessage: string | null = null;
  alertClass: string = '';
  formSubmitted: boolean = false; 

  ngOnInit() {
    if (!this.item.releaseDate) {
      this.item.releaseDate = new Date().toISOString().split('T')[0];
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (!this.item.name || !this.item.description || !this.item.genre || !this.item.releaseDate || this.item.rating === null) {
      this.alertMessage = "Por favor complete todos los campos requeridos.";
      this.alertClass = 'alert alert-danger';
    } else {
      this.alertMessage = "¡Item agregado correctamente!";
      this.alertClass = 'alert alert-success';
      this.formSubmit.emit(this.item);
      this.resetForm();
    }
  }

  resetForm() {
    this.item = {
      name: '',
      description: '',
      genre: '',
      releaseDate: new Date().toISOString().split('T')[0],
      rating: null,
      imageUrl: ''
    };
    this.alertMessage = null;
    this.alertClass = '';
    this.formSubmitted = false;
  }
}
