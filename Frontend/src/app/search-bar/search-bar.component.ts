import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.search.emit(inputElement.value);
  }
}