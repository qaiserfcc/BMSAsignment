import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

export const routes: Routes = [
    {
        path: '',
        component: UploadFileComponent
      },{
        path: 'upload',
        component: UploadFileComponent
      },{
        path: 'listing',
        component: ListingComponent     
      },
];