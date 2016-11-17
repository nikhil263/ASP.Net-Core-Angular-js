import { Component, OnInit } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = "Hello from About";
    }

    ngOnInit() {

    }

    public MyCanDeactivate() : boolean {
        return true;
    }
}
