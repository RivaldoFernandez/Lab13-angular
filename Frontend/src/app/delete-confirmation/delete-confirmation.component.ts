import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  @Input() showModal: boolean = false;
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDeleteConfirmed() {
    this.confirmDelete.emit();
    this.showModal = false;
  }

  onCancelDelete() {
    this.cancelDelete.emit();
    this.showModal = false;
  }
}