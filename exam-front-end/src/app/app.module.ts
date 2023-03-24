import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenuItemComponent } from './shared/menu-item/menu-item.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/header/header.component';
import { ResumeComponent } from './container/resume/resume.component';
import { Exam1Component } from './container/exam1/exam1.component';
import { Exam2Component } from './container/exam2/exam2.component';
import { Exam3dialogComponent } from './container/exam3dialog/exam3dialog.component';
import { Exam3listComponent } from './container/exam3list/exam3list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    MenuItemComponent,
    BreadcrumbComponent,
    HeaderComponent,
    ResumeComponent,
    Exam1Component,
    Exam2Component,
    Exam3dialogComponent,
    Exam3listComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
