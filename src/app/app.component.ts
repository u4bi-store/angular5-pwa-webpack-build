import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    
    public avatar : string = require('../assets/u4bi.png');
    public title  : string = 'u4bi app';

    constructor(){

    }

    ngOnInit(){
        console.log('on init ', this.title);
    }
    
}