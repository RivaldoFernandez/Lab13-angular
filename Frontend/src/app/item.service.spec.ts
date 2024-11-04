import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';
  constructor(private http: HttpClient) { }
  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getItemById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }
  updateItem(id: string, item: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, item);
  }
  deleteItem(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
