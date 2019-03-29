import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatButtonModule,
	MatIconModule,
	MatMenuModule,
	MatToolbarModule
	} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { TopNavComponent } from './top-nav.component';



describe('TopNavComponent', () => {
	let component: TopNavComponent;
	let fixture: ComponentFixture<TopNavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				MatMenuModule,
				MatButtonModule,
				MatIconModule,
				MatToolbarModule
			],
			declarations: [TopNavComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TopNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
