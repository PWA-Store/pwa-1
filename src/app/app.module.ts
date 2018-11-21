import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, 
         MatSlideToggleModule, MatToolbarModule, MatCardModule, MatTableModule, 
         MatListModule, MatTabsModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';
import { ChatComponent } from './chat/chat.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';
import { BillEntryComponent } from './bill-entry/bill-entry.component';
import { OrderComponent } from './order/order.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ChatItemComponent } from './chat-item/chat-item.component';


const routes : Routes = [
  {path: '', component: HomeListComponent},
  {path: 'chat/:id', component: ChatComponent},
  {path: 'inventory-items', component: InventoryItemsComponent},
  {path: 'bill-entry', component: BillEntryComponent},
  {path: 'order', component: OrderComponent},
  {path: 'supervisor', component: SupervisorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    ChatComponent,
    InventoryItemsComponent,
    BillEntryComponent,
    OrderComponent,
    SupervisorComponent,
    ChatItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatSelectModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
