import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    items: any[] = [];
    currentItem: any = {};

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.itemService.getItems()
            .subscribe((items) => {
                this.items = items;
            });
    }

    getItemById(id: string): void {
        this.itemService.getItemById(id)
            .subscribe((item) => {
                this.currentItem = item;
            });
    }

    createItem(item: any): void {
        this.itemService.createItem(item)
            .subscribe(() => {
                this.getItems();
                this.currentItem = {};
            });
    }

    updateItem(id: string, item: any): void {
        this.itemService.updateItem(id, item)
            .subscribe(() => {
                this.getItems();
                this.currentItem = {};
            });
    }

    deleteItem(id: string): void {
        this.itemService.deleteItem(id)
            .subscribe(() => {
                this.getItems();
            });
    }

    editItem(id: string): void {
        this.getItemById(id);
    }
}
