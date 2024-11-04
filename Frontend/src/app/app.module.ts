import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { NotificationComponent } from './notification/notification.component';
import { ItemUpdateComponent } from './item-update/item-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFormComponent,
    ItemListComponent,
    ItemDetailComponent,
    SearchBarComponent,
    DeleteConfirmationComponent,
    NotificationComponent,
    ItemUpdateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
