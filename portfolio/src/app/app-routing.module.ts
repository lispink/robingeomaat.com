import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'project/:id',
		component: ProjectComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
