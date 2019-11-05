import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonlayoutComponent,
    DragDropDirective,
    UploadFileComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true}),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
