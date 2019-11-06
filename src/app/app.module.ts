import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { SkillsListingComponent } from './components/skills-listing/skills-listing.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CommonlayoutComponent } from './components/commonlayout/commonlayout.component';
import { SkillsComponent } from './components/skills-listing/skills/skills.component';
import { StandardSkillsComponent } from './components/skills-listing/standard-skills/standard-skills.component';
import { MappedSkillsComponent } from './components/skills-listing/mapped-skills/mapped-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonlayoutComponent,
    DragDropDirective,
    UploadFileComponent,
    SkillsListingComponent,
    SkillsComponent,
    StandardSkillsComponent,
    MappedSkillsComponent
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
