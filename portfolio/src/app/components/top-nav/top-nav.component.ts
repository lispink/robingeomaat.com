import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-nav',
	templateUrl: './top-nav.component.html',
	styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
	isNavbarCollapsed = true;
	@Input() title: string;
	@Input() links: Array<Array<{ text: string, link: any[] }>>;

	constructor() { }

	ngOnInit() {
		this.links = [
			[{text: 'contact', link: [ 'contact' ]}],
		];
	}

}
