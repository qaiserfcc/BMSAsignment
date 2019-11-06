import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsListingComponent } from './components/skills-listing/skills-listing.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

export const routes: Routes = [
    {
        path: '',
        component: UploadFileComponent
      },{
        path: 'upload',
        component: UploadFileComponent
      },{
        path: 'skills-listing',
        component: SkillsListingComponent     
      },
];