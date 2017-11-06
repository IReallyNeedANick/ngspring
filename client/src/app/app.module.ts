import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import {LabDetailsService} from './sidebar/lab-details.service';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, ContentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  bootstrap: [AppComponent, SidebarComponent],
  providers: [LabDetailsService, ContentComponent]
})
export class AppModule {
}
