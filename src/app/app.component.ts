import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template : '<h1>{{ title }}</h1>',
    styles : [ 'h1{ color: #FF00FF; }' ]
})
export class AppComponent implements OnInit {
    
    public title : string = 'u4bi app';

    constructor(){

    }

    ngOnInit(){
        console.log('on init ', this.title);
    }
    
}