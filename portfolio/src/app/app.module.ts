import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatIconModule,
	MatMenuModule,
	MatToolbarModule
	} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectComponent } from './pages/project/project.component';


@NgModule({
	declarations: [
		AppComponent,
		TopNavComponent,
		MainComponent,
		ContactComponent,
		ProjectComponent
	],
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		NgbCollapseModule,
		NgbDropdownModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
