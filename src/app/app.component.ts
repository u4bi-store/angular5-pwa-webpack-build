import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template : require('raw-loader!./app.component.html'),
    styles : [ require('raw-loader!./app.component.css') ]
})
export class AppComponent implements OnInit {
    
    public title : string = 'u4bi app';

    constructor(){

    }

    ngOnInit(){
        console.log('on init ', this.title);
    }
    
}